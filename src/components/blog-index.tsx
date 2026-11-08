import Image from "next/image";
import Link from "next/link";
import { getCategoryByName } from "@/lib/categories";
import { formatPostDate, getCategoriesWithPosts, type BlogPost } from "@/lib/blog";

export function CategoryChips({ activeSlug }: { activeSlug?: string }) {
  const categories = getCategoriesWithPosts();

  return (
    <nav aria-label="Journal categories" className="mt-8 flex flex-wrap gap-2">
      <Link
        href="/blog"
        aria-current={activeSlug ? undefined : "page"}
        className={chipClass(!activeSlug)}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          aria-current={activeSlug === category.slug ? "page" : undefined}
          className={chipClass(activeSlug === category.slug)}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}

function chipClass(active: boolean) {
  return `inline-flex rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
    active
      ? "bg-teal text-white"
      : "border border-sage/50 text-teal hover:bg-eucalyptus/40"
  }`;
}

export function BlogPostList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="mt-12 rounded-3xl border border-sage/30 bg-eucalyptus/40 p-8">
        <h2 className="font-serif text-3xl text-teal">Writing is on the way.</h2>
        <p className="mt-4 text-base leading-8">
          New articles will appear on this page. When they do, they will be
          available to search engines, included in the sitemap, and offered as
          an RSS feed at /rss.xml.
        </p>
      </div>
    );
  }

  return (
    <ul className="mt-12 space-y-6">
      {posts.map((post) => {
        const category = post.category ? getCategoryByName(post.category) : null;
        return (
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
                    width={post.imageWidth ?? 1536}
                    height={post.imageHeight ?? 1024}
                    className="aspect-[16/9] w-full object-cover object-center"
                  />
                ) : null}
                <div className="p-6 sm:p-8">
                  {category ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                      {category.name}
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-sage">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl leading-tight text-teal group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm font-medium text-charcoal/80">
                    {post.byline ?? `By ${post.author}`}
                  </p>
                  <p className="mt-3 text-base leading-8">{post.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-coral">
                    Read
                  </span>
                </div>
              </article>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
