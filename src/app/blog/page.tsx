import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from ThriveWell Care Collective™ on change, caregiving, and restorative wellness.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    description:
      "Notes from ThriveWell Care Collective™ on change, caregiving, and restorative wellness.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Blog"
          title="Space to return to, whenever you need it."
          intro="Notes on change, caregiving, and restorative wellness."
          as="h1"
        />

        {posts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-sage/30 bg-eucalyptus/40 p-8">
            <h2 className="font-serif text-3xl text-teal">Writing is on the way.</h2>
            <p className="mt-4 text-base leading-8">
              New articles will appear on this page. When they do, they will be
              available to search engines, included in the sitemap, and offered as
              an RSS feed at /rss.xml.
            </p>
          </div>
        ) : (
          <ul className="mt-12 space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-sage/30 bg-white transition-shadow hover:border-teal/40 hover:shadow-[0_12px_32px_rgba(21,92,85,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                >
                  <article>
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        width={1536}
                        height={1024}
                        className="aspect-[16/9] w-full object-cover object-center"
                      />
                    ) : null}
                    <div className="p-6 sm:p-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-sage">
                        {formatPostDate(post.date)}
                      </p>
                      <h2 className="mt-2 font-serif text-3xl leading-tight text-teal group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm font-medium text-charcoal/80">
                        By {post.author}
                      </p>
                      <p className="mt-3 text-base leading-8">{post.description}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-coral">
                        Read
                      </span>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
