#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Root-domain export for https://thrivewellcarecollective.com.
# Do not inherit a GitHub Pages base path from the environment.
unset GITHUB_PAGES
export NEXT_PUBLIC_BASE_PATH=""
export NEXT_PUBLIC_SITE_URL="https://thrivewellcarecollective.com"

npm run build
cp deploy/bluehost/.htaccess out/.htaccess

# Next inserts a noindex meta on the not-found document. Content pages are
# already index,follow; drop that tag so the Bluehost export does not ship it.
python3 - << 'PY'
from pathlib import Path
import re
meta = re.compile(r'\s*<meta name="robots" content="noindex"\s*/?>', re.I)
for path in Path("out").rglob("*"):
    if not path.is_file() or path.suffix not in {".html", ".txt", ".js"}:
        continue
    text = path.read_text(errors="ignore")
    updated = meta.sub("", text)
    updated = updated.replace('"content":"noindex"', '"content":"index, follow"')
    updated = updated.replace('\\"content\\":\\"noindex\\"', '\\"content\\":\\"index, follow\\"')
    updated = updated.replace('content:"noindex"', 'content:"index, follow"')
    if updated != text:
        path.write_text(updated)
        print(f"removed not-found noindex from {path}")
PY

echo "Bluehost export is in out/ (index.html and .htaccess at the top level)."
