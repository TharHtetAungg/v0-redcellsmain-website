import { getAllPosts } from "@/lib/posts"
import type { Metadata } from "next"
import { BlogPageClient } from "../../BlogPageClient"
import { notFound } from "next/navigation"

type Props = {
  params: { page: string }
}

const POSTS_PER_PAGE = 9

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageNumber = Number.parseInt(params.page)

  if (isNaN(pageNumber) || pageNumber < 1) {
    return {}
  }

  return {
    title: `Blog - Page ${pageNumber}`,
    description: "Actionable intelligence and insights from the front lines of cross-border fraud investigation.",
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export default function BlogPaginatedPage({ params }: Props) {
  const pageNumber = Number.parseInt(params.page)

  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound()
  }

  const posts = getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber > totalPages) {
    notFound()
  }

  return <BlogPageClient posts={posts} currentPage={pageNumber} />
}
