import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogPostList, CategoryChips } from "@/components/blog-index";
import { getCategoryBySlug } from "@/lib/categories";
import { getCategoriesWithPosts, getPostsByCategory } from "@/lib/blog";

export function generateStaticParams() {
  return getCategoriesWithPosts().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category || getPostsByCategory(category.name).length === 0) {
    return { title: "Journal" };
  }

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/blog/category/${category.slug}` },
    openGraph: {
      title: category.name,
      description: category.description,
      url: `/blog/category/${category.slug}`,
      ...(category.image
        ? { images: [{ url: category.image, alt: category.imageAlt ?? category.name }] }
        : {}),
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.name);
  if (posts.length === 0) notFound();

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
          The ThriveWell Journal
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-teal sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/90 sm:text-lg">
          {category.description}
        </p>
        {category.image ? (
          <Image
            src={category.image}
            alt={category.imageAlt ?? category.name}
            width={1200}
            height={1200}
            priority
            className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover object-center"
          />
        ) : null}
        <CategoryChips activeSlug={category.slug} />
        <BlogPostList posts={posts} />
      </div>
    </section>
  );
}
