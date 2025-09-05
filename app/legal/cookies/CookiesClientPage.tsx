"use client"

import { LegalLayout } from "@/components/legal-layout"

const sections = [
  { id: "what-are-cookies", title: "1. What are cookies", level: 1 },
  { id: "how-we-use-cookies", title: "2. How we use cookies", level: 1 },
  { id: "types-of-cookies", title: "3. Types of cookies we use", level: 1 },
  { id: "third-party-cookies", title: "4. Third-party cookies", level: 1 },
  { id: "managing-cookies", title: "5. Managing cookies", level: 1 },
  { id: "cookie-consent", title: "6. Cookie consent", level: 1 },
  { id: "updates", title: "7. Updates to this policy", level: 1 },
  { id: "contact", title: "8. Contact", level: 1 },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cookie Policy",
  description:
    "Red Cell Advisory's Cookie Policy explaining how we use cookies and similar technologies on our website.",
  url: "https://redcells.vercel.app/legal/cookies",
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

export default function CookiesClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LegalLayout title="Cookie Policy" lastUpdated="January 9, 2025" sections={sections}>
        <div className="not-prose mb-8 p-4 bg-muted/30 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Manage Your Cookie Preferences</h3>
          <p className="text-muted-foreground mb-4">
            You can update your cookie preferences at any time by clicking the button below.
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.removeItem("redcell-cookie-consent")
                localStorage.removeItem("redcell-cookie-preferences")
                window.location.reload()
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-[#e00c33] hover:bg-[#c00a2b] text-white rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#e00c33] focus:ring-offset-2"
          >
            Update Cookie Preferences
          </button>
        </div>

        <section id="what-are-cookies">
          <h2>1. What are cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. They help us provide
            you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section id="how-we-use-cookies">
          <h2>2. How we use cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Ensure our website functions properly</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Improve our services and user experience</li>
            <li>Provide security features</li>
            <li>Deliver relevant content and advertisements</li>
          </ul>
        </section>

        <section id="types-of-cookies">
          <h2>3. Types of cookies we use</h2>

          <h3>Essential cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off. They are usually set in
            response to actions you take, such as setting privacy preferences or filling in forms.
          </p>

          <h3>Performance cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. This helps us improve our website's performance.
          </p>

          <h3>Functional cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as remembering your preferences and
            providing customized content.
          </p>

          <h3>Marketing cookies</h3>
          <p>
            These cookies track your browsing habits to deliver advertisements that are relevant to you and your
            interests. They also help measure the effectiveness of advertising campaigns.
          </p>
        </section>

        <section id="third-party-cookies">
          <h2>4. Third-party cookies</h2>
          <p>
            We may use third-party services that place cookies on your device. These include analytics providers,
            advertising networks, and social media platforms. Each third party has its own privacy and cookie policies.
          </p>
          <p>Common third-party services we use include:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Social media platforms for content sharing</li>
            <li>Customer support tools</li>
            <li>Security and fraud prevention services</li>
          </ul>
        </section>

        <section id="managing-cookies">
          <h2>5. Managing cookies</h2>
          <p>You can control and manage cookies in several ways:</p>

          <h3>Browser settings</h3>
          <p>
            Most browsers allow you to view, delete, and block cookies. You can usually find these options in your
            browser's privacy or security settings.
          </p>

          <h3>Cookie preferences</h3>
          <p>
            You can manage your cookie preferences through our cookie consent banner when you first visit our site, or
            by accessing our cookie preference center.
          </p>

          <h3>Opt-out tools</h3>
          <p>Some third-party services provide opt-out tools for their cookies and tracking technologies.</p>
        </section>

        <section id="cookie-consent">
          <h2>6. Cookie consent</h2>
          <p>
            When you first visit our website, we will ask for your consent to use non-essential cookies. You can
            withdraw your consent at any time by changing your cookie preferences or contacting us.
          </p>
        </section>

        <section id="updates">
          <h2>7. Updates to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws.
            We will notify you of any material changes by posting the updated policy on our website.
          </p>
        </section>

        <section id="contact">
          <h2>8. Contact</h2>
          <p>
            If you have questions about our use of cookies, please contact us at legal@redcelladvisory.com or:
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
