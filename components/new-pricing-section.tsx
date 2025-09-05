"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const START_ROUTE = "/start-investigation" // single source of truth

const pricingTiers = [
  {
    name: "Technical Analysis",
    isPopular: true,
    price: "USD 200",
    turnaround: "2–4 h",
    features: [
      "AI-powered situational scan (Seraphim Core™)",
      "Deep-data sources beyond public internet",
      "Step-by-step action plan with costs & timelines",
    ],
    description:
      'Covers deals up to <span class="text-white font-medium">$2 million</span> — premium risk check at <span class="text-white font-medium">0.01% cost</span>.',
    useCases: [
      "Pre-payment counterparty vetting",
      "Post-payment red-flag review",
      "Funds frozen by banks / OFAC",
      "Crypto-exchange asset lock",
    ],
    buttonText: "Start Investigation Now",
    buttonLink: `${START_ROUTE}?plan=technical`, // ✅ updated
    buttonVariant: "primary",
  },
  {
    name: "Tactical Probe",
    isPopular: false,
    price: "from USD 2,000",
    turnaround: "1-2 business days",
    features: ["Director & shareholder mapping", "Adverse media + insider tips", "Network graph of connections"],
    description:
      'Ideal for transactions <span class="text-white">$0.5-10m</span>. <br/> <span class="text-[#e00c33] font-medium">Typical ROI:</span> blocking a $250k loss.',
    useCases: [],
    buttonText: "Get this report",
    buttonLink: `${START_ROUTE}?plan=tactical`, // ✅ updated
    buttonVariant: "link",
  },
  {
    name: "Strategic Due Diligence",
    isPopular: false,
    price: "from USD 10,000",
    turnaround: "1-2 weeks",
    features: [
      "Full asset & liability trace",
      "On-ground human source inquiries",
      "Comprehensive risk memo for investors",
    ],
    description: 'Recommended for deals <span class="text-white">$10m+</span>, M&A, JV or equity stakes.',
    useCases: [],
    buttonText: "Get this report",
    buttonLink: `${START_ROUTE}?plan=strategic`, // ✅ updated
    buttonVariant: "link",
  },
  {
    name: "Reclamation Ops",
    isPopular: false,
    price: "Custom Quote",
    turnaround: "custom",
    features: ["Cross-jurisdictional asset seizure", "Liaison with law enforcement", "Ongoing recovery management"],
    description:
      "3-phase roadmap, success-fee model after recovery. Suitable when fraud has already occurred and funds must be clawed back.",
    useCases: [],
    buttonText: "Book Recovery Call",
    buttonLink: `${START_ROUTE}?plan=recovery`, // ✅ updated (kept in same flow)
    buttonVariant: "primary",
  },
]

export function NewPricingSection() {
  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Intelligence Tiers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Choose the level of scrutiny your case requires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="relative flex flex-col gap-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-8 transition-all duration-300 hover:bg-black/30 hover:border-[#e00c33]/50 hover:shadow-2xl hover:shadow-[#e00c33]/10 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-4">
                  <span className="relative rounded-full bg-[#e00c33]/20 px-3 py-1 text-xs text-[#e00c33]">
                    Most Popular
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#e00c33] to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    />
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>

              <div className="flex flex-col">
                <p className="text-4xl font-bold text-white leading-none">{tier.price}</p>
                <span className="text-sm font-light text-gray-500 mt-1">{tier.turnaround}</span>
              </div>

              <ul className="space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#e00c33] shadow-lg shadow-[#e00c33]/50 mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <p
                className="text-xs leading-relaxed text-gray-400"
                dangerouslySetInnerHTML={{ __html: tier.description }}
              />

              {tier.useCases.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#e00c33]">Use cases:</h4>
                  <ul className="mt-2 space-y-1 text-xs">
                    {tier.useCases.map((useCase) => (
                      <li key={useCase} className="flex gap-2 items-start text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-[#e00c33] mt-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href={tier.buttonLink}
                scroll // Added scroll prop to force scroll to top on navigation
                className={cn(
                  "mt-auto transition-all duration-200",
                  tier.buttonVariant === "primary"
                    ? "inline-block rounded-lg bg-[#e00c33] py-3 px-4 text-center text-white font-medium shadow-lg shadow-[#e00c33]/25 hover:bg-[#c8002b] hover:shadow-xl hover:shadow-[#e00c33]/40 hover:scale-105"
                    : "inline-block rounded-lg border border-[#e00c33] py-3 px-4 text-center text-[#e00c33] font-medium hover:bg-[#e00c33]/10 hover:border-[#ff3355] hover:text-[#ff3355]",
                )}
              >
                {tier.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
