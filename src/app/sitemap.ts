import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/about/",
  "/services/",
  "/membership/",
  "/caregiverwell/",
  "/motherwell/",
  "/schedule/",
  "/blog/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const pages = [
    ...staticPaths.map((path) => ({ path, lastModified: undefined as string | undefined })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}/`,
      lastModified: post.date,
    })),
  ];

  const origin = siteConfig.domain.endsWith("/")
    ? siteConfig.domain
    : `${siteConfig.domain}/`;

  return pages.map((page) => ({
    url: page.path === "/" ? origin : new URL(page.path.replace(/^\//, ""), origin).href,
    ...(page.lastModified ? { lastModified: page.lastModified } : {}),
  }));
}
