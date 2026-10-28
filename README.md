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

GitHub Free requires a **public** repository for Pages. This preview build stays `noindex` so search engines should not list the GitHub Pages URL. The Bluehost export is separate and is indexable.

Redeploy the preview after changes with:

```bash
npm run deploy:pages
```


The site is deployed as a static export to GitHub Pages from the `main` branch.

- Live URL: https://thelonestryker-12.github.io/ThriveWellCareCollective/
- Workflow: `.github/workflows/deploy-pages.yml`
- That build only is `noindex` / `nofollow`, and its `robots.txt` disallows crawling. The root-domain build does not inherit those rules.

Build the Pages export locally:

```bash
GITHUB_PAGES=true npm run build
```

## Bluehost

The public site is the apex domain on Apache. This export has no `/ThriveWellCareCollective` prefix, uses `https://thrivewellcarecollective.com` for canonical, Open Graph, JSON-LD, and the sitemap, and is indexable.

```bash
npm run build:bluehost
```

`out/` is ready to extract into `public_html`: `index.html` and `.htaccess` are at the top. The Apache file forces HTTPS, sends `www` to the apex, serves the trailing-slash `index.html` pages, uses `404.html`, caches `/_next/static` and images, and enables gzip/deflate. `robots.txt` allows crawling and points at `sitemap.xml`.

## Add a blog post

The blog hub is `/blog`. It lists every published post as a card, newest first. Each post is one Markdown file in `content/blog/`. The filename is the URL slug (`content/blog/leading-change-caring-for-people.md` is `/blog/leading-change-caring-for-people`). `generateStaticParams` builds the article page from that file, so a new post does not need a new page component. The same posts are included in `/rss.xml`. Links stay compatible with the GitHub Pages base path.

1. Add `content/blog/your-slug.md`.
2. Set `draft: false` when it should appear on the hub.

```md
---
title: "From Leading Change to Caring for the People Who Carry It"
description: "Short excerpt shown on the blog card and in search results."
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
