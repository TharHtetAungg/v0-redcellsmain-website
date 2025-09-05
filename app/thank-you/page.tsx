"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, Upload, Home } from "lucide-react"
import { motion } from "framer-motion"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const caseId = searchParams.get("case")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  if (!caseId) {
    return (
      <div className="min-h-screen bg-[#0B1117] flex items-center justify-center">
        <Card className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <div className="text-red-400 mb-4">
              <CheckCircle className="w-12 h-12 mx-auto" />
            </div>
            <h1 className="text-xl font-bold text-white mb-2">Invalid Case ID</h1>
            <p className="text-zinc-400 mb-6">No case ID was provided. Please submit a case first.</p>
            <Button asChild className="bg-[#E21E2C] hover:bg-[#c81427] text-white">
              <a href="/start-investigation">Start Investigation</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B1117]">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0B1117]/60 pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E21E2C]/10 border border-[#E21E2C]/20 mb-8"
              variants={fadeUpVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            >
              <CheckCircle className="w-10 h-10 text-[#E21E2C]" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
              variants={fadeUpVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
            >
              We've received your case
            </motion.h1>

            <motion.div
              className="mb-12"
              variants={fadeUpVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            >
              <p className="text-xl text-zinc-300 mb-4">
                Your case ID is{" "}
                <span className="font-mono text-[#E21E2C] bg-zinc-800/50 px-3 py-1 rounded border border-zinc-700">
                  {caseId}
                </span>
              </p>
              <p className="text-lg text-zinc-400">
                A specialist will contact you shortly to confirm details and timeline.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-2xl font-bold text-white text-center mb-12"
              variants={fadeUpVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            >
              What happens next?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Response Time",
                  description:
                    "Typical response time varies by tier: Technical Analysis (2-4h), Tactical Probe (1-2 days), Strategic Due Diligence (1-2 weeks)",
                },
                {
                  icon: Mail,
                  title: "Email Whitelist",
                  description:
                    "Please whitelist hello@redcell-advisory.com to ensure you receive all case updates and communications",
                },
                {
                  icon: Upload,
                  title: "Additional Evidence",
                  description:
                    "You can securely add more evidence or documentation to your case at any time using the link below",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeUpVariants}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                  }}
                >
                  <Card className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md h-full hover:border-zinc-700 transition-colors">
                    <CardHeader className="text-center pb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E21E2C]/10 border border-[#E21E2C]/20 mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-[#E21E2C]" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-zinc-400 text-center leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeUpVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-[#E21E2C] hover:bg-[#c81427] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-[#E21E2C]/40"
              >
                <a href={`/contact?topic=evidence&case=${caseId}`}>
                  Add More Evidence
                  <Upload className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 px-8 py-4 text-lg rounded-lg transition-all duration-200 bg-transparent"
              >
                <a href="/">
                  Return Home
                  <Home className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Reference Section */}
      <section className="py-16 border-t border-zinc-800/60">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Keep this case ID for your records</h3>
              <div className="font-mono text-2xl text-[#E21E2C] bg-zinc-800/50 px-6 py-3 rounded-lg border border-zinc-700 inline-block">
                {caseId}
              </div>
              <p className="text-sm text-zinc-400 mt-4">Reference this ID in all communications about your case</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B1117] flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
