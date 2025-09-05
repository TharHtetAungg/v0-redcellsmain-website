import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Sanctions & AML Policy | Red Cell Advisory",
  description:
    "Red Cell Advisory's Sanctions and Anti-Money Laundering Policy outlining our compliance with international sanctions and AML regulations.",
  canonical: "/legal/sanctions-aml",
  openGraph: {
    title: "Sanctions & AML Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Sanctions and Anti-Money Laundering Policy outlining our compliance with international sanctions and AML regulations.",
    url: "/legal/sanctions-aml",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sanctions & AML Policy | Red Cell Advisory",
    description:
      "Red Cell Advisory's Sanctions and Anti-Money Laundering Policy outlining our compliance with international sanctions and AML regulations.",
  },
}

const sections = [
  { id: "overview", title: "1. Overview", level: 1 },
  { id: "sanctions-compliance", title: "2. Sanctions compliance", level: 1 },
  { id: "aml-program", title: "3. Anti-Money Laundering program", level: 1 },
  { id: "customer-due-diligence", title: "4. Customer due diligence", level: 1 },
  { id: "screening-monitoring", title: "5. Screening and monitoring", level: 1 },
  { id: "record-keeping", title: "6. Record keeping", level: 1 },
  { id: "reporting", title: "7. Suspicious activity reporting", level: 1 },
  { id: "training", title: "8. Training and awareness", level: 1 },
  { id: "enforcement", title: "9. Enforcement", level: 1 },
  { id: "contact", title: "10. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sanctions & AML Policy",
  description:
    "Red Cell Advisory's Sanctions and Anti-Money Laundering Policy outlining our compliance with international sanctions and AML regulations.",
  url: "https://redcells.vercel.app/legal/sanctions-aml",
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

export default function SanctionsAMLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Sanctions & AML Policy" lastUpdated="January 9, 2025" sections={sections}>
        <section id="overview">
          <h2>1. Overview</h2>
          <p>
            Red Cell Advisory is committed to full compliance with all applicable sanctions and anti-money laundering
            (AML) laws and regulations. This policy outlines our framework for preventing money laundering, terrorist
            financing, and sanctions violations.
          </p>
        </section>

        <section id="sanctions-compliance">
          <h2>2. Sanctions compliance</h2>
          <p>We comply with sanctions programs administered by:</p>
          <ul>
            <li>United Nations Security Council</li>
            <li>United States (OFAC)</li>
            <li>European Union</li>
            <li>United Kingdom (HM Treasury)</li>
            <li>Other relevant jurisdictions</li>
          </ul>
          <p>
            We do not engage in business with sanctioned individuals, entities, or countries, and we screen all clients
            and transactions against applicable sanctions lists.
          </p>
        </section>

        <section id="aml-program">
          <h2>3. Anti-Money Laundering program</h2>
          <p>Our AML program includes:</p>
          <ul>
            <li>Written policies and procedures</li>
            <li>Designated AML compliance officer</li>
            <li>Ongoing employee training</li>
            <li>Independent audit function</li>
            <li>Customer due diligence procedures</li>
            <li>Ongoing monitoring and reporting</li>
          </ul>
        </section>

        <section id="customer-due-diligence">
          <h2>4. Customer due diligence</h2>
          <p>We conduct appropriate due diligence on all clients, including:</p>
          <ul>
            <li>Identity verification</li>
            <li>Beneficial ownership identification</li>
            <li>Risk assessment based on client profile</li>
            <li>Enhanced due diligence for high-risk clients</li>
            <li>Ongoing monitoring of client relationships</li>
          </ul>
        </section>

        <section id="screening-monitoring">
          <h2>5. Screening and monitoring</h2>
          <p>
            We maintain robust screening and monitoring systems to detect suspicious activities and ensure compliance
            with sanctions requirements. This includes real-time screening against sanctions lists and ongoing
            transaction monitoring.
          </p>
        </section>

        <section id="record-keeping">
          <h2>6. Record keeping</h2>
          <p>
            We maintain comprehensive records of all client due diligence, transactions, and compliance activities in
            accordance with applicable legal requirements. Records are retained for the required periods and made
            available to regulators upon request.
          </p>
        </section>

        <section id="reporting">
          <h2>7. Suspicious activity reporting</h2>
          <p>
            We have procedures in place to identify, investigate, and report suspicious activities to relevant
            authorities as required by law. All employees are trained to recognize and report potential money laundering
            or sanctions violations.
          </p>
        </section>

        <section id="training">
          <h2>8. Training and awareness</h2>
          <p>
            All employees receive regular training on AML and sanctions compliance appropriate to their roles. Training
            covers legal requirements, internal procedures, and red flag indicators.
          </p>
        </section>

        <section id="enforcement">
          <h2>9. Enforcement</h2>
          <p>
            Violations of this policy may result in disciplinary action, termination of business relationships, and
            reporting to relevant authorities. We cooperate fully with law enforcement and regulatory investigations.
          </p>
        </section>

        <section id="contact">
          <h2>10. Contact</h2>
          <p>
            For questions about sanctions and AML compliance, contact our compliance team at legal@redcelladvisory.com
            or:
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
