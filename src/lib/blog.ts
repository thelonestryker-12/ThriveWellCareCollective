import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  draft: boolean;
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content/blog");

function parsePost(filename: string): BlogPost | null {
  if (!filename.endsWith(".md") && !filename.endsWith(".mdx")) {
    return null;
  }

  const slug = filename.replace(/\.mdx?$/, "");
  const filePath = path.join(blogDirectory, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "ThriveWell Care Collective"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    content: content.trim(),
  };
}

export function getAllPosts(includeDrafts = false): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .map(parsePost)
    .filter((post): post is BlogPost => {
      if (!post) return false;
      if (!includeDrafts && post.draft) return false;
      return true;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdPath = path.join(blogDirectory, `${slug}.md`);
  const mdxPath = path.join(blogDirectory, `${slug}.mdx`);
  const filename = fs.existsSync(mdPath)
    ? `${slug}.md`
    : fs.existsSync(mdxPath)
      ? `${slug}.mdx`
      : null;

  if (!filename) return null;
  return parsePost(filename);
}

export function formatPostDate(date: string) {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
