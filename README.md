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

## Add a journal post

The journal hub is `/blog`. It lists every published post as a card, newest first. Each post is one Markdown file in `content/blog/`. The filename is the URL slug (`content/blog/leading-change-caring-for-people.md` is `/blog/leading-change-caring-for-people`). `generateStaticParams` builds the article page from that file, so a new post does not need a new page component. The same posts are included in `/rss.xml`. Links stay compatible with the GitHub Pages base path.

1. Add `content/blog/your-slug.md`.
2. Set `draft: false` when it should appear on the hub.

```md
---
title: "From Leading Change to Caring for the People Who Carry It"
description: "Short excerpt shown on the journal card and in search results."
date: "2026-10-28"
author: "Laura Camus, Ed.D., MA, MSW, CCMP"
tags:
  - change
draft: false
---

The article body in Markdown. Use ## for section headings.
```

## Scheduling inquiries

On the static GitHub Pages site, the schedule form opens a prefilled email to `hello@thrivewellcarecollective.com`. Update that address in `src/lib/site.ts` if needed.
