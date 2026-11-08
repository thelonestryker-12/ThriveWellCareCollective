import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { getCategoryByName } from "@/lib/categories";
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
      ...(post.image
        ? { images: [{ url: post.image, alt: post.imageAlt ?? post.title }] }
        : {}),
    },
    ...(post.image
      ? {
          twitter: {
            card: "summary_large_image" as const,
            images: [post.image],
          },
        }
      : {}),
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
  const category = post.category ? getCategoryByName(post.category) : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(category ? { articleSection: category.name } : {}),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      telephone: siteConfig.phoneTel.replace(/^tel:/, ""),
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
    ...(post.image ? { image: `${siteConfig.domain}${post.image}` } : {}),
  };

  return (
    <article className="bg-ivory py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {category ? (
          <p>
            <Link
              href={`/blog/category/${category.slug}`}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-sage underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              {category.name}
            </Link>
          </p>
        ) : null}
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-sage">
          {formatPostDate(post.date)}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-teal sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 font-serif text-xl italic text-teal">
          {post.byline ?? `By ${post.author}`}
        </p>
        {post.image ? (
          <figure className="mt-8">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              width={post.imageWidth ?? 1536}
              height={post.imageHeight ?? 1024}
              priority
              className="h-auto w-full rounded-3xl"
            />
            {post.imageCaption ? (
              <figcaption className="mt-3 text-center font-serif text-lg italic text-teal">
                {post.imageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="mt-10 space-y-5 text-base leading-8">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="pt-4 font-serif text-3xl leading-tight text-teal">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="pt-2 font-serif text-2xl text-teal">{children}</h3>
              ),
              p: ({ children }) => <p className="leading-8">{children}</p>,
              strong: ({ children }) => (
                <strong className="font-semibold text-charcoal">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              a: ({ href, children }) => (
                <a href={href} className="text-teal underline underline-offset-4">
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc space-y-1 pl-5">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-1 pl-5">{children}</ol>
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
