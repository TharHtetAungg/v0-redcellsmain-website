import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | Burakorn Partners Co., Ltd.",
  description:
    "Privacy Policy explaining how Burakorn Partners Co., Ltd. collects, uses, and protects your personal data.",
  canonical: "/legal/privacy",
  openGraph: {
    title: "Privacy Policy | Burakorn Partners Co., Ltd.",
    description:
      "Privacy Policy explaining how Burakorn Partners Co., Ltd. collects, uses, and protects your personal data.",
    url: "/legal/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Burakorn Partners Co., Ltd.",
    description:
      "Privacy Policy explaining how Burakorn Partners Co., Ltd. collects, uses, and protects your personal data.",
  },
}

const sections = [
  { id: "controller-scope", title: "1. Controller & scope", level: 1 },
  { id: "data-collection", title: "2. Personal data we collect", level: 1 },
  { id: "purposes-legal-bases", title: "3. Purposes & legal bases (GDPR)", level: 1 },
  { id: "cookies-analytics", title: "4. Cookies & analytics", level: 1 },
  { id: "sharing-data", title: "5. Sharing your data", level: 1 },
  { id: "international-transfers", title: "6. International transfers", level: 1 },
  { id: "retention", title: "7. Retention", level: 1 },
  { id: "your-rights", title: "8. Your rights", level: 1 },
  { id: "security", title: "9. Security", level: 1 },
  { id: "children", title: "10. Children", level: 1 },
  { id: "third-party-links", title: "11. Third-party links", level: 1 },
  { id: "policy-changes", title: "12. Changes", level: 1 },
  { id: "contact-privacy", title: "13. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Privacy Policy explaining how Burakorn Partners Co., Ltd. collects, uses, and protects your personal data.",
  url: "https://redcells.vercel.app/legal/privacy",
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

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Privacy Policy" lastUpdated="December 15, 2024" sections={sections}>
        <section id="controller-scope">
          <h2>1. Controller & scope</h2>
          <p>
            Burakorn Partners Co., Ltd. controls personal data processed via redcells.vercel.app and in connection with
            our Services. This Policy explains what we collect, why, and how we handle it. If you are in the EEA/UK,
            this Policy also provides information required by GDPR.
          </p>
        </section>

        <section id="data-collection">
          <h2>2. Personal data we collect</h2>
          <p>
            <strong>Information you provide:</strong> contact details, company role, case details you choose to submit,
            billing info.
          </p>
          <p>
            <strong>Automatically collected:</strong> device/browser info, IP address, analytics events, pages viewed,
            referrers.
          </p>
          <p>
            <strong>From third parties:</strong> sanctions/PEP lists, corporate registries, public OSINT sources, and
            vendors we use for hosting, analytics, or payments.
          </p>
        </section>

        <section id="purposes-legal-bases">
          <h2>3. Purposes & legal bases (GDPR)</h2>
          <p>We process data to:</p>
          <ul>
            <li>Provide Services & respond to inquiries (Art. 6(1)(b) contract or pre-contract steps).</li>
            <li>Operate and secure our site (Art. 6(1)(f) legitimate interests in security and fraud prevention).</li>
            <li>
              Improve Services and analytics (Art. 6(1)(f) legitimate interests; we use privacy-respecting analytics
              where possible).
            </li>
            <li>Comply with law (Art. 6(1)(c)).</li>
            <li>Marketing with consent where required (Art. 6(1)(a)); you can withdraw any time.</li>
          </ul>
        </section>

        <section id="cookies-analytics">
          <h2>4. Cookies & analytics</h2>
          <p>
            We use essential cookies and privacy-respecting analytics (no cross-site tracking). Where non-essential
            cookies are used, we seek consent and provide controls.
          </p>
        </section>

        <section id="sharing-data">
          <h2>5. Sharing your data</h2>
          <p>
            We share data with service providers (hosting, storage, analytics, payment, communications) under contracts
            requiring confidentiality and security. We may share data to comply with law or protect rights. We do not
            sell personal data.
          </p>
        </section>

        <section id="international-transfers">
          <h2>6. International transfers</h2>
          <p>
            If data is transferred outside your country, we use appropriate safeguards (e.g., EU Standard Contractual
            Clauses) and assess partner protections.
          </p>
        </section>

        <section id="retention">
          <h2>7. Retention</h2>
          <p>
            We keep data only as long as necessary for the purposes described, taking account of legal/contractual
            requirements and dispute-resolution needs.
          </p>
        </section>

        <section id="your-rights">
          <h2>8. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, restrict, or object to
            processing; to data portability; and to withdraw consent. To exercise rights, contact
            info@redcelladvisory.com. You may lodge a complaint with the Personal Data Protection Commission Thailand.
          </p>
        </section>

        <section id="security">
          <h2>9. Security</h2>
          <p>
            We implement technical and organizational measures to protect data against unauthorized access, alteration,
            disclosure, or loss. No method is 100% secure.
          </p>
        </section>

        <section id="children">
          <h2>10. Children</h2>
          <p>Our Services are not directed to children under 16. We do not knowingly collect data from children.</p>
        </section>

        <section id="third-party-links">
          <h2>11. Third-party links</h2>
          <p>Our site may link to other websites; we are not responsible for their privacy practices.</p>
        </section>

        <section id="policy-changes">
          <h2>12. Changes</h2>
          <p>We may update this Policy; we will post the new version with an updated date.</p>
        </section>

        <section id="contact-privacy">
          <h2>13. Contact</h2>
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
