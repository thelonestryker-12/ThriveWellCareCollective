# ThriveWell Care Collective™

Website for [thrivewellcarecollective.com](https://thrivewellcarecollective.com).

Built with Next.js using the brand fonts, colors, and copy from the ThriveWell webpage design guide: **Cormorant Garamond** for headings, **Montserrat** for body text, and the Deep Teal / Sage / Coral / Warm Ivory palette.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

GitHub Free requires a **public** repository for Pages. The site remains `noindex` so search engines should not list it.

Redeploy after changes with:

```bash
npm run deploy:pages
```


GitHub Free requires a **public** repository for Pages. The site remains `noindex` so search engines should not list it.


The site is deployed as a static export to GitHub Pages from the `main` branch.

- Live URL: https://thelonestryker-12.github.io/ThriveWellCareCollective/
- Workflow: `.github/workflows/deploy-pages.yml`
- All pages are set to `noindex` / `nofollow`, and `robots.txt` disallows crawling

Build the Pages export locally:

```bash
GITHUB_PAGES=true npm run build
```

## Add a blog post

1. Create a Markdown file in `content/blog/`.
2. Use a URL-friendly filename, such as `making-room-for-rest.md`.
3. Add front matter:

```md
---
title: "Making room for rest"
description: "A short note on pausing when you spend your days caring for others."
date: "2026-09-15"
author: "ThriveWell Care Collective"
tags:
  - rest
draft: false
---
```

4. Write the article in Markdown below the front matter.
5. Set `draft: false` when it should appear on `/blog` and in `/rss.xml`.

## Scheduling inquiries

On the static GitHub Pages site, the schedule form opens a prefilled email to `hello@thrivewellcarecollective.com`. Update that address in `src/lib/site.ts` if needed.
