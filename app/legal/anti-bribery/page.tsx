import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Anti-Bribery Policy | Red Cell Advisory",
  description:
    "Red Cell Advisory's Anti-Bribery Policy outlining our commitment to ethical business practices and compliance with anti-corruption laws.",
  canonical: "/legal/anti-bribery",
  openGraph: {
    title: "Anti-Bribery Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Anti-Bribery Policy outlining our commitment to ethical business practices and compliance with anti-corruption laws.",
    url: "/legal/anti-bribery",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Anti-Bribery Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Anti-Bribery Policy outlining our commitment to ethical business practices and compliance with anti-corruption laws.",
  },
}

const sections = [
  { id: "policy-statement", title: "1. Policy statement", level: 1 },
  { id: "scope", title: "2. Scope", level: 1 },
  { id: "definitions", title: "3. Definitions", level: 1 },
  { id: "prohibited-conduct", title: "4. Prohibited conduct", level: 1 },
  { id: "gifts-hospitality", title: "5. Gifts and hospitality", level: 1 },
  { id: "third-parties", title: "6. Third-party relationships", level: 1 },
  { id: "reporting", title: "7. Reporting concerns", level: 1 },
  { id: "training", title: "8. Training and awareness", level: 1 },
  { id: "enforcement", title: "9. Enforcement", level: 1 },
  { id: "contact", title: "10. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Anti-Bribery Policy",
  description:
    "Red Cell Advisory's Anti-Bribery Policy outlining our commitment to ethical business practices and compliance with anti-corruption laws.",
  url: "https://redcells.vercel.app/legal/anti-bribery",
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

export default function AntiBriberyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Anti-Bribery Policy" lastUpdated="January 9, 2025" sections={sections}>
        <section id="policy-statement">
          <h2>1. Policy statement</h2>
          <p>
            Red Cell Advisory is committed to conducting business with integrity and in compliance with all applicable
            anti-bribery and anti-corruption laws. We have zero tolerance for bribery and corruption in any form,
            whether direct or indirect.
          </p>
        </section>

        <section id="scope">
          <h2>2. Scope</h2>
          <p>
            This policy applies to all employees, contractors, consultants, agents, and business partners acting on
            behalf of Red Cell Advisory. It covers all business activities and relationships worldwide.
          </p>
        </section>

        <section id="definitions">
          <h2>3. Definitions</h2>
          <p>
            <strong>Bribery:</strong> Offering, promising, giving, or accepting any financial or other advantage to
            induce or reward improper performance of a function or activity.
          </p>
          <p>
            <strong>Corruption:</strong> The abuse of entrusted power for private gain.
          </p>
          <p>
            <strong>Facilitation payments:</strong> Small payments made to secure or expedite routine government
            actions.
          </p>
        </section>

        <section id="prohibited-conduct">
          <h2>4. Prohibited conduct</h2>
          <p>The following activities are strictly prohibited:</p>
          <ul>
            <li>Offering, promising, or giving bribes to any person or organization</li>
            <li>Accepting or soliciting bribes from any person or organization</li>
            <li>Making facilitation payments to government officials</li>
            <li>Engaging in any form of corruption or fraudulent activity</li>
            <li>Failing to report known or suspected bribery or corruption</li>
          </ul>
        </section>

        <section id="gifts-hospitality">
          <h2>5. Gifts and hospitality</h2>
          <p>
            Modest gifts and reasonable hospitality may be acceptable if they are transparent, proportionate, and do not
            create an obligation or expectation of preferential treatment. All gifts and hospitality must be properly
            recorded and approved in accordance with our internal procedures.
          </p>
        </section>

        <section id="third-parties">
          <h2>6. Third-party relationships</h2>
          <p>
            We conduct appropriate due diligence on all business partners, agents, and intermediaries. Third parties
            acting on our behalf must comply with this policy and applicable anti-bribery laws. We do not tolerate
            bribery by third parties.
          </p>
        </section>

        <section id="reporting">
          <h2>7. Reporting concerns</h2>
          <p>
            All employees and business partners must report suspected bribery or corruption immediately. Reports can be
            made to:
          </p>
          <ul>
            <li>Direct supervisor or management</li>
            <li>Legal department: legal@redcelladvisory.com</li>
            <li>Confidential ethics hotline (where available)</li>
          </ul>
          <p>We prohibit retaliation against individuals who report concerns in good faith.</p>
        </section>

        <section id="training">
          <h2>8. Training and awareness</h2>
          <p>
            All personnel receive regular training on anti-bribery policies and procedures. Training is tailored to
            roles and risk exposure, with enhanced training for high-risk positions.
          </p>
        </section>

        <section id="enforcement">
          <h2>9. Enforcement</h2>
          <p>
            Violations of this policy may result in disciplinary action up to and including termination of employment or
            business relationships. Violations may also result in criminal prosecution and civil liability.
          </p>
        </section>

        <section id="contact">
          <h2>10. Contact</h2>
          <p>
            For questions about this Anti-Bribery Policy, contact us at legal@redcelladvisory.com or:
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
