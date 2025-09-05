import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Red Cell Advisory",
  description:
    "Acceptable Use Policy governing the proper use of Red Cell Advisory's cross-border fraud intelligence services.",
  canonical: "/legal/aup",
  openGraph: {
    title: "Acceptable Use Policy | Red Cell Advisory",
    description:
      "Acceptable Use Policy governing the proper use of Red Cell Advisory's cross-border fraud intelligence services.",
    url: "/legal/aup",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Acceptable Use Policy | Red Cell Advisory",
    description:
      "Acceptable Use Policy governing the proper use of Red Cell Advisory's cross-border fraud intelligence services.",
  },
}

const sections = [
  { id: "overview", title: "1. Overview", level: 1 },
  { id: "permitted-uses", title: "2. Permitted uses", level: 1 },
  { id: "prohibited-activities", title: "3. Prohibited activities", level: 1 },
  { id: "data-protection", title: "4. Data protection requirements", level: 1 },
  { id: "compliance", title: "5. Legal compliance", level: 1 },
  { id: "reporting", title: "6. Reporting violations", level: 1 },
  { id: "enforcement", title: "7. Enforcement", level: 1 },
  { id: "contact", title: "8. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Acceptable Use Policy",
  description:
    "Acceptable Use Policy governing the proper use of Red Cell Advisory's cross-border fraud intelligence services.",
  url: "https://redcells.vercel.app/legal/aup",
  isPartOf: {
    "@type": "WebSite",
    name: "RedCellAdvisory",
    url: "https://redcells.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Red Cell Advisory",
    legalName: "Burakorn Partners Co., Ltd.",
    url: "https://redcells.vercel.app",
  },
  dateModified: "2025-01-09",
  inLanguage: "en-US",
}

export default function AUPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Acceptable Use Policy" lastUpdated="January 9, 2025" sections={sections}>
        <section id="overview">
          <h2>1. Overview</h2>
          <p>
            This Acceptable Use Policy ("AUP") governs your use of Red Cell Advisory's services, platforms, and systems.
            By accessing our services, you agree to comply with this policy and use our services responsibly and
            lawfully.
          </p>
        </section>

        <section id="permitted-uses">
          <h2>2. Permitted uses</h2>
          <p>You may use our services for:</p>
          <ul>
            <li>Legitimate fraud prevention and investigation</li>
            <li>Due diligence and risk assessment</li>
            <li>Compliance with legal and regulatory requirements</li>
            <li>Protection of business interests and assets</li>
            <li>Academic research with proper authorization</li>
          </ul>
        </section>

        <section id="prohibited-activities">
          <h2>3. Prohibited activities</h2>
          <p>You must not use our services to:</p>
          <ul>
            <li>Engage in illegal activities or facilitate criminal conduct</li>
            <li>Harass, stalk, or threaten individuals</li>
            <li>Conduct unauthorized surveillance or invasion of privacy</li>
            <li>Discriminate based on protected characteristics</li>
            <li>Violate intellectual property rights</li>
            <li>Attempt to reverse-engineer or compromise our systems</li>
            <li>Share access credentials or resell services without authorization</li>
            <li>Use automated tools to scrape or extract data without permission</li>
          </ul>
        </section>

        <section id="data-protection">
          <h2>4. Data protection requirements</h2>
          <p>
            When using our services, you must comply with applicable data protection laws including GDPR, CCPA, and
            local privacy regulations. You are responsible for ensuring you have lawful basis for processing personal
            data and must implement appropriate safeguards.
          </p>
        </section>

        <section id="compliance">
          <h2>5. Legal compliance</h2>
          <p>
            You must ensure your use of our services complies with all applicable laws, regulations, and industry
            standards, including but not limited to anti-money laundering (AML), sanctions, export controls, and data
            protection requirements.
          </p>
        </section>

        <section id="reporting">
          <h2>6. Reporting violations</h2>
          <p>
            If you become aware of any violation of this AUP, please report it immediately to
            security@redcelladvisory.com. We investigate all reports and take appropriate action.
          </p>
        </section>

        <section id="enforcement">
          <h2>7. Enforcement</h2>
          <p>
            Violations of this AUP may result in suspension or termination of services, legal action, and reporting to
            relevant authorities. We reserve the right to investigate suspected violations and cooperate with law
            enforcement.
          </p>
        </section>

        <section id="contact">
          <h2>8. Contact</h2>
          <p>
            For questions about this Acceptable Use Policy, contact us at legal@redcelladvisory.com or:
            <br />
            Red Cell Advisory — a unit of Burakorn Partners Holding
            <br />
            30th Floor, Bhiraj Tower at EmQuartier, Sukhumvit Road, Khlong Tan Nuea, Watthana, Bangkok 10110
          </p>
        </section>
      </LegalLayout>
    </>
  )
}
