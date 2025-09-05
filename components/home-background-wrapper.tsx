"use client"

import { usePathname } from "next/navigation"
import { HomeBackground } from "./home-background"

/**
 * HomeBackgroundWrapper
 *
 * Conditionally renders HomeBackground on marketing pages that need the animated network map.
 * Uses a key tied to pathname to guarantee fresh mounts when navigating between pages.
 * This prevents stale canvas state and ensures clean re-initialization.
 */
export function HomeBackgroundWrapper() {
  const pathname = usePathname()

  const shouldShowBackground =
    pathname === "/" ||
    pathname === "/services" ||
    pathname === "/pricing" ||
    pathname === "/faq" ||
    pathname === "/start-investigation" ||
    pathname === "/contact" ||
    pathname === "/cases" || // Added cases page to background system
    pathname.startsWith("/legal") ||
    pathname.startsWith("/blog")

  return (
    <div key={shouldShowBackground ? `bg-${pathname}` : "no-bg"}>
      {shouldShowBackground ? <HomeBackground /> : null}
    </div>
  )
}
