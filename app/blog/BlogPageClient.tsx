"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Search, X, Grid, List } from "lucide-react"
import { BlogCard } from "@/components/blog/BlogCard"
import { Pagination } from "@/components/blog/Pagination"
import type { Post } from "@/lib/posts"

interface BlogPageClientProps {
  posts: Post[]
  currentPage?: number
}

const categories = ["All", "Fraud Intel", "Case Study", "How-To", "News"]
const POSTS_PER_PAGE = 9

export function BlogPageClient({ posts, currentPage = 1 }: BlogPageClientProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("cat") || "All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (selectedCategory !== "All") params.set("cat", selectedCategory)

    const basePath = pathname.includes("/page/") ? "/blog" : pathname
    const newUrl = params.toString() ? `${basePath}?${params.toString()}` : basePath

    if (currentPage > 1 && (searchQuery || selectedCategory !== "All")) {
      // If we're on a paginated page and filters are applied, redirect to page 1
      router.replace(newUrl)
    } else if (currentPage === 1) {
      router.replace(newUrl)
    }
  }, [searchQuery, selectedCategory, pathname, router, currentPage])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
  }

  const getCategory = (slug: string) => {
    if (slug.includes("fraud") || slug.includes("aff")) return "Fraud Intel"
    if (slug.includes("verify") || slug.includes("swift") || slug.includes("dnslytics")) return "How-To"
    if (slug.includes("foreign-police")) return "Case Study"
    return "News"
  }

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => getCategory(post.slug) === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) => post.title.toLowerCase().includes(query) || post.meta.toLowerCase().includes(query),
      )
    }

    return filtered.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
  }, [posts, selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "All"

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section - replaced oversized hero with compact version */}
      <section className="relative border-border/40 bg-secondary/20 py-12 sm:py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl py-[23px]">
            RedCell Intelligence Briefing
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground/90 sm:text-base">
            Real-world fraud intelligence from our global investigations team
          </p>
        </div>
      </section>

      <section className="border-b border-border/20 bg-background/50 py-6">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border/40 bg-background/80 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Search articles by title or content"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile View Toggle */}
              <div className="flex items-center gap-1 lg:hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Grid view"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/80 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Clear all filters"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {filteredPosts.length === 0 ? (
              "No articles found"
            ) : (
              <>
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                {hasActiveFilters && ` matching your criteria`}
              </>
            )}
          </div>
        </div>
      </section>

      {filteredPosts.length === 0 ? (
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <div className="mx-auto max-w-md">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No articles found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search terms or clearing the filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Hero Layout: Replaced featured/secondary layout with uniform grid */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4">
              {/* Desktop: Always grid view */}
              <div className={`hidden lg:grid gap-6 ${"grid-cols-1 xl:grid-cols-3 lg:grid-cols-2"}`}>
                {paginatedPosts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    title={post.title}
                    excerpt={post.meta}
                    imageUrl={post.image}
                    date={formatDate(post.datePublished)}
                    readingTime={calculateReadingTime(post.content)}
                    category={getCategory(post.slug)}
                    isFeatured={index === 0} // First post gets featured badge
                    viewMode="grid"
                  />
                ))}
              </div>

              {/* Mobile: Grid or List view */}
              <div className={`lg:hidden ${viewMode === "grid" ? "grid grid-cols-1 gap-4" : "space-y-4"}`}>
                {paginatedPosts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    title={post.title}
                    excerpt={post.meta}
                    imageUrl={post.image}
                    date={formatDate(post.datePublished)}
                    readingTime={calculateReadingTime(post.content)}
                    category={getCategory(post.slug)}
                    isFeatured={index === 0}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            </div>
          </section>

          {totalPages > 1 && !hasActiveFilters && (
            <section className="pb-24">
              <div className="container mx-auto max-w-7xl px-4">
                <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
