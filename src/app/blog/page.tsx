import type { Metadata } from "next";
import { BlogPostList, CategoryChips } from "@/components/blog-index";
import { SectionHeading } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";

const journalTitle = "The ThriveWell Journal";
const journalDescription =
  "Insights from ThriveWell Care Collective on leadership, caregiving, and restorative wellness for women who care for others.";

export const metadata: Metadata = {
  title: journalTitle,
  description: journalDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: journalTitle,
    description: journalDescription,
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={journalTitle}
          title="Insights for women who care for others."
          intro="Reflections from ThriveWell on leadership, caregiving, and restorative wellness."
          as="h1"
        />
        <CategoryChips />
        <BlogPostList posts={posts} />
      </div>
    </section>
  );
}
