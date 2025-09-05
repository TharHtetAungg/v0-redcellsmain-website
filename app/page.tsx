"use client"

import { Bot, FileText, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { SeoTopicsGrid } from "@/components/seo-topics-grid"
import { NewPricingSection } from "@/components/new-pricing-section"
import { FullscreenHero } from "@/components/fullscreen-hero"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { QuickStatsBar } from "@/components/quick-stats-bar"
import { useEffect, useState } from "react"
import Head from "next/head"

const howItWorks: {
  Icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    Icon: FileText,
    title: "Upload & Retain",
    description: "Submit your case documents and pay the initial retainer securely.",
  },
  {
    Icon: Bot,
    title: "AI Deep-Scan",
    description: "Our system scans global registries, sanctions lists, and digital footprints.",
  },
  {
    Icon: UserCheck,
    title: "Human Analyst Validation",
    description: "Ex-intelligence operators verify AI findings and add context.",
  },
  {
    Icon: ShieldCheck,
    title: "Receive Your Brief",
    description: "Get a PDF report and actionable playbook in ≤ 5 business days.",
  },
]

const PreloadAssets = () => (
  <Head>
    <link rel="preload" as="script" href="/_next/static/chunks/pages/_app.js" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  </Head>
)

export default function Home() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <>
      <PreloadAssets />
      <div className="flex flex-col">
        <FullscreenHero />

        <QuickStatsBar />

        <section className="relative mx-auto max-w-5xl px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Our Four-Step Process
            </h2>
            <p className="mt-3 text-center text-muted-foreground">From submission to actionable intelligence.</p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"></div>

            {/* Steps */}
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex w-full max-w-3xl items-center gap-6 mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Left side content (odd steps) */}
                <div className="w-1/2 pr-8">
                  {index % 2 === 0 ? (
                    <div className="text-right">
                      <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  ) : null}
                </div>

                {/* Icon in the center line */}
                <motion.div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background text-primary"
                  whileInView={
                    prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }
                  viewport={{ once: true }}
                >
                  <step.Icon className="h-5 w-5" />
                </motion.div>

                {/* Right side content (even steps) */}
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 ? (
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <SeoTopicsGrid />

        <MissionVisionSection />

        <div id="pricing" className="scroll-mt-24">
          <NewPricingSection />
        </div>
      </div>
    </>
  )
}
