import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"

interface BlogCardProps {
  href: string
  title: string
  excerpt: string
  imageUrl?: string
  date: string
  readingTime: string
  category: string
  isFeatured?: boolean
  viewMode?: "grid" | "list"
}

export function BlogCard({
  href,
  title,
  excerpt,
  imageUrl,
  date,
  readingTime,
  category,
  isFeatured = false,
  viewMode = "grid",
}: BlogCardProps) {
  if (viewMode === "list") {
    return (
      <Link
        href={href}
        className="group flex gap-3 rounded-2xl border border-gray-800/60 bg-card/50 backdrop-blur-sm p-3 transition-all duration-300 hover:shadow-md hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label={`Read article: ${title}`}
      >
        {/* 4:3 Thumbnail on left */}
        <div className="relative w-24 h-18 flex-shrink-0 overflow-hidden rounded-xl bg-muted/20">
          {imageUrl ? (
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="96px"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted/10">
              <Tag className="h-6 w-6 text-muted-foreground/50" />
            </div>
          )}

          {isFeatured && (
            <div className="absolute top-1 left-1 rounded-full bg-primary/90 px-1.5 py-0.5 text-xs font-medium text-primary-foreground">
              Featured
            </div>
          )}
        </div>

        {/* Content on right */}
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="text-sm font-semibold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-1">{excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime}</span>
            <span>•</span>
            <span className="text-primary/80">{category}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-800/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Read article: ${title}`}
    >
      {/* Fixed 16:9 Thumbnail with reserved space */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-muted/20">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={isFeatured}
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-muted/10"
            aria-label="Article thumbnail placeholder"
          >
            <Tag className="h-12 w-12 text-muted-foreground/50" aria-hidden="true" />
          </div>
        )}

        {isFeatured ? (
          <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground border border-primary/20">
            Featured
          </div>
        ) : (
          <div className="absolute top-3 left-3 rounded-full bg-secondary/80 px-2 py-0.5 text-xs font-medium text-secondary-foreground border border-border/20">
            {category}
          </div>
        )}
      </div>

      <div className="p-4 lg:p-4 space-y-2">
        {/* Title clamped to exactly 2 lines */}
        <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
          {title}
        </h3>

        {/* Excerpt clamped to exactly 2 lines with smaller font */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 min-h-[2.5rem]">{excerpt}</p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground/80 pt-1">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            <span>{date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" />
            <span>{readingTime}</span>
          </div>
          {!isFeatured && (
            <>
              <span>•</span>
              <span className="text-primary/80">{category}</span>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors pt-1">
          Read Article →
        </div>
      </div>
    </Link>
  )
}
