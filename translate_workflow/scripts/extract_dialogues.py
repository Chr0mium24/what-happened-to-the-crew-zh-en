#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

DEFAULT_KEYS = ["content", "children", "title", "label", "text", "placeholder"]


@dataclass
class Entry:
    entry_id: str
    key: str
    quote: str
    start: int
    end: int
    raw: str
    source: str
    translation: str

    def to_dict(self) -> dict:
        return {
            "id": self.entry_id,
            "key": self.key,
            "quote": self.quote,
            "start": self.start,
            "end": self.end,
            "raw": self.raw,
            "source": self.source,
            "translation": self.translation,
        }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Extract translatable strings from a bundled JS file."
    )
    parser.add_argument("bundle", type=Path, help="Path to JS bundle file")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("translations.json"),
        help="Output JSON file (default: translations.json)",
    )
    parser.add_argument(
        "--keys",
        nargs="+",
        default=DEFAULT_KEYS,
        help="Object keys to extract from (default: content children title label text placeholder)",
    )
    parser.add_argument(
        "--keep-empty",
        action="store_true",
        help="Keep entries with empty source text",
    )
    return parser.parse_args()


def decode_js_string(raw: str) -> str:
    out: list[str] = []
    i = 0
    n = len(raw)
    simple = {
        "n": "\n",
        "r": "\r",
        "t": "\t",
        "b": "\b",
        "f": "\f",
        "v": "\v",
        "0": "\0",
        "\\": "\\",
        '"': '"',
        "'": "'",
        "`": "`",
        "$": "$",
    }
    while i < n:
        ch = raw[i]
        if ch != "\\":
            out.append(ch)
            i += 1
            continue

        if i + 1 >= n:
            out.append("\\")
            break

        esc = raw[i + 1]
        if esc in simple:
            out.append(simple[esc])
            i += 2
            continue

        if esc == "x" and i + 3 < n:
            hx = raw[i + 2 : i + 4]
            if all(c in "0123456789abcdefABCDEF" for c in hx):
                out.append(chr(int(hx, 16)))
                i += 4
                continue

        if esc == "u":
            if i + 2 < n and raw[i + 2] == "{":
                end = raw.find("}", i + 3)
                if end != -1:
                    code = raw[i + 3 : end]
                    if code and all(c in "0123456789abcdefABCDEF" for c in code):
                        out.append(chr(int(code, 16)))
                        i = end + 1
                        continue
            elif i + 5 < n:
                hx = raw[i + 2 : i + 6]
                if all(c in "0123456789abcdefABCDEF" for c in hx):
                    out.append(chr(int(hx, 16)))
                    i += 6
                    continue

        if esc == "\n":
            i += 2
            continue
        if esc == "\r":
            i += 3 if i + 2 < n and raw[i + 2] == "\n" else 2
            continue

        # Unknown JS escapes resolve to the escaped character itself.
        out.append(esc)
        i += 2

    return "".join(out)


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def build_pattern(keys: list[str]) -> re.Pattern[str]:
    key_part = "|".join(re.escape(k) for k in keys)
    pattern = (
        rf"(?P<key>{key_part})\s*:\s*"
        r"(?:(?P<q_d>\")(?P<raw_d>(?:\\.|[^\"\\])*)(?P=q_d)"
        r"|(?P<q_s>')(?P<raw_s>(?:\\.|[^'\\])*)(?P=q_s)"
        r"|(?P<q_b>`)(?P<raw_b>(?:\\.|[^`\\])*)(?P=q_b))"
    )
    return re.compile(pattern)


def extract_entries(text: str, keys: list[str], keep_empty: bool) -> list[Entry]:
    pattern = build_pattern(keys)
    entries: list[Entry] = []
    idx = 1
    for match in pattern.finditer(text):
        if match.group("q_d") is not None:
            raw_group = "raw_d"
            quote = '"'
        elif match.group("q_s") is not None:
            raw_group = "raw_s"
            quote = "'"
        else:
            raw_group = "raw_b"
            quote = "`"

        raw = match.group(raw_group)
        source = decode_js_string(raw)
        if not keep_empty and source == "":
            continue
        entry = Entry(
            entry_id=f"E{idx:04d}",
            key=match.group("key"),
            quote=quote,
            start=match.start(raw_group),
            end=match.end(raw_group),
            raw=raw,
            source=source,
            translation="",
        )
        entries.append(entry)
        idx += 1
    return entries


def main() -> int:
    args = parse_args()
    bundle_path = args.bundle.resolve()
    output_path = args.output.resolve()

    text = bundle_path.read_text(encoding="utf-8", errors="strict")
    entries = extract_entries(text=text, keys=args.keys, keep_empty=args.keep_empty)

    payload = {
        "meta": {
            "source_file": str(bundle_path),
            "source_sha256": sha256_text(text),
            "generated_at_utc": datetime.now(timezone.utc).isoformat(),
            "keys": args.keys,
            "count": len(entries),
        },
        "entries": [entry.to_dict() for entry in entries],
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(f"Extracted {len(entries)} entries")
    print(f"Bundle: {bundle_path}")
    print(f"Output: {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
