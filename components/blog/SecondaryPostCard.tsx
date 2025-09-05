import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"

interface SecondaryPostCardProps {
  href: string
  title: string
  excerpt: string
  imageUrl?: string
  date: string
  readingTime: string
  category: string
}

export function SecondaryPostCard({
  href,
  title,
  excerpt,
  imageUrl,
  date,
  readingTime,
  category,
}: SecondaryPostCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-800 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Read article: ${title}`}
    >
      {/* Compact 16:9 Media Area */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-muted/20">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-muted/10"
            aria-label="Article thumbnail placeholder"
          >
            <Tag className="h-8 w-8 text-muted-foreground/50" aria-hidden="true" />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground border border-primary/20">
          {category}
        </div>
      </div>

      {/* Compact Content with p-4 padding */}
      <div className="p-4 space-y-3">
        {/* Title clamped to 2 lines */}
        <h3 className="text-lg font-semibold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt clamped to 2 lines with smaller font */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{excerpt}</p>

        {/* Aligned metadata row */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
          Read Article →
        </div>
      </div>
    </Link>
  )
}
