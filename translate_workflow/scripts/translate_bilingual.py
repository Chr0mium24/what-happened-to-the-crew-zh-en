#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import random
import re
import time
from collections import Counter
from collections import deque
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
import traceback

import requests

DEFAULT_ENDPOINT = "https://api.edgefn.net/v1/chat/completions"
DEFAULT_MODEL = "DeepSeek-V3"
TOKEN_RE = re.compile(
    r"(</?[a-zA-Z][^>]*>|&[A-Za-z0-9]+|file:[A-Za-z0-9-]+|\$\{[^}]+\})"
)
CODE_FENCE_RE = re.compile(r"```(?:json)?\s*([\s\S]*?)\s*```", re.IGNORECASE)
TRAILING_COMMA_RE = re.compile(r",(\s*[}\]])")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Translate extracted entries using EdgeFn chat completions, with glossary "
            "consistency + translation memory, and output bilingual text (ZH then EN)."
        )
    )
    parser.add_argument("input_json", type=Path, help="Input translations JSON")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("translations.zh-en.json"),
        help="Output translations JSON",
    )
    parser.add_argument(
        "--memory",
        type=Path,
        default=Path("translation_memory.json"),
        help="Translation memory JSON path",
    )
    parser.add_argument(
        "--glossary",
        type=Path,
        default=Path("translation_glossary.json"),
        help="Glossary JSON path",
    )
    parser.add_argument("--endpoint", default=DEFAULT_ENDPOINT, help="API endpoint")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="Model name")
    parser.add_argument(
        "--api-key",
        default=None,
        help="API key; if omitted, read EDGEFN_API_KEY env var",
    )
    parser.add_argument(
        "--env-file",
        type=Path,
        default=Path(".env"),
        help="Optional .env file path for API key loading",
    )
    parser.add_argument(
        "--api-key-var",
        default="EDGEFN_API_KEY",
        help="Preferred API key variable name in env/.env",
    )
    parser.add_argument(
        "--api-key-from-file",
        type=Path,
        default=None,
        help="Optional: extract Bearer key from a file (e.g. test.py)",
    )
    parser.add_argument(
        "--batch-size",
        type=int,
        default=24,
        help="Max entries per request (dynamic batching upper bound)",
    )
    parser.add_argument(
        "--target-batch-tokens",
        type=int,
        default=1800,
        help="Approx token budget per request (dynamic batching target)",
    )
    parser.add_argument(
        "--max-items",
        type=int,
        default=0,
        help="Max entries to translate this run (0 = all pending)",
    )
    parser.add_argument(
        "--overwrite-existing",
        action="store_true",
        help="Overwrite non-empty translation fields",
    )
    parser.add_argument(
        "--timeout", type=int, default=120, help="HTTP timeout seconds"
    )
    parser.add_argument(
        "--max-retries",
        type=int,
        default=5,
        help="Max retries for transient API failures per batch",
    )
    parser.add_argument(
        "--retry-initial-delay",
        type=float,
        default=1.5,
        help="Initial retry delay seconds",
    )
    parser.add_argument(
        "--retry-max-delay",
        type=float,
        default=20.0,
        help="Max retry delay seconds",
    )
    parser.add_argument(
        "--error-log",
        type=Path,
        default=Path("translate_errors.jsonl"),
        help="Structured error log file path",
    )
    parser.add_argument(
        "--error-body-chars",
        type=int,
        default=1500,
        help="Max chars of response/error body kept in logs",
    )
    return parser.parse_args()


def load_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def append_jsonl(path: Path, row: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = {"ts_utc": datetime.now(timezone.utc).isoformat(), **row}
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(payload, ensure_ascii=False) + "\n")


def token_counter(text: str) -> Counter[str]:
    return Counter(TOKEN_RE.findall(text))


def estimate_tokens(text: str) -> int:
    # Rough estimate for mixed EN/CN prompts.
    return max(1, int(len(text) / 4) + 8)


def estimate_entry_tokens(item: dict[str, Any]) -> int:
    source = item.get("source", "")
    if not isinstance(source, str):
        source = ""
    return estimate_tokens(source) + 12


def estimate_batch_tokens(batch: list[dict[str, Any]]) -> int:
    return sum(estimate_entry_tokens(item) for item in batch)


def build_dynamic_batch(
    pending: list[dict[str, Any]],
    start: int,
    *,
    target_tokens: int,
    max_items: int,
) -> tuple[list[dict[str, Any]], int, int]:
    batch: list[dict[str, Any]] = []
    used = 0
    idx = start
    while idx < len(pending) and len(batch) < max_items:
        est = estimate_entry_tokens(pending[idx])
        if batch and used + est > target_tokens:
            break
        batch.append(pending[idx])
        used += est
        idx += 1
    if not batch and idx < len(pending):
        batch = [pending[idx]]
        used = estimate_entry_tokens(pending[idx])
        idx += 1
    return batch, idx, used


def should_translate(text: str) -> bool:
    if not text.strip():
        return False
    if not re.search(r"[A-Za-z]", text):
        return False
    # Skip pure symbols/short markers.
    if re.fullmatch(r"[\W_]+", text):
        return False
    return True


def _strip_code_fence(text: str) -> str | None:
    m = CODE_FENCE_RE.search(text)
    if not m:
        return None
    return m.group(1).strip()


def _remove_trailing_commas(text: str) -> str:
    return TRAILING_COMMA_RE.sub(r"\1", text)


def _extract_balanced_json_objects(text: str) -> list[str]:
    out: list[str] = []
    in_str = False
    escape = False
    start = -1
    depth = 0
    for i, ch in enumerate(text):
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == '"':
                in_str = False
            continue
        if ch == '"':
            in_str = True
            continue
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
            continue
        if ch == "}":
            if depth > 0:
                depth -= 1
                if depth == 0 and start != -1:
                    out.append(text[start : i + 1])
                    start = -1
    return out


def _loads_json_with_repairs(text: str) -> Any:
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return json.loads(_remove_trailing_commas(text))


def parse_response_payload(content: str) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    content = content.strip()
    candidates: list[str] = [content]
    fenced = _strip_code_fence(content)
    if fenced:
        candidates.append(fenced)
    candidates.extend(_extract_balanced_json_objects(content))

    seen: set[str] = set()
    data: Any = None
    last_err: Exception | None = None
    for cand in candidates:
        c = cand.strip()
        if not c or c in seen:
            continue
        seen.add(c)
        try:
            data = _loads_json_with_repairs(c)
            break
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            continue

    if data is None:
        if last_err is not None:
            raise last_err
        raise ValueError("Unable to parse model output as JSON.")

    # Backward compatibility: allow raw list output.
    if isinstance(data, list):
        data = {"translations": data, "glossary_updates": []}
    if not isinstance(data, dict):
        raise ValueError("Model output must be a JSON object or translations array.")

    out: list[dict[str, str]] = []
    raw_translations = data.get("translations", [])
    if not isinstance(raw_translations, list):
        raw_translations = []
    for item in raw_translations:
        if not isinstance(item, dict):
            continue
        i = item.get("id")
        zh = item.get("zh")
        if isinstance(i, str) and isinstance(zh, str):
            out.append({"id": i, "zh": zh})

    glossary_updates: list[dict[str, str]] = []
    raw_updates = data.get("glossary_updates", [])
    if not isinstance(raw_updates, list):
        raw_updates = []
    for item in raw_updates:
        if not isinstance(item, dict):
            continue
        src = item.get("source")
        tgt = item.get("target")
        cat = item.get("category", "term")
        if isinstance(src, str) and isinstance(tgt, str):
            glossary_updates.append(
                {"source": src.strip(), "target": tgt.strip(), "category": str(cat)}
            )
    return out, glossary_updates


class ApiBatchFailure(Exception):
    def __init__(
        self,
        *,
        error_type: str,
        message: str,
        attempts: int,
        status: int | None = None,
        response_snippet: str | None = None,
    ) -> None:
        super().__init__(message)
        self.error_type = error_type
        self.message = message
        self.attempts = attempts
        self.status = status
        self.response_snippet = response_snippet


def build_glossary_prompt(glossary: dict[str, Any]) -> str:
    proper = glossary.get("proper_nouns", {})
    style = glossary.get("style", {})
    lines = []
    lines.append("Glossary (must follow when source term appears):")
    if isinstance(proper, dict) and proper:
        for src, tgt in proper.items():
            lines.append(f"- {src} => {tgt}")
    else:
        lines.append("- (empty)")
    if isinstance(style, dict) and style:
        lines.append("Style preferences:")
        for k, v in style.items():
            lines.append(f"- {k}: {v}")
    return "\n".join(lines)


def call_translate_api(
    *,
    endpoint: str,
    model: str,
    api_key: str,
    timeout: int,
    glossary_prompt: str,
    entries: list[dict[str, str]],
) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    messages = [
        {
            "role": "system",
            "content": (
                "You are a professional game localization translator.\n"
                "Task: translate each source string into Simplified Chinese, and extract glossary terms.\n"
                "Rules:\n"
                "1) Keep placeholders/tokens exactly unchanged: HTML tags, entities like &A, file:xxx, ${...}\n"
                "2) Keep line breaks where reasonable\n"
                "3) Follow glossary strictly for term consistency\n"
                "4) Extract only stable proper nouns/terms (names, places, organizations, key lore terms)\n"
                "5) Return strictly valid JSON (double quotes, escaped newlines as \\n, no trailing commas)\n"
                "6) Output ONLY a JSON object with this schema:\n"
                "{\n"
                "  \"translations\": [{\"id\":\"E0001\",\"zh\":\"...\"}],\n"
                "  \"glossary_updates\": [{\"source\":\"Niflheim\",\"target\":\"尼福尔海姆\",\"category\":\"place\"}]\n"
                "}\n"
            ),
        },
        {
            "role": "user",
            "content": (
                f"{glossary_prompt}\n\n"
                "Translate this JSON array:\n"
                f"{json.dumps(entries, ensure_ascii=False)}"
            ),
        },
    ]
    payload = {"model": model, "messages": messages}
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    response = requests.post(endpoint, headers=headers, json=payload, timeout=timeout)
    response.raise_for_status()
    response_text = response.text
    try:
        body = response.json()
    except Exception as exc:  # noqa: BLE001
        raise ApiBatchFailure(
            error_type="ResponseJSONDecodeError",
            message=str(exc),
            attempts=1,
            status=response.status_code,
            response_snippet=response_text[:1500],
        ) from exc

    choices = body.get("choices", [])
    choice0 = choices[0] if isinstance(choices, list) and choices else {}
    message = choice0.get("message", {}) if isinstance(choice0, dict) else {}
    finish_reason = choice0.get("finish_reason") if isinstance(choice0, dict) else None
    content = message.get("content") if isinstance(message, dict) else None

    api_error = body.get("error", {})
    api_error_code = ""
    if isinstance(api_error, dict):
        api_error_code = str(api_error.get("code", "")).strip()

    if finish_reason == "content_filter" or api_error_code == "data_inspection_failed":
        snippet = content if isinstance(content, str) else json.dumps(body, ensure_ascii=False)[:1500]
        raise ApiBatchFailure(
            error_type="ContentFilter",
            message="API content filter triggered",
            attempts=1,
            status=response.status_code,
            response_snippet=snippet[:1500],
        )

    if not isinstance(content, str):
        raise ApiBatchFailure(
            error_type="InvalidContentType",
            message=f"message.content is {type(content).__name__}, expected str",
            attempts=1,
            status=response.status_code,
            response_snippet=json.dumps(body, ensure_ascii=False)[:1500],
        )

    try:
        return parse_response_payload(content)
    except Exception as exc:  # noqa: BLE001
        raise ApiBatchFailure(
            error_type=type(exc).__name__,
            message=str(exc),
            attempts=1,
            status=response.status_code,
            response_snippet=content[:1500],
        ) from exc


def is_transient_http_status(status: int | None) -> bool:
    return status in {408, 409, 425, 429, 500, 502, 503, 504}


def call_translate_api_with_retry(
    *,
    endpoint: str,
    model: str,
    api_key: str,
    timeout: int,
    glossary_prompt: str,
    entries: list[dict[str, str]],
    max_retries: int,
    retry_initial_delay: float,
    retry_max_delay: float,
    error_log: Path,
    error_body_chars: int,
) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    attempt = 1
    while True:
        try:
            return call_translate_api(
                endpoint=endpoint,
                model=model,
                api_key=api_key,
                timeout=timeout,
                glossary_prompt=glossary_prompt,
                entries=entries,
            )
        except ApiBatchFailure as exc:
            # Content filter is deterministic for the same payload: do not retry this batch.
            if exc.error_type == "ContentFilter":
                raise
            if attempt >= max_retries:
                raise ApiBatchFailure(
                    error_type=exc.error_type,
                    message=exc.message,
                    attempts=attempt,
                    status=exc.status,
                    response_snippet=exc.response_snippet,
                ) from exc
            delay = min(retry_max_delay, retry_initial_delay * (2 ** (attempt - 1)))
            delay *= 0.85 + random.random() * 0.3
            append_jsonl(
                error_log,
                {
                    "event": "retry",
                    "error_type": exc.error_type,
                    "attempt": attempt,
                    "max_retries": max_retries,
                    "status": exc.status,
                    "delay_sec": round(delay, 3),
                    "entries": [e.get("id") for e in entries],
                    "message": exc.message,
                    "response_snippet": exc.response_snippet,
                },
            )
            print(
                f"Retry {attempt}/{max_retries} after {exc.error_type}, "
                f"sleep {delay:.1f}s"
            )
            time.sleep(delay)
            attempt += 1
        except requests.HTTPError as exc:
            status = exc.response.status_code if exc.response is not None else None
            response_text = ""
            if exc.response is not None:
                try:
                    response_text = exc.response.text
                except Exception:
                    response_text = ""
            snippet = response_text[:error_body_chars]
            transient = is_transient_http_status(status)
            if not transient or attempt >= max_retries:
                raise ApiBatchFailure(
                    error_type="HTTPError",
                    message=str(exc),
                    attempts=attempt,
                    status=status,
                    response_snippet=snippet or None,
                ) from exc
            delay = min(retry_max_delay, retry_initial_delay * (2 ** (attempt - 1)))
            delay *= 0.85 + random.random() * 0.3
            append_jsonl(
                error_log,
                {
                    "event": "retry",
                    "error_type": "HTTPError",
                    "attempt": attempt,
                    "max_retries": max_retries,
                    "status": status,
                    "delay_sec": round(delay, 3),
                    "entries": [e.get("id") for e in entries],
                    "response_snippet": snippet,
                },
            )
            print(
                f"Retry {attempt}/{max_retries} after HTTP {status}, "
                f"sleep {delay:.1f}s"
            )
            time.sleep(delay)
            attempt += 1
        except (requests.RequestException, ValueError, KeyError, json.JSONDecodeError) as exc:
            if attempt >= max_retries:
                raise ApiBatchFailure(
                    error_type=type(exc).__name__,
                    message=str(exc),
                    attempts=attempt,
                ) from exc
            delay = min(retry_max_delay, retry_initial_delay * (2 ** (attempt - 1)))
            delay *= 0.85 + random.random() * 0.3
            append_jsonl(
                error_log,
                {
                    "event": "retry",
                    "error_type": type(exc).__name__,
                    "attempt": attempt,
                    "max_retries": max_retries,
                    "delay_sec": round(delay, 3),
                    "entries": [e.get("id") for e in entries],
                    "message": str(exc),
                },
            )
            print(
                f"Retry {attempt}/{max_retries} after {type(exc).__name__}, "
                f"sleep {delay:.1f}s"
            )
            time.sleep(delay)
            attempt += 1


def extract_api_key_from_file(path: Path) -> str | None:
    if not path.exists():
        return None
    text = path.read_text(encoding="utf-8", errors="ignore")
    match = re.search(r"Bearer\s+([A-Za-z0-9\-_.]+)", text)
    if match:
        return match.group(1)
    return None


def load_env_file(path: Path) -> dict[str, str]:
    if not path.exists():
        return {}
    data: dict[str, str] = {}
    for raw_line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("export "):
            line = line[len("export ") :].strip()
        if "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip()
        if not key:
            continue
        if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
            value = value[1:-1]
        data[key] = value
    return data


def resolve_api_key(args: argparse.Namespace, env_file_values: dict[str, str]) -> str | None:
    if args.api_key:
        return args.api_key

    preferred = args.api_key_var
    if preferred:
        v = os.getenv(preferred)
        if v:
            return v
        if preferred in env_file_values and env_file_values[preferred]:
            return env_file_values[preferred]

    candidates = [
        "API_KEY",
    ]
    for key in candidates:
        v = os.getenv(key)
        if v:
            return v
    for key in candidates:
        v = env_file_values.get(key)
        if v:
            return v

    for key, value in env_file_values.items():
        k = key.lower()
        if "api" in k and "key" in k and value:
            return value
    for key, value in os.environ.items():
        k = key.lower()
        if "api" in k and "key" in k and value:
            return value
    return None


def apply_glossary_fallback(
    source: str, zh: str, proper_nouns: dict[str, str]
) -> tuple[str, list[str]]:
    warnings: list[str] = []
    patched = zh
    for src, tgt in proper_nouns.items():
        if src in source and tgt not in patched:
            # Last-resort fallback: replace source mention with preferred target.
            if src in patched:
                patched = patched.replace(src, tgt)
            else:
                warnings.append(f"missing glossary target: {src} => {tgt}")
    return patched, warnings


def merge_glossary_updates(
    glossary: dict[str, Any], updates: list[dict[str, str]]
) -> tuple[int, int]:
    proper = glossary.setdefault("proper_nouns", {})
    if not isinstance(proper, dict):
        proper = {}
        glossary["proper_nouns"] = proper
    log = glossary.setdefault("ai_generated", [])
    if not isinstance(log, list):
        log = []
        glossary["ai_generated"] = log

    added = 0
    conflicted = 0
    for u in updates:
        src = u.get("source", "").strip()
        tgt = u.get("target", "").strip()
        cat = u.get("category", "term").strip() or "term"
        if not src or not tgt:
            continue
        old = proper.get(src)
        if old is None:
            proper[src] = tgt
            log.append({"source": src, "target": tgt, "category": cat})
            added += 1
        elif old != tgt:
            conflicted += 1
    return added, conflicted


def restore_from_existing_output(
    input_entries: list[dict[str, Any]], output_path: Path
) -> int:
    if not output_path.exists():
        return 0
    existing = load_json(output_path, default={})
    existing_entries = existing.get("entries", [])
    if not isinstance(existing_entries, list):
        return 0
    by_id: dict[str, dict[str, Any]] = {}
    for item in existing_entries:
        if isinstance(item, dict) and isinstance(item.get("id"), str):
            by_id[item["id"]] = item

    restored = 0
    for item in input_entries:
        item_id = item.get("id")
        if not isinstance(item_id, str):
            continue
        old = by_id.get(item_id)
        if not old:
            continue
        old_translation = old.get("translation", "")
        if not isinstance(old_translation, str) or not old_translation.strip():
            continue
        if isinstance(item.get("translation"), str) and item["translation"].strip():
            continue
        if old.get("source") != item.get("source"):
            continue
        item["translation"] = old_translation
        restored += 1
    return restored


def build_entry_debug(items: list[dict[str, Any]], preview_chars: int = 120) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for it in items:
        src = it.get("source", "")
        if not isinstance(src, str):
            src = ""
        out.append(
            {
                "id": str(it.get("id", "")),
                "key": str(it.get("key", "")),
                "source_preview": src.replace("\n", "\\n")[:preview_chars],
            }
        )
    return out


def main() -> int:
    args = parse_args()
    env_file_values = load_env_file(args.env_file.resolve())
    api_key = resolve_api_key(args, env_file_values)
    if not api_key and args.api_key_from_file:
        api_key = extract_api_key_from_file(args.api_key_from_file)
    if not api_key:
        raise SystemExit(
            "Missing API key. Set env var, put key in .env, pass --api-key, or use --api-key-from-file."
        )

    payload = load_json(args.input_json, default={})
    entries: list[dict[str, Any]] = payload.get("entries", [])
    if not isinstance(entries, list):
        raise SystemExit("Invalid input format: entries must be an array.")
    restored = restore_from_existing_output(entries, args.output.resolve())

    glossary = load_json(args.glossary, default={})
    if not args.glossary.exists():
        glossary = {
            "proper_nouns": {
                "Niflheim": "尼福尔海姆",
                "Vanaheim": "瓦纳海姆",
                "Bifrost": "彩虹桥",
                "Kepler-186f": "开普勒-186f",
                "Bushmonkey": "Bushmonkey",
            },
            "style": {
                "tone": "sci-fi mystery, concise but atmospheric",
                "output": "Simplified Chinese",
            },
        }
        save_json(args.glossary, glossary)

    memory = load_json(args.memory, default={"pairs": {}})
    if "pairs" not in memory or not isinstance(memory["pairs"], dict):
        memory = {"pairs": {}}
    pairs: dict[str, str] = memory["pairs"]

    pending: list[dict[str, Any]] = []
    translated = 0
    skipped = 0
    from_memory = 0
    blocked_by_filter = 0
    deferred_single_failures = 0
    glossary_added = 0
    glossary_conflicted = 0
    api_calls = 0

    for item in entries:
        source = item.get("source", "")
        current = item.get("translation", "")
        if not isinstance(source, str):
            skipped += 1
            continue
        if not args.overwrite_existing and isinstance(current, str) and current.strip():
            skipped += 1
            continue
        if not should_translate(source):
            skipped += 1
            continue

        if source in pairs:
            zh = pairs[source]
            item["translation"] = f"{zh}\n\n{source}"
            from_memory += 1
            continue

        pending.append(item)

    if args.max_items > 0:
        pending = pending[: args.max_items]

    glossary_prompt = build_glossary_prompt(glossary if isinstance(glossary, dict) else {})
    proper_nouns = glossary.get("proper_nouns", {}) if isinstance(glossary, dict) else {}
    if not isinstance(proper_nouns, dict):
        proper_nouns = {}

    batch_queue: deque[tuple[list[dict[str, Any]], int]] = deque()
    i = 0
    while i < len(pending):
        batch, next_i, batch_tokens = build_dynamic_batch(
            pending,
            i,
            target_tokens=args.target_batch_tokens,
            max_items=args.batch_size,
        )
        i = next_i
        if not batch:
            break
        batch_queue.append((batch, batch_tokens))

    while batch_queue:
        batch, batch_tokens = batch_queue.popleft()
        req_items = [{"id": it["id"], "source": it["source"]} for it in batch]
        try:
            results, updates = call_translate_api_with_retry(
                endpoint=args.endpoint,
                model=args.model,
                api_key=api_key,
                timeout=args.timeout,
                glossary_prompt=glossary_prompt,
                entries=req_items,
                max_retries=args.max_retries,
                retry_initial_delay=args.retry_initial_delay,
                retry_max_delay=args.retry_max_delay,
                error_log=args.error_log.resolve(),
                error_body_chars=args.error_body_chars,
            )
        except Exception as exc:
            if isinstance(exc, ApiBatchFailure):
                append_jsonl(
                    args.error_log.resolve(),
                    {
                        "event": "batch_failed",
                        "error_type": exc.error_type,
                        "message": exc.message,
                        "attempts": exc.attempts,
                        "status": exc.status,
                        "entries": build_entry_debug(batch),
                        "response_snippet": exc.response_snippet,
                    },
                )
            else:
                append_jsonl(
                    args.error_log.resolve(),
                    {
                        "event": "batch_failed",
                        "error_type": type(exc).__name__,
                        "message": str(exc),
                        "entries": build_entry_debug(batch),
                        "traceback": traceback.format_exc(),
                    },
                )
            if len(batch) > 1:
                mid = len(batch) // 2
                left = batch[:mid]
                right = batch[mid:]
                batch_queue.appendleft((right, estimate_batch_tokens(right)))
                batch_queue.appendleft((left, estimate_batch_tokens(left)))
                append_jsonl(
                    args.error_log.resolve(),
                    {
                        "event": "batch_split",
                        "reason": type(exc).__name__,
                        "left_ids": [x.get("id") for x in left],
                        "right_ids": [x.get("id") for x in right],
                    },
                )
                print(
                    f"Batch failed ({type(exc).__name__}), splitting into "
                    f"{len(left)} + {len(right)} and continuing."
                )
                continue
            if isinstance(exc, ApiBatchFailure):
                if exc.error_type == "ContentFilter":
                    blocked_by_filter += 1
                    append_jsonl(
                        args.error_log.resolve(),
                        {
                            "event": "entry_skipped_content_filter",
                            "entry": build_entry_debug(batch)[0],
                            "message": exc.message,
                            "response_snippet": exc.response_snippet,
                        },
                    )
                    print(
                        f"Skip 1 entry due to content filter: {batch[0].get('id')}"
                    )
                    continue
                deferred_single_failures += 1
                append_jsonl(
                    args.error_log.resolve(),
                    {
                        "event": "entry_deferred_failure",
                        "entry": build_entry_debug(batch)[0],
                        "error_type": exc.error_type,
                        "message": exc.message,
                        "status": exc.status,
                        "attempts": exc.attempts,
                        "response_snippet": exc.response_snippet,
                    },
                )
                print(
                    f"Defer 1 entry after retries: {batch[0].get('id')} "
                    f"({exc.error_type}). Continue others."
                )
                continue
            print(
                f"Batch failed permanently ({type(exc).__name__}). "
                f"See log: {args.error_log.resolve()}"
            )
            raise

        api_calls += 1
        print(
            f"Batch {api_calls}: items={len(batch)}, est_tokens={batch_tokens}"
        )
        added, conflicted = merge_glossary_updates(glossary, updates)
        glossary_added += added
        glossary_conflicted += conflicted
        proper_nouns = glossary.get("proper_nouns", {})
        if not isinstance(proper_nouns, dict):
            proper_nouns = {}
        glossary_prompt = build_glossary_prompt(glossary if isinstance(glossary, dict) else {})
        by_id = {x["id"]: x["zh"] for x in results}

        for it in batch:
            source = it["source"]
            zh = by_id.get(it["id"], "")
            if not zh:
                continue
            zh, _warnings = apply_glossary_fallback(source, zh, proper_nouns)

            # Safety: do not allow placeholder token mismatch.
            if token_counter(source) != token_counter(zh):
                continue

            it["translation"] = f"{zh}\n\n{source}"
            pairs[source] = zh
            translated += 1

        # Checkpoint after every successful batch so reruns can resume.
        save_json(args.output, payload)
        save_json(args.memory, memory)
        save_json(args.glossary, glossary)

    payload.setdefault("meta", {})
    payload["meta"]["bilingual_format"] = "zh_then_en"
    payload["meta"]["translation_framework"] = {
        "endpoint": args.endpoint,
        "model": args.model,
        "glossary": str(args.glossary.resolve()),
        "memory": str(args.memory.resolve()),
    }
    save_json(args.output, payload)
    save_json(args.memory, memory)

    print(f"Input entries: {len(entries)}")
    print(f"API calls: {api_calls}")
    print(f"Restored from existing output: {restored}")
    print(f"Translated this run: {translated}")
    print(f"Filled from memory: {from_memory}")
    print(f"Glossary added by AI: {glossary_added}")
    print(f"Glossary conflicts ignored: {glossary_conflicted}")
    print(f"Skipped by content filter: {blocked_by_filter}")
    print(f"Deferred single-entry failures: {deferred_single_failures}")
    print(f"Skipped: {skipped}")
    print(f"Output: {args.output.resolve()}")
    print(f"Glossary: {args.glossary.resolve()}")
    print(f"Memory: {args.memory.resolve()}")
    print(f"Error log: {args.error_log.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
