import Link from "next/link"
import { ShieldCheck, Search, Clock, Mail } from "lucide-react"

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/dpa-gdpr", label: "Data Processing & GDPR" },
  { href: "/legal/aup", label: "Acceptable Use Policy" },
  { href: "/legal/anti-bribery", label: "Anti-Bribery Policy" },
  { href: "/legal/sanctions-aml", label: "Sanctions & AML" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal", label: "Legal" }, // Added Legal hub link at the end of the list
]

const trustBadges = [
  { name: "OSINT Framework", icon: Search },
  { name: "Stripe Partner", icon: ShieldCheck },
  { name: "GDPR Compliant", icon: Clock },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1117]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 leading-none">
              {/* Logo mark — use your static mark (monochrome/flat), not the animated logo */}
              {/* If you have /logo-mark.svg */}
              <img
                src="/logo-animated.svg"
                alt="RedCellAdvisory"
                className="h-[22px] w-[22px] shrink-0 select-none"
                draggable={false}
              />
              {/* Wordmark */}
              <span className="text-[15px] font-semibold tracking-tight text-foreground -translate-y-[1px]">
                RedCellAdvisory
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Cross-border fraud intelligence. <br />
              Red Cell Advisory — a unit of Burakorn Partners Holding
            </p>
            <div className="mt-4 space-y-1 text-xs text-muted-foreground/80">
              <p>Reg. No.: TH-123456789</p>
              <p>VAT: TH-987654321</p>
              <p>EIN: 12-3456789</p>
              <p>DUNS: 123456789</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground transition-colors"
                href="mailto:info@redcelladvisory.com"
              >
                <Mail className="h-4 w-4" /> info@redcelladvisory.com
              </a>
              <div className="text-xs text-muted-foreground/80 leading-relaxed">
                <p className="font-medium text-muted-foreground">Bangkok Office:</p>
                <p>30th Floor, Bhiraj Tower at EmQuartier</p>
                <p>Sukhumvit Road, Khlong Tan Nuea</p>
                <p>Watthana, Bangkok 10110</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border/20 py-6">
          {trustBadges.map((badge) => {
            const IconComponent = badge.icon
            return (
              <span
                key={badge.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground transition"
              >
                <IconComponent className="h-3.5 w-3.5 text-primary" />
                {badge.name}
              </span>
            )
          })}
        </div>

        <div className="border-t border-border/20 py-6">
          <p className="text-center text-xs text-muted-foreground">
            © 2025 Burakorn Partners Co., Ltd. All rights reserved. Operated by Burakorn Consulting Co., Ltd., Bangkok,
            Thailand.
          </p>
        </div>
      </div>
    </footer>
  )
}
