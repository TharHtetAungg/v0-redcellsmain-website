import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Accessibility Statement | Red Cell Advisory",
  description:
    "Red Cell Advisory's commitment to digital accessibility and our efforts to ensure our website is accessible to all users.",
  canonical: "/legal/accessibility",
  openGraph: {
    title: "Accessibility Statement | Red Cell Advisory",
    description:
      "Red Cell Advisory's commitment to digital accessibility and our efforts to ensure our website is accessible to all users.",
    url: "/legal/accessibility",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Accessibility Statement | Red Cell Advisory",
    description:
      "Red Cell Advisory's commitment to digital accessibility and our efforts to ensure our website is accessible to all users.",
  },
}

const sections = [
  { id: "commitment", title: "1. Our commitment", level: 1 },
  { id: "standards", title: "2. Accessibility standards", level: 1 },
  { id: "measures", title: "3. Accessibility measures", level: 1 },
  { id: "current-status", title: "4. Current accessibility status", level: 1 },
  { id: "known-issues", title: "5. Known accessibility issues", level: 1 },
  { id: "feedback", title: "6. Feedback and assistance", level: 1 },
  { id: "improvements", title: "7. Ongoing improvements", level: 1 },
  { id: "contact", title: "8. Contact information", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Accessibility Statement",
  description:
    "Red Cell Advisory's commitment to digital accessibility and our efforts to ensure our website is accessible to all users.",
  url: "https://redcells.vercel.app/legal/accessibility",
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

export default function AccessibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Accessibility Statement" lastUpdated="January 9, 2025" sections={sections}>
        <section id="commitment">
          <h2>1. Our commitment</h2>
          <p>
            Red Cell Advisory is committed to ensuring digital accessibility for people with disabilities. We are
            continually improving the user experience for everyone and applying the relevant accessibility standards to
            ensure we provide equal access to information and functionality for all users.
          </p>
        </section>

        <section id="standards">
          <h2>2. Accessibility standards</h2>
          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards published by
            the World Wide Web Consortium (W3C). These guidelines help make web content more accessible to people with
            disabilities and improve usability for all users.
          </p>
        </section>

        <section id="measures">
          <h2>3. Accessibility measures</h2>
          <p>Red Cell Advisory takes the following measures to ensure accessibility:</p>
          <ul>
            <li>Include accessibility as part of our design and development process</li>
            <li>Provide alternative text for images and multimedia content</li>
            <li>Use semantic HTML markup for proper structure</li>
            <li>Ensure sufficient color contrast ratios</li>
            <li>Make all functionality available via keyboard navigation</li>
            <li>Provide clear and consistent navigation</li>
            <li>Use descriptive link text and headings</li>
            <li>Test with assistive technologies</li>
            <li>Conduct regular accessibility audits</li>
          </ul>
        </section>

        <section id="current-status">
          <h2>4. Current accessibility status</h2>
          <p>
            We believe our website substantially conforms to WCAG 2.1 Level AA standards. We continue to monitor and
            improve accessibility across all areas of our digital presence.
          </p>
        </section>

        <section id="known-issues">
          <h2>5. Known accessibility issues</h2>
          <p>We are aware of some accessibility challenges and are actively working to address them:</p>
          <ul>
            <li>Some third-party embedded content may not be fully accessible</li>
            <li>Complex data visualizations may require alternative formats</li>
            <li>Some PDF documents may not be fully accessible (we are working to remediate these)</li>
          </ul>
          <p>
            If you encounter any accessibility barriers, please contact us so we can provide alternative access methods
            or address the issue.
          </p>
        </section>

        <section id="feedback">
          <h2>6. Feedback and assistance</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or
            need assistance accessing any content, please contact us:
          </p>
          <ul>
            <li>Email: accessibility@redcelladvisory.com</li>
            <li>Phone: Available upon request</li>
            <li>Mail: See contact information below</li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within 2 business days and will work with you to provide the
            information or functionality you need through an alternative communication method.
          </p>
        </section>

        <section id="improvements">
          <h2>7. Ongoing improvements</h2>
          <p>We are committed to continuously improving accessibility. Our efforts include:</p>
          <ul>
            <li>Regular accessibility training for our development team</li>
            <li>Ongoing accessibility testing and auditing</li>
            <li>User testing with people with disabilities</li>
            <li>Staying current with accessibility best practices and standards</li>
            <li>Incorporating accessibility feedback into our development process</li>
          </ul>
        </section>

        <section id="contact">
          <h2>8. Contact information</h2>
          <p>
            For accessibility-related questions, feedback, or assistance, please contact us:
            <br />
            Email: accessibility@redcelladvisory.com
            <br />
            <br />
            Red Cell Advisory — a unit of Burakorn Partners Holding
            <br />
            30th Floor, Bhiraj Tower at EmQuartier, Sukhumvit Road, Khlong Tan Nuea, Watthana, Bangkok 10110
          </p>
          <p>This accessibility statement was last updated on January 9, 2025.</p>
        </section>
      </LegalLayout>
    </>
  )
}
