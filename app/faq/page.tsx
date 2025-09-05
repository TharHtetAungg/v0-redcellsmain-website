import type { Metadata } from "next"
import { FaqPageClient } from "./FaqPageClient"

export const metadata: Metadata = {
  title: "FAQ | Red Cell Advisory",
  description:
    "Frequently asked questions about our due diligence, intelligence, and fund recovery services. Get answers about our process, capabilities, and engagement terms.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Red Cell Advisory",
    description:
      "Frequently asked questions about our due diligence, intelligence, and fund recovery services. Get answers about our process, capabilities, and engagement terms.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FAQ | Red Cell Advisory",
    description:
      "Frequently asked questions about our due diligence, intelligence, and fund recovery services. Get answers about our process, capabilities, and engagement terms.",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: 'What exactly is a "Lite Scout" report?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rapid fraud and risk check. We review high-signal sources (sanctions/PEP lists, corporate registries, adverse media, basic OSINT) and return a concise brief highlighting red flags or clearance.",
      },
    },
    {
      "@type": "Question",
      name: "How long do the different packages take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lite Scout: typically 48 hours, Tactical Probe: 5–7 business days, Strategic Due Diligence: 10–15 business days, Reclamation Ops: timeline depends on case complexity and counterparties",
      },
    },
    {
      "@type": "Question",
      name: "Which jurisdictions do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Global coverage with emphasis on Asia, Europe, Africa, and Latin America. We engage vetted local resources where required and respect local laws and data-access rules.",
      },
    },
    {
      "@type": "Question",
      name: "Where does your data come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Global corporate registries, sanctions and watchlists, court filings, media archives, open-source intelligence (OSINT), and licensed databases—analyzed by our human investigators.",
      },
    },
    {
      "@type": "Question",
      name: "Can you verify international suppliers before I engage them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We validate corporate identity, beneficial ownership, trading history, litigation/adverse media, and operational footprint—flagging clone sites, shell entities, or trade fraud patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Is my information kept confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate under strict confidentiality. Case data is handled on a need-to-know basis and protected by technical and organizational controls. We comply with GDPR/Thailand PDPA where applicable.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay and is it refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payments are made securely. Some services require a retainer. Due to the nature of investigative work, fees are generally non-refundable once work begins; any exceptions will be stated in your engagement letter.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with agents or referrers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In certain jurisdictions we coordinate with vetted local partners. All engagements remain under Red Cell Advisory oversight and quality control.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I submit a case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll receive a confirmation and a timeline. We may request documents or clarifications. Interim red flags are escalated early; final deliverables are provided in a written brief with recommended actions.",
      },
    },
    {
      "@type": "Question",
      name: "Can you liaise with my legal team or compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We commonly coordinate with in-house counsel, external law firms, and compliance teams to align findings with legal strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee that my funds will be recovered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No firm can guarantee recovery. We provide intelligence and an action plan to maximize your chances through law-enforcement, banks, and civil remedies.",
      },
    },
    {
      "@type": "Question",
      name: "Can you testify in court or provide affidavits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes—subject to jurisdiction. We can supply sworn statements and, when appropriate, expert testimony based on our work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you contact foreign police or banks on my behalf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can guide documentation and escalation. In some cases we liaise directly with banks or authorities, depending on local requirements and your authorization.",
      },
    },
    {
      "@type": "Question",
      name: "What deliverables do I receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A structured PDF/brief (and optional data annex) summarizing findings, risk assessment, and recommended next steps. For Reclamation Ops, you also get a phased recovery plan.",
      },
    },
    {
      "@type": "Question",
      name: "What if the subject is in multiple countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cross-border is our specialization. We map entities/people across jurisdictions and coordinate intelligence to avoid gaps between legal systems.",
      },
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <FaqPageClient />
    </>
  )
}
