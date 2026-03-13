# 翻译工作流

本仓库当前结构：

- `translate_workflow/scripts/`：翻译相关脚本
- `translate_workflow/data/`：翻译中间数据与产物
- `translate_workflow/.env`：API Key
- `local-game/`：游戏文件（含最终回填后的 JS）

## 1. 环境准备

在仓库根目录执行：

```bash
uv --version
```

## 2. 从 HAR 提取游戏资源（可选）

如果只有 HAR，可先提取到 `local-game/`：

```bash
uv run python translate_workflow/scripts/extract_har_game.py \
  bushmonkey.itch.io.har \
  local-game
```

可选指定 `--base-url`：

```bash
uv run python translate_workflow/scripts/extract_har_game.py \
  bushmonkey.itch.io.har \
  local-game \
  --base-url "https://html-classic.itch.zone/html/16027495/"
```

## 3. 抽取可翻译文本

```bash
uv run python translate_workflow/scripts/extract_dialogues.py \
  local-game/assets/index-BShpPEDB-EN.js \
  -o translate_workflow/data/translations.base.v2.json
```

## 4. 配置 API Key

在 `translate_workflow/.env` 中配置（推荐）：

```env
EDGEFN_API_KEY=your_api_key_here
```

如果变量名不是 `EDGEFN_API_KEY`，脚本也会尝试自动识别包含 `api` + `key` 的键名。

## 5. 运行 AI 翻译（双语：中文在前，英文在后）

```bash
uv run python translate_workflow/scripts/translate_bilingual.py \
  translate_workflow/data/translations.base.v2.json \
  -o translate_workflow/data/translations.zh-en.json \
  --target-batch-tokens 1800 \
  --batch-size 24 \
  --error-log translate_workflow/data/translate_errors.jsonl \
  --env-file translate_workflow/.env
```

说明：

- 支持断点续跑（重复执行同命令会继续未完成部分）。
- 自动维护：
  - `translate_workflow/data/translation_memory.json`
  - `translate_workflow/data/translation_glossary.json`

## 6. 回填翻译到新 JS

```bash
uv run python translate_workflow/scripts/apply_translations.py \
  local-game/assets/index-BShpPEDB-EN.js \
  translate_workflow/data/translations.zh-en.json \
  -o local-game/assets/index-BShpPEDB.zh-en.js
```

## 7. 加载翻译版 JS

编辑 `local-game/index.html`：

```html
<script type="module" crossorigin src="./assets/index-BShpPEDB.zh-en.js"></script>
```

## 8. 本地运行

```bash
./run_local_game.sh 8787
```

访问：

```text
http://127.0.0.1:8787/index.html
```

## 9. 排错建议

### 9.1 限流/服务错误（429/500/503）

降低批次压力：

```bash
uv run python translate_workflow/scripts/translate_bilingual.py \
  translate_workflow/data/translations.base.v2.json \
  -o translate_workflow/data/translations.zh-en.json \
  --target-batch-tokens 1200 \
  --batch-size 16 \
  --max-retries 6 \
  --error-log translate_workflow/data/translate_errors.jsonl \
  --env-file translate_workflow/.env
```

### 9.2 查看结构化错误日志

```bash
tail -f translate_workflow/data/translate_errors.jsonl
```

关键事件：

- `entry_deferred_failure`：单条临时失败，后续重跑可补
- `entry_skipped_content_filter`：命中内容审核，需人工处理

### 9.3 检查剩余未翻译条目

```bash
uv run python - <<'PY'
import json,re
from pathlib import Path
p=Path("translate_workflow/data/translations.zh-en.json")
d=json.loads(p.read_text("utf-8"))
missing=[e for e in d["entries"] if e.get("source","").strip() and not e.get("translation","").strip()]
print("missing_total =", len(missing))
print("missing_with_letters =", sum(1 for e in missing if re.search(r"[A-Za-z]", e.get("source",""))))
for e in missing[:20]:
    print(e["id"], e.get("key"), e.get("source","")[:120].replace("\\n","\\\\n"))
PY
```

## 10. 最小命令清单

```bash
# 1) 抽取
uv run python translate_workflow/scripts/extract_dialogues.py \
  local-game/assets/index-BShpPEDB-EN.js \
  -o translate_workflow/data/translations.base.v2.json

# 2) 翻译
uv run python translate_workflow/scripts/translate_bilingual.py \
  translate_workflow/data/translations.base.v2.json \
  -o translate_workflow/data/translations.zh-en.json \
  --env-file translate_workflow/.env

# 3) 回填
uv run python translate_workflow/scripts/apply_translations.py \
  local-game/assets/index-BShpPEDB-EN.js \
  translate_workflow/data/translations.zh-en.json \
  -o local-game/assets/index-BShpPEDB.zh-en.js
```
