import type { Metadata } from "next"

export const metadata: Metadata = { title: "Terms of Service | RedCellAdvisory" }

export default function Terms() {
  return (
    <article className="prose prose-invert mx-auto">
      <h1>Terms of Service</h1>
      <p>Last updated: 21 July 2025</p>
      <h2>1. Agreement</h2>
      <p>
        By accessing RedCellAdvisory (“RCA”, “we”, “us”) you agree to be bound by these Terms of Service (“Terms”). If
        you do not accept any part of the Terms, do not use our website or services.
      </p>
      <h2>2. Services</h2>
      <p>
        RCA provides fraud-intelligence reports, technical analyses and related advisory. All information is supplied
        “as is”, without warranty of completeness or accuracy, and must not be considered legal, financial or investment
        advice.
      </p>
      <h2>3. Client Obligations</h2>
      <ul>
        <li>Provide accurate case data and supporting documents.</li>
        <li>Use reports solely for lawful purposes.</li>
        <li>Comply with export-control and sanctions regulations.</li>
      </ul>
      <h2>4. Fees & Payment</h2>
      <p>
        Fees are due in advance according to the selected plan. Work commences only after confirmed receipt of full
        payment.
      </p>
      <h2>5. Confidentiality</h2>
      <p>
        Both parties shall keep all non-public information strictly confidential for 5 years, unless disclosure is
        required by law.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, RCA’s total liability shall not exceed the fees paid for the specific
        report giving rise to the claim.
      </p>
      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Kingdom of Thailand. Any dispute shall be submitted to the exclusive
        jurisdiction of the courts of Bangkok.
      </p>
      <h2>8. Contact</h2>
      <p>
        Questions? Email <a href="mailto:info@redcelladvisory.com">info@redcelladvisory.com</a>.
      </p>
      <p className="mt-12 text-xs text-gray-500">
        This document is provided for informational purposes and does not constitute legal advice. Consult qualified
        counsel for your specific situation.
      </p>
    </article>
  )
}
