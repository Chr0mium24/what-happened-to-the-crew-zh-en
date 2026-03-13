#!/usr/bin/env bash
set -euo pipefail
PORT="${1:-8787}"
uv run python -m http.server "$PORT" --directory "$(dirname "$0")/local-game"
