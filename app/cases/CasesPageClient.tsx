"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CaseCard } from "@/components/cases/CaseCard"
import { caseStudies } from "@/lib/cases"
import { useEffect, useState } from "react"

export function CasesPageClient() {
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
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How we've contained fraud and protected clients across borders
          </p>
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CaseCard
                title={caseStudy.title}
                subtitle={caseStudy.subtitle}
                problem={caseStudy.problem}
                action={caseStudy.action}
                impact={caseStudy.impact}
                badge={caseStudy.badge}
                icon={caseStudy.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            className="rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Your case deserves the same outcome</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every investigation is handled with complete confidentiality and the same rigorous methodology that
              delivered these results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/start-investigation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                Start an Investigation
              </Link>
              <Link
                href="/start-investigation?plan=recovery"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-lg font-semibold text-primary hover:bg-primary/10 hover:border-primary/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                Book Recovery Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
