#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -n "${BUILD_DATE:-}" ]; then
  echo "Including blog posts dated on or before ${BUILD_DATE} (BUILD_DATE)."
else
  echo "Including blog posts dated on or before $(TZ=America/New_York date +%F) (America/New_York)."
fi

npx next build
cp deploy/bluehost/.htaccess out/.htaccess

# Drop images that belong only to posts dated after this build. The pages
# themselves are already omitted by src/lib/blog.ts.
python3 - << 'PY'
import os, re, subprocess
from pathlib import Path

override = os.environ.get("BUILD_DATE", "").strip()
if re.fullmatch(r"\d{4}-\d{2}-\d{2}", override):
    cutoff = override
else:
    cutoff = subprocess.check_output(
        ["date", "+%F"],
        env={**os.environ, "TZ": "America/New_York"},
        text=True,
    ).strip()

for md in Path("content/blog").glob("*.md"):
    text = md.read_text()
    date = re.search(r'^date:\s*"(\d{4}-\d{2}-\d{2})"', text, re.M)
    image = re.search(r'^image:\s*"(/blog/[^"]+)"', text, re.M)
    if not date or not image or date.group(1) <= cutoff:
        continue
    target = Path("out") / image.group(1).lstrip("/")
    if target.exists():
        target.unlink()
        print(f"omitted future image {target}")
PY

# Next inserts a noindex meta on the not-found document. Content pages are
# already index,follow; drop that tag so the public export does not ship it.
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

rm -f thrivewell-bluehost.zip
(cd out && zip -qr -X ../thrivewell-bluehost.zip .)
if [ -d /opt/cursor/artifacts ]; then
  cp thrivewell-bluehost.zip /opt/cursor/artifacts/thrivewell-bluehost.zip
fi

echo "Bluehost export is in out/ and thrivewell-bluehost.zip (index.html and .htaccess at the top level)."
