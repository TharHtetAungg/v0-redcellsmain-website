import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trust Center | RedCellAdvisory",
  description:
    "Our Trust Center outlines how we protect client data and operate securely. Certifications are underway; controls are already enforced.",
}

export default function TrustCenter() {
  return (
    <article className="prose prose-invert mx-auto">
      <h1>Trust Center</h1>
      <p className="lead text-lg text-gray-300">
        Our Trust Center outlines how we protect client data and operate securely. Certifications are underway; controls
        are already enforced.
      </p>

      <h2>Certifications</h2>
      <div className="not-prose grid gap-4 my-6">
        <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50">
          <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type I/II</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 text-sm rounded border border-yellow-700">
              In Progress
            </span>
            <span className="text-sm text-gray-400">Audit window: Q4 2025</span>
          </div>
          <p className="text-gray-300 text-sm">Security, availability, and confidentiality controls audit</p>
        </div>

        <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50">
          <h3 className="text-lg font-semibold text-white mb-2">ISO 27001</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-sm rounded border border-blue-700">
              Roadmap
            </span>
          </div>
          <p className="text-gray-300 text-sm">Information security management system certification</p>
        </div>
      </div>

      <h2>Security</h2>
      <ul>
        <li>
          <strong>Encryption in transit:</strong> All data transmission uses TLS 1.3
        </li>
        <li>
          <strong>Encryption at rest:</strong> AES-256 encryption for stored data
        </li>
        <li>
          <strong>Key management:</strong> Hardware security modules (HSMs) and key rotation
        </li>
        <li>
          <strong>Access controls:</strong> Multi-factor authentication, role-based permissions, and principle of least
          privilege
        </li>
      </ul>

      <h2>Privacy & GDPR</h2>
      <ul>
        <li>
          <strong>Data Processing Agreement (DPA):</strong> Available upon request for enterprise clients
        </li>
        <li>
          <strong>Sub-processors:</strong> Vetted third-party vendors with appropriate safeguards
        </li>
      </ul>

      <div className="not-prose my-6">
        <h3 className="text-lg font-semibold text-white mb-3">Sub-processors</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-white">Service Provider</th>
                <th className="px-4 py-2 text-left text-white">Purpose</th>
                <th className="px-4 py-2 text-left text-white">Location</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">AWS</td>
                <td className="px-4 py-2">Cloud infrastructure</td>
                <td className="px-4 py-2">Frankfurt, Germany</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Vercel</td>
                <td className="px-4 py-2">Application hosting</td>
                <td className="px-4 py-2">Global CDN</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">SendGrid</td>
                <td className="px-4 py-2">Email delivery</td>
                <td className="px-4 py-2">United States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Data Retention & Deletion</h2>
      <ul>
        <li>
          <strong>Standard retention windows:</strong> Case data retained for 7 years post-closure for regulatory
          compliance
        </li>
        <li>
          <strong>Client-controlled deletion:</strong> Data deletion available upon request, subject to legal
          obligations
        </li>
        <li>
          <strong>Automated purging:</strong> Non-essential data automatically purged according to retention schedules
        </li>
      </ul>

      <h2>Incident Response & Business Continuity</h2>
      <ul>
        <li>
          <strong>Incident response:</strong> 24/7 monitoring with escalation procedures and client notification within
          72 hours
        </li>
        <li>
          <strong>Uptime target:</strong> 99.9% availability with redundant systems and failover capabilities
        </li>
        <li>
          <strong>Contact for incidents:</strong>{" "}
          <a href="mailto:security@redcelladvisory.com">security@redcelladvisory.com</a>
        </li>
      </ul>

      <h2>Vulnerability Disclosure Program</h2>
      <p>
        We maintain a responsible disclosure program for security researchers. For technical details and reporting
        guidelines, see our{" "}
        <a href="/.well-known/security.txt" className="text-red-400 hover:text-red-300">
          security.txt
        </a>{" "}
        file.
      </p>

      <h2>Compliance Letters</h2>
      <div className="not-prose border border-gray-700 rounded-lg p-4 bg-gray-900/50 my-6">
        <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Auditor Letter</h3>
        <p className="text-gray-300 mb-3">
          Independent auditor attestation letter confirming our SOC 2 Type II compliance status.
        </p>
        <p className="text-sm text-gray-400">
          Available under Non-Disclosure Agreement (NDA) for qualified prospects and clients.
        </p>
        <a
          href="mailto:security@redcelladvisory.com?subject=SOC%202%20Auditor%20Letter%20Request"
          className="inline-block mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
        >
          Request Access
        </a>
      </div>

      <p className="mt-12 text-xs text-gray-500">
        This Trust Center is updated regularly to reflect our current security posture and compliance status. For
        specific questions or additional documentation, contact{" "}
        <a href="mailto:security@redcelladvisory.com">security@redcelladvisory.com</a>.
      </p>
    </article>
  )
}
