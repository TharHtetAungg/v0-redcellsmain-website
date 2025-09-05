"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTopOnRouteChange() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }, [pathname])

  return null
}
