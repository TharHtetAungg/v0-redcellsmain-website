"use client"

import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileQuestion } from "lucide-react"
import Link from "next/link"

const faqData = {
  "Our Services": [
    {
      id: "lite-scout-report",
      question: 'What exactly is a "Lite Scout" report?',
      answer:
        "A rapid fraud and risk check. We review high-signal sources (sanctions/PEP lists, corporate registries, adverse media, basic OSINT) and return a concise brief highlighting red flags or clearance.",
    },
    {
      id: "package-timelines",
      question: "How long do the different packages take?",
      answer:
        "Lite Scout: typically 48 hours<br/>Tactical Probe: 5–7 business days<br/>Strategic Due Diligence: 10–15 business days<br/>Reclamation Ops: timeline depends on case complexity and counterparties",
    },
    {
      id: "jurisdiction-coverage",
      question: "Which jurisdictions do you cover?",
      answer:
        "Global coverage with emphasis on Asia, Europe, Africa, and Latin America. We engage vetted local resources where required and respect local laws and data-access rules.",
    },
    {
      id: "data-sources",
      question: "Where does your data come from?",
      answer:
        "Global corporate registries, sanctions and watchlists, court filings, media archives, open-source intelligence (OSINT), and licensed databases—analyzed by our human investigators.",
    },
    {
      id: "supplier-verification",
      question: "Can you verify international suppliers before I engage them?",
      answer:
        "Yes. We validate corporate identity, beneficial ownership, trading history, litigation/adverse media, and operational footprint—flagging clone sites, shell entities, or trade fraud patterns.",
    },
  ],
  "Engagement & Process": [
    {
      id: "confidentiality",
      question: "Is my information kept confidential?",
      answer:
        "Yes. We operate under strict confidentiality. Case data is handled on a need-to-know basis and protected by technical and organizational controls. We comply with GDPR/Thailand PDPA where applicable.",
    },
    {
      id: "payment-refunds",
      question: "How do I pay and is it refundable?",
      answer:
        "Payments are made securely. Some services require a retainer. Due to the nature of investigative work, fees are generally non-refundable once work begins; any exceptions will be stated in your engagement letter.",
    },
    {
      id: "agents-referrers",
      question: "Do you work with agents or referrers?",
      answer:
        "In certain jurisdictions we coordinate with vetted local partners. All engagements remain under Red Cell Advisory oversight and quality control.",
    },
    {
      id: "case-submission-process",
      question: "What happens after I submit a case?",
      answer:
        "You'll receive a confirmation and a timeline. We may request documents or clarifications. Interim red flags are escalated early; final deliverables are provided in a written brief with recommended actions.",
    },
    {
      id: "legal-team-coordination",
      question: "Can you liaise with my legal team or compliance?",
      answer:
        "Yes. We commonly coordinate with in-house counsel, external law firms, and compliance teams to align findings with legal strategy.",
    },
  ],
  "Outcomes & Support": [
    {
      id: "recovery-guarantee",
      question: "Do you guarantee that my funds will be recovered?",
      answer:
        "No firm can guarantee recovery. We provide intelligence and an action plan to maximize your chances through law-enforcement, banks, and civil remedies.",
    },
    {
      id: "court-testimony",
      question: "Can you testify in court or provide affidavits?",
      answer:
        "Yes—subject to jurisdiction. We can supply sworn statements and, when appropriate, expert testimony based on our work.",
    },
    {
      id: "foreign-authorities",
      question: "Can you contact foreign police or banks on my behalf?",
      answer:
        "We can guide documentation and escalation. In some cases we liaise directly with banks or authorities, depending on local requirements and your authorization.",
    },
    {
      id: "deliverables",
      question: "What deliverables do I receive?",
      answer:
        "A structured PDF/brief (and optional data annex) summarizing findings, risk assessment, and recommended next steps. For Reclamation Ops, you also get a phased recovery plan.",
    },
    {
      id: "multi-country-subjects",
      question: "What if the subject is in multiple countries?",
      answer:
        "Cross-border is our specialization. We map entities/people across jurisdictions and coordinate intelligence to avoid gaps between legal systems.",
    },
  ],
}

export function FaqPageClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const totalFaqs = Object.values(faqData).reduce((sum, category) => sum + category.length, 0)

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return faqData

    const filtered: typeof faqData = {}
    Object.entries(faqData).forEach(([category, faqs]) => {
      const matchingFaqs = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      if (matchingFaqs.length > 0) {
        filtered[category as keyof typeof faqData] = matchingFaqs
      }
    })
    return filtered
  }, [searchQuery])

  const totalFilteredFaqs = Object.values(filteredData).reduce((sum, category) => sum + category.length, 0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const updateUrl = useCallback(
    (query: string) => {
      if (!isClient) return

      const params = new URLSearchParams(searchParams.toString())
      if (query) {
        params.set("q", query)
      } else {
        params.delete("q")
      }

      const newUrl = params.toString() ? `?${params.toString()}` : "/faq"
      router.replace(newUrl)
    },
    [searchParams, router, isClient],
  )

  useEffect(() => {
    if (!isClient) return

    const q = searchParams.get("q")
    if (q) {
      setSearchQuery(q)
    }

    const hash = typeof window !== "undefined" ? window.location.hash : ""
    if (hash.startsWith("#faq-")) {
      const faqId = hash.replace("#faq-", "")
      setOpenItems([faqId])

      setTimeout(() => {
        const element = document.getElementById(faqId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
          const trigger = element.querySelector("[data-state]") as HTMLElement
          trigger?.focus()
        }
      }, 200)
    }
  }, [searchParams, isClient])

  useEffect(() => {
    if (!isClient) return

    const timeoutId = setTimeout(() => {
      updateUrl(searchQuery)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery, updateUrl, isClient])

  if (!isClient) {
    return (
      <div className="relative">
        <section className="relative py-16 sm:py-20 min-h-[200px]">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Clear answers about our process, capabilities, and engagement terms.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Badge variant="secondary" className="text-sm">
                {totalFaqs} Q&As
              </Badge>
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="text" placeholder="Search FAQs..." className="pl-10" disabled />
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className="pb-24 min-h-[400px]">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center text-muted-foreground">Loading...</div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="relative">
      <link rel="preload" as="style" href="/_next/static/css/app/layout.css" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        Skip to main content
      </a>

      <section className="relative py-16 sm:py-20 min-h-[200px]">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Clear answers about our process, capabilities, and engagement terms.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Badge variant="secondary" className="text-sm" aria-label={`${totalFaqs} questions and answers available`}>
              {totalFaqs} Q&As
            </Badge>

            <div className="relative w-full max-w-md">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                aria-label="Search frequently asked questions"
                aria-describedby="search-results-status"
              />
            </div>
          </div>

          <div id="search-results-status" className="sr-only" aria-live="polite" aria-atomic="true">
            {searchQuery && `${totalFilteredFaqs} results found for "${searchQuery}"`}
            {!searchQuery && `Showing all ${totalFaqs} frequently asked questions`}
          </div>
        </div>
      </section>

      <main id="main-content">
        <section className="pb-24 min-h-[400px]">
          <div className="container mx-auto max-w-6xl px-4">
            {Object.keys(filteredData).length > 0 ? (
              <div className="grid gap-8 lg:grid-cols-2">
                {Object.entries(filteredData).map(([category, faqs]) => (
                  <div key={category} className="space-y-4">
                    <h2
                      className="text-2xl font-semibold text-white"
                      id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {category}
                    </h2>

                    <Accordion
                      type="multiple"
                      value={openItems}
                      onValueChange={setOpenItems}
                      className="space-y-3"
                      aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {faqs.map((faq) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                          id={faq.id}
                          className="rounded-lg border border-border/40 bg-card/20 px-4 will-change-auto"
                          style={{ minHeight: "60px" }}
                        >
                          <AccordionTrigger
                            className="text-left text-base font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-state=open]>svg]:rotate-180 transition-colors duration-200"
                            aria-expanded={openItems.includes(faq.id)}
                            aria-controls={`content-${faq.id}`}
                            aria-describedby={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent
                            id={`content-${faq.id}`}
                            className="text-sm text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out"
                            role="region"
                            aria-label={`Answer to: ${faq.question}`}
                          >
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-md text-center" role="status" aria-live="polite">
                <div className="rounded-lg border border-border/40 bg-card/20 p-8">
                  <FileQuestion className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">No results found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Didn't find your answer for "{searchQuery}"? Contact us directly.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild>
                      <Link href="/start-investigation" aria-describedby="start-investigation-desc">
                        Start an Investigation
                        <span id="start-investigation-desc" className="sr-only">
                          Begin a new investigation case with our team
                        </span>
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact" aria-describedby="recovery-call-desc">
                        Book Recovery Call
                        <span id="recovery-call-desc" className="sr-only">
                          Schedule a consultation call for fund recovery
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
