import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import { MarkdownProse } from "@/components/ui/markdown-prose"
import type { Metadata } from "next"
import { Suspense } from "react"
import OptimizedImage from "@/components/ui/optimized-image"

type Props = {
  params: { slug: string }
}

// Revalidate the page at most once per hour
export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  // The root layout's metadataBase will handle making these URLs absolute.
  const imageUrl = post.image

  return {
    title: post.title,
    description: post.meta,
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const siteUrl = "https://redcell-advisory.com"
  const imageUrl = `${siteUrl}${post.image}`

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.meta,
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "RedCellAdvisory",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.png`,
      },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article className="bg-background py-24 text-foreground">
        <div className="container mx-auto max-w-4xl px-4">
          <header className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{post.meta}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              <span>Published on {new Date(post.datePublished).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>Last updated on {new Date(post.dateModified).toLocaleDateString()}</span>
            </div>
          </header>

          <div className="relative my-12 h-[320px] w-full md:h-[480px]">
            <Suspense fallback={<div className="h-full w-full animate-pulse rounded-lg bg-zinc-800/60" />}>
              <OptimizedImage src={post.image || "/placeholder.svg"} alt={post.title} priority />
            </Suspense>
          </div>

          <MarkdownProse content={post.content} />
        </div>
      </article>
    </>
  )
}
