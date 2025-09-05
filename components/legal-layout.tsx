"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  lastUpdated: string
  sections: Array<{
    id: string
    title: string
    level: number
  }>
}

export function LegalLayout({ children, title, lastUpdated, sections }: LegalLayoutProps) {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => document.getElementById(section.id)).filter(Boolean)

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const getBreadcrumbPath = () => {
    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/")
      const label =
        segment === "legal"
          ? "Legal"
          : segment === "terms"
            ? "Terms of Service"
            : segment === "privacy"
              ? "Privacy Policy"
              : segment === "dpa-gdpr"
                ? "Data Processing & GDPR"
                : segment.charAt(0).toUpperCase() + segment.slice(1)
      return { path, label }
    })
  }

  const breadcrumbs = getBreadcrumbPath()

  const handlePrintToPDF = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container mx-auto max-w-7xl px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside
            className="lg:w-80 lg:sticky lg:top-8 lg:self-start no-print"
            role="complementary"
            aria-label="Page navigation"
          >
            <div className="space-y-6">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Link
                  href="/"
                  className="flex items-center hover:text-foreground transition-colors focus-ring rounded-sm p-1"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.path} className="flex items-center space-x-1">
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-foreground font-medium" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.path}
                        className="hover:text-foreground transition-colors focus-ring rounded-sm p-1"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Last Updated */}
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Last updated:</span> <time dateTime={lastUpdated}>{lastUpdated}</time>
              </div>

              {/* Download PDF Button */}
              <Button
                onClick={handlePrintToPDF}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2 border-border hover:bg-secondary/50 bg-transparent focus-ring"
                aria-label="Print or save this page as PDF"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </Button>

              {/* Table of Contents */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Table of Contents</h3>
                <nav className="space-y-1" aria-label="Table of contents">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`
                        block text-sm transition-colors focus-ring rounded px-2 py-1
                        ${section.level === 1 ? "font-medium" : "ml-4 text-muted-foreground"}
                        ${
                          activeSection === section.id
                            ? "text-primary bg-primary/10 border-l-2 border-primary"
                            : "hover:text-foreground hover:bg-secondary/30"
                        }
                      `}
                      aria-current={activeSection === section.id ? "location" : undefined}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          <main className="flex-1 max-w-none" id="main-content" role="main">
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="not-prose mb-8">
                <h1 className="text-h1 text-foreground mb-4">{title}</h1>
                <p className="text-muted-foreground">
                  Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
                </p>
              </header>

              <div className="prose-headings:scroll-mt-20 prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
                {children}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
