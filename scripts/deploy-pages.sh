#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
GITHUB_PAGES=true npm run build
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
cp -R out/. "$TMP/"
cd "$TMP"
git init -q
git checkout -b gh-pages
git add .
git -c user.name="ThriveWell Deploy" -c user.email="hello@thrivewellcarecollective.com" commit -qm "Deploy ThriveWell static site to GitHub Pages"
git remote add origin "https://github.com/thelonestryker-12/ThriveWellCareCollective.git"
git push -f origin gh-pages
echo "Published: https://thelonestryker-12.github.io/ThriveWellCareCollective/"
