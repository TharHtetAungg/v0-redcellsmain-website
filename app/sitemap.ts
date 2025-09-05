import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://redcells.vercel.app"

  // Get all posts
  const posts = getAllPosts()
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Define static routes
  const staticRoutes = [
    "/",
    "/services",
    "/pricing",
    "/blog",
    "/faq",
    "/contact",
    "/submit",
    "/legal",
    "/legal/terms",
    "/legal/privacy",
    "/legal/dpa-gdpr",
  ]

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.7,
  }))

  return [...staticUrls, ...postUrls]
}
