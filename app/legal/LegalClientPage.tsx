"use client"

import Link from "next/link"
import { ChevronRight, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Legal Documents",
  description: "Terms, Privacy, and Data Processing & GDPR for redcells.vercel.app.",
  url: "https://redcells.vercel.app/legal",
  isPartOf: {
    "@type": "WebSite",
    name: "RedCellAdvisory",
    url: "https://redcells.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Burakorn Partners Co., Ltd.",
    legalName: "Burakorn Partners Co., Ltd.",
    url: "https://redcells.vercel.app",
    logo: "https://redcells.vercel.app/logo-animated.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@redcelladvisory.com",
    },
  },
  copyrightHolder: {
    "@type": "Organization",
    name: "Burakorn Partners Co., Ltd.",
    legalName: "Burakorn Partners Co., Ltd.",
  },
  copyrightYear: "2025",
  dateModified: "2024-12-15",
  inLanguage: "en-US",
}

const legalDocuments = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
    summary: "Terms governing your use of our cross-border fraud intelligence services.",
    lastUpdated: "December 15, 2024",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    summary: "How we collect, use, and protect your personal information.",
    lastUpdated: "December 15, 2024",
  },
  {
    title: "Data Processing Agreement & GDPR",
    href: "/legal/dpa-gdpr",
    summary: "Data processing terms and GDPR compliance for our services.",
    lastUpdated: "December 15, 2024",
  },
]

export default function LegalClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto max-w-6xl px-4 py-8 lg:py-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground mb-8">
            <Link
              href="/"
              className="flex items-center hover:text-foreground transition-colors focus-ring rounded-sm p-1"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">
              Legal
            </span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Intro */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Legal Documents</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our legal framework ensures transparency and protection for both our clients and our organization.
                  These documents outline the terms of service, privacy practices, and data processing agreements that
                  govern our cross-border fraud intelligence services.
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-2">Last updated summary:</p>
                <ul className="space-y-1">
                  <li>• Terms of Service: December 15, 2024</li>
                  <li>• Privacy Policy: December 15, 2024</li>
                  <li>• Data Processing & GDPR: December 15, 2024</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Document Cards */}
            <div className="space-y-6">
              {legalDocuments.map((doc) => (
                <div
                  key={doc.href}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{doc.summary}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Last updated: {doc.lastUpdated}</div>

                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground"
                          onClick={() => window.open(`${doc.href}?print=true`, "_blank")}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>

                        <Link href={doc.href}>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Read Document
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Invisible overlay for full card click */}
                  <Link href={doc.href} className="absolute inset-0 rounded-2xl" aria-label={`Read ${doc.title}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
