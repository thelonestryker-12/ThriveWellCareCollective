# ThriveWell Care Collective™

Public website for [thrivewellcarecollective.com](https://thrivewellcarecollective.com).

The site is built in Next.js with the brand fonts, colors, and copy from the ThriveWell webpage design guide: **Cormorant Garamond** for headings, **Montserrat** for body text, and the Deep Teal / Sage / Coral / Warm Ivory palette.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
5. Set `draft: false` when it should appear on `/blog`, in the sitemap, and in `/rss.xml`.

## Scheduling inquiries

The schedule form saves requests on the server log by default. To email them, set:

```bash
CONTACT_EMAIL=hello@thrivewellcarecollective.com
RESEND_API_KEY=...
RESEND_FROM_EMAIL=ThriveWell Website <noreply@thrivewellcarecollective.com>
```

Update the public email in `src/lib/site.ts` if it should be different.
