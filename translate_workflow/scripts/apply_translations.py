#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path

PLACEHOLDER_RE = re.compile(
    r"(</?[a-zA-Z][^>]*>|&[A-Za-z0-9]+|file:[A-Za-z0-9-]+|\$\{[^}]+\})"
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Apply translated strings to a JS bundle using extracted offsets."
    )
    parser.add_argument("bundle", type=Path, help="Path to source JS bundle")
    parser.add_argument("translations", type=Path, help="Path to translations JSON")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        help="Output bundle path (default: <bundle>.translated.js)",
    )
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="Overwrite source bundle directly",
    )
    parser.add_argument(
        "--skip-sha-check",
        action="store_true",
        help="Skip SHA256 check against extraction metadata",
    )
    parser.add_argument(
        "--token-check",
        choices=["error", "warn", "off"],
        default="error",
        help="Placeholder token consistency check level (default: error)",
    )
    return parser.parse_args()


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def js_escape_for_quote(text: str, quote: str) -> str:
    escaped: list[str] = []
    for ch in text:
        if ch == "\\":
            escaped.append("\\\\")
        elif ch == "\n":
            escaped.append("\\n")
        elif ch == "\r":
            escaped.append("\\r")
        elif ch == "\t":
            escaped.append("\\t")
        elif ch == "\b":
            escaped.append("\\b")
        elif ch == "\f":
            escaped.append("\\f")
        elif ch == "\v":
            escaped.append("\\v")
        elif ch == quote:
            escaped.append("\\" + ch)
        elif ord(ch) < 0x20:
            escaped.append(f"\\u{ord(ch):04x}")
        else:
            escaped.append(ch)

    out = "".join(escaped)
    if quote == "`":
        out = out.replace("${", r"\${")
    return out


def token_counter(s: str) -> Counter[str]:
    return Counter(PLACEHOLDER_RE.findall(s))


def validate_tokens(source: str, target: str) -> tuple[bool, str]:
    src = token_counter(source)
    dst = token_counter(target)
    if src == dst:
        return True, ""
    # Bilingual format support: "<zh>\n\n<source>".
    # In this mode, token counts can be duplicated in the full target.
    if target.endswith(source):
        prefix = target[: -len(source)].rstrip("\r\n")
        if prefix:
            pre = token_counter(prefix)
            if pre == src:
                return True, ""
    return False, f"placeholder tokens differ: source={dict(src)} target={dict(dst)}"


def default_output_path(bundle_path: Path) -> Path:
    return bundle_path.with_name(f"{bundle_path.stem}.translated{bundle_path.suffix}")


def main() -> int:
    args = parse_args()
    bundle_path = args.bundle.resolve()
    translations_path = args.translations.resolve()

    if args.in_place and args.output:
        raise SystemExit("Use either --in-place or --output, not both.")

    bundle_text = bundle_path.read_text(encoding="utf-8", errors="strict")
    payload = json.loads(translations_path.read_text(encoding="utf-8"))
    meta = payload.get("meta", {})
    entries = payload.get("entries", [])

    if not args.skip_sha_check:
        expected_sha = meta.get("source_sha256")
        actual_sha = sha256_text(bundle_text)
        if expected_sha and expected_sha != actual_sha:
            raise SystemExit(
                "SHA256 mismatch: bundle content differs from extraction source. "
                "Re-run extraction or pass --skip-sha-check."
            )

    replacements = []
    token_warnings = 0
    for item in entries:
        source = item.get("source", "")
        target = item.get("translation", "")
        if not isinstance(target, str):
            raise SystemExit(f"Invalid translation type for id={item.get('id')}")
        if target == "" or target == source:
            continue

        ok, reason = validate_tokens(source, target)
        if not ok:
            message = f"id={item.get('id')} {reason}"
            if args.token_check == "error":
                raise SystemExit(f"Token check failed: {message}")
            if args.token_check == "warn":
                print(f"Warning: {message}")
                token_warnings += 1

        start = item.get("start")
        end = item.get("end")
        raw = item.get("raw", "")
        quote = item.get("quote", '"')
        if not isinstance(start, int) or not isinstance(end, int):
            raise SystemExit(f"Invalid offsets for id={item.get('id')}")
        if not isinstance(raw, str):
            raise SystemExit(f"Invalid raw field for id={item.get('id')}")
        if quote not in {'"', "'", "`"}:
            quote = '"'

        replacements.append(
            {
                "id": item.get("id"),
                "start": start,
                "end": end,
                "raw": raw,
                "new_raw": js_escape_for_quote(target, quote),
            }
        )

    replacements.sort(key=lambda r: r["start"], reverse=True)

    out_text = bundle_text
    for rep in replacements:
        start = rep["start"]
        end = rep["end"]
        current = out_text[start:end]
        if current != rep["raw"]:
            raise SystemExit(
                f"Offset validation failed at {rep['id']}: expected raw segment changed. "
                "Re-run extraction against current bundle."
            )
        out_text = out_text[:start] + rep["new_raw"] + out_text[end:]

    if args.in_place:
        output_path = bundle_path
    else:
        output_path = args.output.resolve() if args.output else default_output_path(bundle_path)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(out_text, encoding="utf-8")

    print(f"Applied {len(replacements)} replacements")
    if args.token_check == "warn":
        print(f"Token warnings: {token_warnings}")
    print(f"Bundle in: {bundle_path}")
    print(f"Bundle out: {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
