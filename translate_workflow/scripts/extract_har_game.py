#!/usr/bin/env python3
import argparse
import base64
import json
from pathlib import Path
from urllib.parse import urlparse


def decode_content(content: dict) -> bytes:
    text = content.get("text")
    if text is None:
        return b""
    if content.get("encoding") == "base64":
        return base64.b64decode(text)
    return text.encode("utf-8")


def rel_path_from_url(url: str, base_path: str) -> str | None:
    parsed = urlparse(url)
    if not parsed.path.startswith(base_path):
        return None
    rel = parsed.path[len(base_path) :]
    if not rel:
        rel = "index.html"
    return rel


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract itch.io HTML game assets from HAR")
    parser.add_argument("har", type=Path, help="Path to HAR file")
    parser.add_argument("out", type=Path, help="Output directory")
    parser.add_argument(
        "--base-url",
        default="https://html-classic.itch.zone/html/16027495/",
        help="Game base URL prefix to extract",
    )
    args = parser.parse_args()

    base = urlparse(args.base_url)
    base_prefix = f"{base.scheme}://{base.netloc}{base.path}"
    base_path = base.path

    data = json.loads(args.har.read_text(encoding="utf-8"))
    entries = data.get("log", {}).get("entries", [])

    extracted = 0
    for entry in entries:
        req = entry.get("request", {})
        res = entry.get("response", {})
        url = req.get("url", "")

        if not url.startswith(base_prefix):
            continue
        if int(res.get("status", 0)) != 200:
            continue

        content = res.get("content", {})
        if content.get("text") is None:
            continue

        rel = rel_path_from_url(url, base_path)
        if rel is None:
            continue

        out_path = args.out / rel
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_bytes(decode_content(content))
        extracted += 1

    if extracted == 0:
        raise SystemExit("No files extracted. Check --base-url and HAR contents.")

    print(f"Extracted {extracted} files to {args.out}")
    print(f"Entry point: {args.out / 'index.html'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
