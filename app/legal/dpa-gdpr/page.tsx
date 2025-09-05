import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Data Processing Agreement & GDPR Notice | Burakorn Partners Co., Ltd.",
  description:
    "Data Processing Agreement and GDPR compliance information for Burakorn Partners Co., Ltd.'s enterprise customers.",
  canonical: "/legal/dpa-gdpr",
  openGraph: {
    title: "Data Processing Agreement & GDPR Notice | Burakorn Partners Co., Ltd.",
    description:
      "Data Processing Agreement and GDPR compliance information for Burakorn Partners Co., Ltd.'s enterprise customers.",
    url: "/legal/dpa-gdpr",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Data Processing Agreement & GDPR Notice | Burakorn Partners Co., Ltd.",
    description:
      "Data Processing Agreement and GDPR compliance information for Burakorn Partners Co., Ltd.'s enterprise customers.",
  },
}

const sections = [
  { id: "definitions", title: "1. Definitions", level: 1 },
  { id: "roles-processing", title: "2. Roles & processing instructions", level: 1 },
  { id: "nature-purpose", title: "3. Nature & purpose of processing", level: 1 },
  { id: "categories-data", title: "4. Categories of data & subjects", level: 1 },
  { id: "confidentiality-dpa", title: "5. Confidentiality", level: 1 },
  { id: "security-dpa", title: "6. Security", level: 1 },
  { id: "sub-processors", title: "7. Sub-processors", level: 1 },
  { id: "international-transfers-dpa", title: "8. International transfers", level: 1 },
  { id: "assistance-controller", title: "9. Assistance to Controller", level: 1 },
  { id: "audit", title: "10. Audit", level: 1 },
  { id: "deletion-return", title: "11. Deletion or return", level: 1 },
  { id: "liability-dpa", title: "12. Liability", level: 1 },
  { id: "precedence", title: "13. Order of precedence", level: 1 },
  { id: "contact-notices", title: "14. Contact & notices", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Data Processing Agreement & GDPR Notice",
  description:
    "Data Processing Agreement and GDPR compliance information for Burakorn Partners Co., Ltd.'s enterprise customers.",
  url: "https://redcells.vercel.app/legal/dpa-gdpr",
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

export default function DpaGdprPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout
        title="Data Processing Agreement (DPA) & GDPR Notice"
        lastUpdated="December 15, 2024"
        sections={sections}
      >
        <div className="mb-8 p-4 bg-secondary/20 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            This DPA applies when Burakorn Partners Co., Ltd. acts as Processor processing personal data on behalf of a
            Customer that is the Controller (as defined by GDPR/UK GDPR). If you are a regulated customer or require a
            countersigned copy, contact info@redcelladvisory.com.
          </p>
        </div>

        <section id="definitions">
          <h2>1. Definitions</h2>
          <p>
            "Data Protection Laws" means all laws relating to personal data, including GDPR, UK GDPR, and local
            equivalents. "Customer Data" means personal data provided by or collected for the Customer under the
            Agreement.
          </p>
        </section>

        <section id="roles-processing">
          <h2>2. Roles & processing instructions</h2>
          <p>The Controller is the Customer; Burakorn Partners Co., Ltd. is the Processor.</p>
          <p>
            We process Customer Data only on documented instructions from the Customer, including those in this DPA and
            the Agreement, unless required by law.
          </p>
        </section>

        <section id="nature-purpose">
          <h2>3. Nature & purpose of processing</h2>
          <p>
            Processing necessary to provide fraud-intelligence, verification, and investigative deliverables; hosting;
            storage; analysis; communications; and customer support.
          </p>
        </section>

        <section id="categories-data">
          <h2>4. Categories of data & subjects</h2>
          <p>
            Contact data, identifiers, case-related details you lawfully provide; subjects may include your clients,
            counterparties, or related individuals. Special categories are not intended to be processed; if needed,
            Customer must ensure a lawful basis and notify us.
          </p>
        </section>

        <section id="confidentiality-dpa">
          <h2>5. Confidentiality</h2>
          <p>We ensure personnel accessing Customer Data are subject to appropriate confidentiality obligations.</p>
        </section>

        <section id="security-dpa">
          <h2>6. Security</h2>
          <p>
            We implement technical and organizational measures appropriate to the risk (access controls, encryption in
            transit, logical segregation, least privilege, monitoring, backup).
          </p>
        </section>

        <section id="sub-processors">
          <h2>7. Sub-processors</h2>
          <p>
            We may use vetted sub-processors (hosting, analytics, communication, storage). We will maintain an
            up-to-date list and impose written data-protection terms no less protective than this DPA. Customer
            authorizes the current list and will be notified of changes with an opportunity to object on reasonable
            grounds.
          </p>
        </section>

        <section id="international-transfers-dpa">
          <h2>8. International transfers</h2>
          <p>
            Where Customer Data is transferred internationally, we implement appropriate safeguards (e.g., SCCs/IDTA)
            and conduct transfer assessments as required.
          </p>
        </section>

        <section id="assistance-controller">
          <h2>9. Assistance to Controller</h2>
          <p>We will assist the Customer, taking into account the nature of processing, by:</p>
          <ul>
            <li>responding to data-subject requests (when directed by Customer),</li>
            <li>notifying Customer of personal-data breaches without undue delay and providing incident details,</li>
            <li>assisting with DPIAs and consultations with authorities where reasonably required.</li>
          </ul>
        </section>

        <section id="audit">
          <h2>10. Audit</h2>
          <p>
            Upon reasonable prior notice, we will make available information necessary to demonstrate compliance and
            allow audits by Customer or a mandated auditor, subject to confidentiality, security, and frequency limits.
          </p>
        </section>

        <section id="deletion-return">
          <h2>11. Deletion or return</h2>
          <p>
            At termination of Services, at Customer's choice, we will delete or return Customer Data, unless retention
            is required by law.
          </p>
        </section>

        <section id="liability-dpa">
          <h2>12. Liability</h2>
          <p>
            Liability is governed by the Agreement. Nothing in this DPA limits a data subject's rights under applicable
            law.
          </p>
        </section>

        <section id="precedence">
          <h2>13. Order of precedence</h2>
          <p>
            If this DPA conflicts with the Agreement, this DPA controls to the extent of the conflict regarding
            processing of personal data.
          </p>
        </section>

        <section id="contact-notices">
          <h2>14. Contact & notices</h2>
          <p>Notices regarding data protection should be sent to info@redcelladvisory.com </p>
        </section>
      </LegalLayout>
    </>
  )
}
