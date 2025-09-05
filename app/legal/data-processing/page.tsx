import type { Metadata } from "next"

export const metadata: Metadata = { title: "Data Processing & GDPR | RedCellAdvisory" }

export default function GDPR() {
  return (
    <article className="prose prose-invert mx-auto">
      <h1>Data Processing & GDPR</h1>
      <p>Last updated: 21 July 2025</p>
      <h2>1. Data Controller</h2>
      <p>Burakorn Consulting Co., Ltd., 388 Sukhumvit Rd, Bangkok 10110, Thailand.</p>
      <h2>2. Legal Basis</h2>
      <p>
        Processing is based on Art. 6 (1) (b) GDPR — contract fulfillment, and Art. 6 (1) (f) — legitimate interest in
        preventing fraud.
      </p>
      <h2>3. Sub-Processors</h2>
      <ul>
        <li>AWS (EU-Central-1) — encrypted file storage.</li>
        <li>Vercel — web hosting & logs.</li>
        <li>Stripe — payment processing.</li>
      </ul>
      <h2>4. Data Retention</h2>
      <p>Case files are retained 5 years, then securely purged.</p>
      <h2>5. International Transfers</h2>
      <p>Transfers outside the EEA use SCC 2021/914 or are covered by UK Addendum.</p>
      <h2>6. Data Subject Requests</h2>
      <p>
        To exercise GDPR rights, email <a href="mailto:dpo@redcell-advisory.com">dpo@redcell-advisory.com</a>. We
        respond within 30 days.
      </p>
      <h2>7. Supervisory Authority</h2>
      <p>You may lodge a complaint with your local DPA or the Thai PDPA office.</p>
      <p className="mt-12 text-xs text-gray-500">
        This document is provided for informational purposes and does not constitute legal advice. Consult qualified
        counsel for your specific situation.
      </p>
    </article>
  )
}
