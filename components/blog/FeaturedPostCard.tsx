import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"

interface FeaturedPostCardProps {
  href: string
  title: string
  excerpt: string
  imageUrl?: string
  date: string
  readingTime: string
  category: string
}

export function FeaturedPostCard({
  href,
  title,
  excerpt,
  imageUrl,
  date,
  readingTime,
  category,
}: FeaturedPostCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-800 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Read featured article: ${title}`}
    >
      {/* Large 16:9 Media Area */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-muted/20">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 70vw"
            priority
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-muted/10"
            aria-label="Featured article thumbnail placeholder"
          >
            <Tag className="h-16 w-16 text-muted-foreground/50" aria-hidden="true" />
          </div>
        )}

        {/* Featured Badge */}
        <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground border border-primary/20">
          Featured
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground border border-primary/20">
          {category}
        </div>
      </div>

      {/* Content with consistent spacing */}
      <div className="p-6 space-y-4">
        {/* Large Title clamped to 2 lines */}
        <h2 className="text-2xl font-bold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors lg:text-3xl">
          {title}
        </h2>

        {/* Excerpt clamped to 2 lines */}
        <p className="text-base leading-relaxed text-muted-foreground line-clamp-2">{excerpt}</p>

        {/* Aligned metadata row */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground/80">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-base font-bold text-primary group-hover:text-primary/80 transition-colors">
          Read Featured Article →
        </div>
      </div>
    </Link>
  )
}
