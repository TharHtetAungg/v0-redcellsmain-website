"use client"

import { useState } from "react"
import { getPostBySlug } from "@/lib/posts"
import { PreviewModal } from "@/components/ui/preview-modal"
import { ArrowRight } from "lucide-react"

// Correctly mapped topics with actual slugs from lib/posts.ts
const topics = [
  {
    title: "10 Red Flags Your Supplier Is a Clone",
    slug: "clone-supplier-red-flags",
    blurb: "A checklist of domain, document, and behavioral anomalies that signal advance-fee fraud.",
  },
  {
    title: "Step-by-Step: Verifying a BL Number",
    slug: "verify-bl-number-fast",
    blurb: "A hands-on guide to stop fake Bill of Lading documents before they hit your inbox.",
  },
  {
    title: "SWIFT Recall: 5 Things Banks Won’t Tell You",
    slug: "swift-recall-tips",
    blurb: "Practical tips to increase the success rate of MT103 recalls after a fraudulent transfer.",
  },
  {
    title: "Toolbox: Using DNSlytics to Spot a Shell Network",
    slug: "dnslytics-shell-network",
    blurb: "A quick tutorial on pivoting across domains by IP, Google AdSense ID, and SSL serials.",
  },
  {
    title: "Advance-Fee Fraud's New Hotspots",
    slug: "aff-2025-regional-shift",
    blurb: "Why commodity scams are migrating from Asia to Latin America and how to adapt.",
  },
  {
    title: "Making Foreign Police Move: A Field Manual",
    slug: "activate-foreign-law-enforcement",
    blurb: "A practical playbook for pushing overseas authorities to act on your fraud case.",
  },
]

interface ModalData {
  title: string
  excerpt: string
  link: string
}

// A simple function to create an excerpt from content
function createExcerpt(content: string, length = 150) {
  const strippedContent = content.replace(/<[^>]+>/g, "") // Remove HTML tags
  if (strippedContent.length <= length) return strippedContent
  return `${strippedContent.substring(0, length)}...`
}

export function SeoTopicsGrid() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<ModalData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCardClick = async (topic: (typeof topics)[0]) => {
    setIsLoading(true)
    const postLink = `/blog/${topic.slug}`
    setModalData({ title: topic.title, excerpt: "Loading...", link: postLink })
    setModalOpen(true)

    // Fetch the full post to generate an excerpt for the modal
    const post = getPostBySlug(topic.slug)

    let excerpt = topic.blurb
    if (post) {
      // Use the post's meta description or create an excerpt from its content
      excerpt = post.meta || createExcerpt(post.content)
    }

    setModalData({
      title: topic.title,
      excerpt: excerpt,
      link: postLink,
    })
    setIsLoading(false)
  }

  return (
    <>
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Actionable Intelligence</h2>
            <p className="mt-4 text-lg text-muted-foreground">Key insights from our blog to protect your business.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.slug}
                onClick={() => handleCardClick(topic)}
                className="group cursor-pointer rounded-xl border border-zinc-700 p-6 transition-all hover:bg-zinc-800/50"
              >
                <h3 className="text-xl font-semibold text-primary">{topic.title}</h3>
                <p className="mt-2 text-muted-foreground">{topic.blurb}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read preview <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalData && (
        <PreviewModal
          open={modalOpen}
          setOpen={setModalOpen}
          title={modalData.title}
          excerpt={modalData.excerpt}
          link={modalData.link}
        />
      )}
    </>
  )
}
