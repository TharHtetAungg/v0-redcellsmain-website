import type { Metadata } from "next"
import { CasesPageClient } from "./CasesPageClient"
import { caseStudies } from "@/lib/cases"

export const metadata: Metadata = {
  title: "Case Studies | Red Cell Advisory",
  description: "Six real fraud-intelligence cases: freezes, verifications, due diligence, and recovery playbooks.",
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: "Case Studies | Red Cell Advisory",
    description: "Six real fraud-intelligence cases: freezes, verifications, due diligence, and recovery playbooks.",
    url: "/cases",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Red Cell Advisory",
    description: "Six real fraud-intelligence cases: freezes, verifications, due diligence, and recovery playbooks.",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies | Red Cell Advisory",
  description: "Six real fraud-intelligence cases: freezes, verifications, due diligence, and recovery playbooks.",
  url: "https://redcells.vercel.app/cases",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((caseStudy, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: caseStudy.title,
      description: caseStudy.impact,
      about: caseStudy.subtitle,
      genre: caseStudy.badge,
      creator: {
        "@type": "Organization",
        name: "Red Cell Advisory",
      },
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://redcells.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://redcells.vercel.app/cases",
      },
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "Red Cell Advisory",
    url: "https://redcells.vercel.app",
  },
}

export default function CasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CasesPageClient />
    </>
  )
}
