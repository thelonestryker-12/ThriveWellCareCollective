#!/usr/bin/env python3
"""Fail the build if the export's indexing settings don't match SITE_TARGET."""

import os
import re
import sys
from pathlib import Path

target = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("SITE_TARGET", "bluehost")
root = Path(sys.argv[2] if len(sys.argv) > 2 else "out")

def is_search_console_file(path: Path) -> bool:
    """Google's verification file is plain text and must not be judged as a page."""
    if path.parent != root or path.suffix != ".html" or not path.name.startswith("google"):
        return False
    text = path.read_text(errors="ignore").strip()
    return text.startswith("google-site-verification:")

html_pages = [
    path for path in root.rglob("*.html") if path.is_file() and not is_search_console_file(path)
]
robots_path = root / "robots.txt"

noindex_tag = re.compile(
    r'<meta[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*nofollow[^"\']*["\']'
    r'|<meta[^>]*content=["\'][^"\']*noindex[^"\']*nofollow[^"\']*["\'][^>]*name=["\']robots["\']',
    re.I,
)

if not html_pages:
    print(f"indexability check failed: no HTML pages in {root}")
    sys.exit(1)
if not robots_path.exists():
    print("indexability check failed: robots.txt is missing")
    sys.exit(1)

robots = robots_path.read_text()
failures: list[str] = []

if target == "bluehost":
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix not in {".html", ".txt", ".js"}:
            continue
        if is_search_console_file(path):
            continue
        if "noindex" in path.read_text(errors="ignore").lower():
            failures.append(f"noindex in {path}")
    if "Allow: /" not in robots:
        failures.append("robots.txt does not allow crawling")
    if "Sitemap:" not in robots:
        failures.append("robots.txt is missing the sitemap link")
elif target == "ghpages":
    for path in html_pages:
        text = path.read_text(errors="ignore")
        if not noindex_tag.search(text):
            failures.append(f"missing noindex, nofollow in {path}")
    if re.search(r"^Sitemap:", robots, re.M):
        failures.append("robots.txt links a sitemap")
    if "Allow: /" not in robots:
        failures.append("robots.txt does not allow crawling")
    if re.search(r"^Disallow:\s*/\s*$", robots, re.M):
        failures.append("robots.txt disallows the whole site")
else:
    print("SITE_TARGET must be bluehost or ghpages")
    sys.exit(1)

if failures:
    print(f"indexability check failed for {target}:")
    print("\n".join(failures[:40]))
    sys.exit(1)

print(f"indexability check passed for {target} ({len(html_pages)} HTML pages)")
