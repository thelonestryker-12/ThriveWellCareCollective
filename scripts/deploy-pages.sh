#!/usr/bin/env bash
# GitHub Pages preview. Always noindex. Never produces the Bluehost zip.
set -euo pipefail
cd "$(dirname "$0")/.."

export SITE_TARGET=ghpages
if [ "${SITE_TARGET}" != "ghpages" ]; then
  echo "Refusing a GitHub Pages deploy that is not forced to SITE_TARGET=ghpages." >&2
  exit 1
fi

bash scripts/build-bluehost.sh

remote=$(git remote get-url origin)
work=$(mktemp -d)
cp -a out/. "$work/"
git -C "$work" init -b gh-pages
git -C "$work" add -A
git -C "$work" -c user.email="cursoragent@cursor.com" -c user.name="Cursor Agent" commit -m "Publish the noindex GitHub Pages preview."
git -C "$work" push --force "$remote" HEAD:gh-pages
echo "Pushed the noindex preview to gh-pages."
