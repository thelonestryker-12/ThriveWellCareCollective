import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from ThriveWell Care Collective™ on change, caregiving, and restorative wellness.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Journal"
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
                <article className="rounded-3xl border border-sage/30 bg-white p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl leading-tight text-teal">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm font-medium text-charcoal/80">
                    By {post.author}
                  </p>
                  <p className="mt-3 text-base leading-8">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-coral"
                  >
                    Read
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
