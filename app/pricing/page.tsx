import { NewPricingSection } from "@/components/new-pricing-section"

const tiers = [
  {
    tier: "Rapid Scout",
    price: "USD 5,000",
    description: "A 48-hour red-flag scan for initial vetting.",
    features: [
      "Corporate registry verification",
      "Domain & IP analysis",
      "Sanctions list check",
      "3-page summary PDF",
      "Standard email support",
    ],
  },
  {
    tier: "Deep Scan",
    price: "USD 15,000",
    description: "A full investigation into the counterparty and its network.",
    features: [
      "All Rapid Scout features",
      "Director & shareholder mapping",
      "Connected entities analysis",
      "Adverse media deep-dive",
      "10-page detailed PDF report",
      "1-hour analyst video call",
      "Bank-escalation letter template",
    ],
    isFeatured: true,
  },
  {
    tier: "BlackSite Forensic",
    price: "Custom Quote",
    description: "For complex cases requiring on-the-ground intelligence.",
    features: [
      "All Deep Scan features",
      "On-ground physical address verification",
      "Source inquiries & human intelligence",
      "Multilingual sworn affidavits",
      "Ongoing recovery coordination support",
      "Direct liaison with legal counsel",
    ],
  },
]

export default function PricingPage() {
  return <NewPricingSection />
}
