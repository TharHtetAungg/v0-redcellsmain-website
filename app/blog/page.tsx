import { getAllPosts } from "@/lib/posts"
import type { Metadata } from "next"
import { BlogPageClient } from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog | Red Cell Advisory",
  description:
    "Insights from Red Cell Advisory's investigations into fraud schemes, intelligence techniques, and cross-border risks.",
  openGraph: {
    title: "Blog | Red Cell Advisory",
    description:
      "Insights from Red Cell Advisory's investigations into fraud schemes, intelligence techniques, and cross-border risks.",
    type: "website",
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Red Cell Advisory Blog",
    description:
      "Insights from Red Cell Advisory's investigations into fraud schemes, intelligence techniques, and cross-border risks.",
    url: "https://redcells.vercel.app/blog",
    publisher: {
      "@type": "Organization",
      name: "Red Cell Advisory",
      url: "https://redcells.vercel.app",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.meta,
      url: `https://redcells.vercel.app/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        "@type": "Organization",
        name: post.author.name,
        url: post.author.url,
      },
      publisher: {
        "@type": "Organization",
        name: "Red Cell Advisory",
        url: "https://redcells.vercel.app",
      },
      image: post.image ? `https://redcells.vercel.app${post.image}` : undefined,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }} />
      <BlogPageClient posts={posts} />
    </>
  )
}
