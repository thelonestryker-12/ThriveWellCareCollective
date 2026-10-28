# ThriveWell Care Collective™

Website for [thrivewellcarecollective.com](https://thrivewellcarecollective.com).

Built with Next.js using the brand fonts, colors, and copy from the ThriveWell webpage design guide: **Cormorant Garamond** for headings, **Montserrat** for body text, and the Deep Teal / Sage / Coral / Warm Ivory palette.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Bluehost

The live site is [thrivewellcarecollective.com](https://thrivewellcarecollective.com), hosted on Bluehost shared hosting. `npm run build` and `npm run build:bluehost` produce the same root-domain export: no path prefix, pages are indexable, and canonical, Open Graph, JSON-LD, and sitemap URLs use `https://thrivewellcarecollective.com`.

```bash
npm run build:bluehost
```

That writes `out/` and `thrivewell-bluehost.zip`. Extract the zip into `public_html` so `index.html` and `.htaccess` land in that folder. The Apache file forces HTTPS, sends `www` to the apex, serves the trailing-slash `index.html` pages, uses `404.html`, caches `/_next/static` and images, and enables gzip/deflate. `robots.txt` allows crawling and points at `sitemap.xml`.

## Add a blog post

The blog hub is `/blog`. It lists every published post as a card, newest first. Each post is one Markdown file in `content/blog/`. The filename is the URL slug (`content/blog/leading-change-caring-for-people.md` is `/blog/leading-change-caring-for-people`). `generateStaticParams` builds the article page from that file, so a new post does not need a new page component. The same posts are included in `/rss.xml`.

1. Add `content/blog/your-slug.md`.
2. Set `draft: false` when it should appear on the hub. `image` and `imageAlt` are optional. A post without them keeps the text-only card and article.

```md
---
title: "From Leading Change to Caring for the People Who Carry It"
description: "Short excerpt shown on the blog card and in search results."
date: "2026-10-28"
author: "Laura Camus, Ed.D., MA, MSW, CCMP"
image: "/blog/your-image.jpg"
imageAlt: "Short description of the image"
tags:
  - change
draft: false
---

The article body in Markdown. Use ## for section headings.
```

## Scheduling inquiries

The schedule form posts to Formspree (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`, default `https://formspree.io/f/xzeegqnd`). If that request fails, the form offers a mailto link to `hello@thrivewellcarecollective.com`.
