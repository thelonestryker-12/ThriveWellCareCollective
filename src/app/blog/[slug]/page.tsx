import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) {
    return { title: "Article" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
  };

  return (
    <article className="bg-ivory py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sage">
          {formatPostDate(post.date)}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-teal sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-8">{post.description}</p>
        <div className="prose-thrive mt-10 space-y-5 text-base leading-8">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-serif text-3xl text-teal">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-serif text-2xl text-teal">{children}</h3>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-teal underline underline-offset-4">
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc space-y-1 pl-5">{children}</ul>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
