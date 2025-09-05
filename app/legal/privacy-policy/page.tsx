import type { Metadata } from "next"

export const metadata: Metadata = { title: "Privacy Policy | RedCellAdvisory" }

export default function Privacy() {
  return (
    <article className="prose prose-invert mx-auto">
      <h1>Privacy Policy</h1>
      <p>Last updated: 21 July 2025</p>
      <h2>1. What We Collect</h2>
      <ul>
        <li>Contact data: name, email, phone.</li>
        <li>Case data: documents, counterparty info, payment evidence.</li>
        <li>Technical data: IP address, browser, cookies.</li>
      </ul>
      <h2>2. Why We Collect It</h2>
      <p>To analyse fraud cases, issue reports, improve our service and comply with KYC / AML rules.</p>
      <h2>3. How We Store It</h2>
      <p>Data is stored on encrypted servers in Frankfurt (AWS). Access is limited to authorised analysts under NDA.</p>
      <h2>4. Third-Party Sharing</h2>
      <p>
        We never sell data. We may share with payment processors, cloud vendors and, where legally required, competent
        authorities.
      </p>
      <h2>5. Your Rights</h2>
      <p>
        You can request access, correction or deletion of your personal data at any time via{" "}
        <a href="mailto:dpo@redcell-advisory.com">dpo@redcell-advisory.com</a>.
      </p>
      <h2>6. Cookies</h2>
      <p>
        We use first-party, cookie-less analytics (Vercel) and a session cookie for form security. No marketing
        trackers.
      </p>
      <p className="mt-12 text-xs text-gray-500">
        This document is provided for informational purposes and does not constitute legal advice. Consult qualified
        counsel for your specific situation.
      </p>
    </article>
  )
}
