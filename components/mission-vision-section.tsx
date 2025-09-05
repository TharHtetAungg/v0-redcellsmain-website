"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MissionVisionSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Our Mission & Vision
        </h2>
        <div className="bg-gradient-to-r from-[#e00c33] to-transparent h-[2px] w-16 mx-auto mb-8"></div>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mission Card */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-8 hover:border-[#e00c33]/50 hover:bg-black/30 transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            At RedSell Advisory, powered by Seraphim Core™, our mission is to transform risk into actionable
            intelligence. We deliver fast, verifiable, source-linked insights that help global businesses verify
            partners, prevent fraud, and recover value. By combining advanced OSINT, compliance expertise, and AI-driven
            analysis, we give clients clarity where others see noise — enabling safer deals, smarter decisions, and
            stronger enforcement.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-8 hover:border-[#e00c33]/50 hover:bg-black/30 transition-all duration-300"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is to become the go-to partner for cross-border risk intelligence and enforcement in APAC and
            beyond. Every report we deliver is backed by Seraphim Core™, ensuring transparency, traceability, and
            trust-by-design. We aim to set the industry standard where due diligence meets enforcement — fast, lawful,
            and scalable — so our clients can grow confidently, knowing every risk is mapped and every opportunity is
            protected.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
