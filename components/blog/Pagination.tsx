import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl
    return `${baseUrl}/page/${page}`
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Blog pagination" role="navigation">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Newer
        </Link>
      ) : (
        <span
          className="flex items-center gap-2 rounded-lg border border-border/20 bg-muted/10 px-4 py-2 text-sm font-semibold text-muted-foreground"
          aria-disabled="true"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Newer
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1" role="list">
        {getVisiblePages().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className="px-2 py-2 text-sm text-muted-foreground" aria-hidden="true">
                ...
              </span>
            )
          }

          const pageNumber = page as number
          const isCurrentPage = pageNumber === currentPage

          return (
            <Link
              key={pageNumber}
              href={getPageUrl(pageNumber)}
              className={`min-w-[40px] rounded-lg px-3 py-2 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                isCurrentPage
                  ? "bg-primary text-primary-foreground border border-primary/20"
                  : "text-foreground hover:bg-muted/40 border border-transparent"
              }`}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isCurrentPage ? "page" : undefined}
              role="listitem"
            >
              {pageNumber}
            </Link>
          )
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Go to next page"
        >
          Older
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span
          className="flex items-center gap-2 rounded-lg border border-border/20 bg-muted/10 px-4 py-2 text-sm font-semibold text-muted-foreground"
          aria-disabled="true"
        >
          Older
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </nav>
  )
}
