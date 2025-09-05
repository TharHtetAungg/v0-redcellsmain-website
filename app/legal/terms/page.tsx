import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service | Burakorn Partners Co., Ltd.",
  description:
    "Terms of Service governing your use of Burakorn Partners Co., Ltd.'s cross-border fraud intelligence services.",
  canonical: "/legal/terms",
  openGraph: {
    title: "Terms of Service | Burakorn Partners Co., Ltd.",
    description:
      "Terms of Service governing your use of Burakorn Partners Co., Ltd.'s cross-border fraud intelligence services.",
    url: "/legal/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Burakorn Partners Co., Ltd.",
    description:
      "Terms of Service governing your use of Burakorn Partners Co., Ltd.'s cross-border fraud intelligence services.",
  },
}

const sections = [
  { id: "who-we-are", title: "1. Who we are", level: 1 },
  { id: "our-services", title: "2. Our services", level: 1 },
  { id: "eligibility-accounts", title: "3. Eligibility & accounts", level: 1 },
  { id: "engagement-deliverables", title: "4. Engagement & deliverables", level: 1 },
  { id: "fees-payment", title: "5. Fees & payment", level: 1 },
  { id: "client-responsibilities", title: "6. Client responsibilities", level: 1 },
  { id: "confidentiality", title: "7. Confidentiality", level: 1 },
  { id: "intellectual-property", title: "8. Intellectual property", level: 1 },
  { id: "acceptable-use", title: "9. Acceptable use & restrictions", level: 1 },
  { id: "third-party-content", title: "10. Third-party content", level: 1 },
  { id: "disclaimers", title: "11. Disclaimers", level: 1 },
  { id: "limitation-liability", title: "12. Limitation of liability", level: 1 },
  { id: "indemnity", title: "13. Indemnity", level: 1 },
  { id: "term-termination", title: "14. Term & termination", level: 1 },
  { id: "compliance", title: "15. Compliance", level: 1 },
  { id: "governing-law", title: "16. Governing law & disputes", level: 1 },
  { id: "changes", title: "17. Changes to these Terms", level: 1 },
  { id: "contact", title: "18. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description:
    "Terms of Service governing your use of Burakorn Partners Co., Ltd.'s cross-border fraud intelligence services.",
  url: "https://redcells.vercel.app/legal/terms",
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

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Terms of Service" lastUpdated="December 15, 2024" sections={sections}>
        <section id="who-we-are">
          <h2>1. Who we are</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website at redcells.vercel.app and the
            services provided by Burakorn Partners Co., Ltd. ("we," "us," or "our"). By using our site or engaging our
            services, you agree to these Terms.
          </p>
        </section>

        <section id="our-services">
          <h2>2. Our services</h2>
          <p>
            We provide cross-border fraud intelligence, verification, and investigative briefings (the "Services"). The
            Services may include reports, memos, data checks, and advisory sessions. We do not provide legal advice,
            financial advice, or law-enforcement services.
          </p>
        </section>

        <section id="eligibility-accounts">
          <h2>3. Eligibility & accounts</h2>
          <p>
            You represent that you are at least 18 and legally capable of entering a contract. If you create an account,
            you must keep your credentials confidential and promptly notify us of any unauthorized use.
          </p>
        </section>

        <section id="engagement-deliverables">
          <h2>4. Engagement & deliverables</h2>
          <p>
            Unless otherwise agreed in writing, Services are delivered on a statement-of-work, tier, or per-brief basis.
            Delivery times are estimates. We may rely on third-party data sources; availability and accuracy can vary.
          </p>
        </section>

        <section id="fees-payment">
          <h2>5. Fees & payment</h2>
          <p>
            Fees are communicated prior to engagement. Retainers and invoices are due as stated. Late payments may incur
            suspension of Services or interest permitted by law. You are responsible for taxes and charges except those
            based on our income.
          </p>
        </section>

        <section id="client-responsibilities">
          <h2>6. Client responsibilities</h2>
          <p>
            You warrant that information you supply is accurate, lawful to share, and that you have authority to engage
            us. You must not use the Services to violate any law, harass individuals, or conduct discriminatory,
            invasive, or unlawful surveillance.
          </p>
        </section>

        <section id="confidentiality">
          <h2>7. Confidentiality</h2>
          <p>
            Each party must keep the other's non-public information confidential and use it only to perform these Terms.
            This does not apply to information that is public, independently developed, or legally compelled to be
            disclosed (with notice where lawful).
          </p>
        </section>

        <section id="intellectual-property">
          <h2>8. Intellectual property</h2>
          <p>
            We retain all IP rights in our methods, templates, data processing, and deliverables. Upon full payment, we
            grant you a non-exclusive, non-transferable license to use deliverables internally for your legitimate
            business or case needs. You may not resell or publish deliverables without our written consent.
          </p>
        </section>

        <section id="acceptable-use">
          <h2>9. Acceptable use & restrictions</h2>
          <p>
            You must not: (a) reverse-engineer our systems; (b) interfere with the site; (c) use the Services for
            automated scraping of personal data without a lawful basis; (d) use the Services to make decisions that
            produce legal or similarly significant effects about individuals without appropriate safeguards.
          </p>
        </section>

        <section id="third-party-content">
          <h2>10. Third-party content</h2>
          <p>
            Reports may reference public or licensed datasets, sanctions lists, corporate registries, or OSINT sources.
            We are not responsible for third-party content or sites.
          </p>
        </section>

        <section id="disclaimers">
          <h2>11. Disclaimers</h2>
          <p>
            The Services are provided "as is". We do not guarantee completeness or absolute accuracy of third-party
            data, nor outcomes of legal, financial, or operational decisions you take based on our work. We disclaim all
            warranties to the fullest extent permitted by law.
          </p>
        </section>

        <section id="limitation-liability">
          <h2>12. Limitation of liability</h2>
          <p>
            To the extent permitted by law, our aggregate liability for claims arising out of or related to the Services
            is capped at the fees you paid for the Service giving rise to the claim in the 12 months preceding the
            event. We are not liable for indirect or consequential losses, loss of profits, or loss of data.
          </p>
        </section>

        <section id="indemnity">
          <h2>13. Indemnity</h2>
          <p>
            You will indemnify and hold us harmless from claims arising from your misuse of the Services or breach of
            these Terms.
          </p>
        </section>

        <section id="term-termination">
          <h2>14. Term & termination</h2>
          <p>
            Either party may terminate for convenience on written notice (fees for work performed remain payable) or for
            material breach if not cured within 14 days. Sections intended to survive (confidentiality, IP, payment,
            liability, governing law) do survive.
          </p>
        </section>

        <section id="compliance">
          <h2>15. Compliance</h2>
          <p>
            You are responsible for ensuring your use complies with applicable laws, including anti-money-laundering
            (AML), sanctions, privacy, and data-protection laws.
          </p>
        </section>

        <section id="governing-law">
          <h2>16. Governing law & disputes</h2>
          <p>
            These Terms are governed by Thailand law. Courts located in Thailand shall have exclusive jurisdiction,
            unless otherwise required by mandatory law.
          </p>
        </section>

        <section id="changes">
          <h2>17. Changes to these Terms</h2>
          <p>
            We may update these Terms by posting a revised version with an updated date. Material changes will be
            reasonably notified.
          </p>
        </section>

        <section id="contact">
          <h2>18. Contact</h2>
          <p>
            Burakorn Partners Co., Ltd. — Suite 3064, 30th Floor, Bhiraj Tower at EmQuartier, 689 Sukhumvit Rd, Khlong
            Tan Nuea, Watthana, Bangkok 10110
            <br />
            Email: info@redcelladvisory.com
          </p>
        </section>
      </LegalLayout>
    </>
  )
}
