"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, HelpCircle } from "lucide-react"

type PlanKey = "technical" | "tactical" | "strategic" | "recovery"

const PLAN_LABELS: Record<PlanKey, string> = {
  technical: "Technical Analysis",
  tactical: "Tactical Probe",
  strategic: "Strategic Due Diligence",
  recovery: "Reclamation Ops",
}

export default function StartInvestigationPage() {
  const router = useRouter()
  const search = useSearchParams()
  const initialPlan = (search.get("plan") as PlanKey) || "technical"

  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  const [isSticky, setIsSticky] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: mediaQuery.matches ? "auto" : "instant",
    })

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [plan, setPlan] = React.useState<PlanKey>(initialPlan)
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [summary, setSummary] = React.useState("")
  const [docs, setDocs] = React.useState<File[]>([])
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [caseId, setCaseId] = React.useState<string | null>(null)

  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [showCaseIdPulse, setShowCaseIdPulse] = React.useState(false)

  const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function onFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    setDocs(Array.from(e.target.files))
  }

  function removeFile(index: number) {
    setDocs(docs.filter((_, i) => i !== index))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)

    // No payment, no server call: create a mock case ID and show confirmation.
    await new Promise((r) => setTimeout(r, 600))
    const mockId = `RCA-${Date.now().toString().slice(-6)}`
    setCaseId(mockId)
    setSubmitted(true)
    setSubmitting(false)

    setTimeout(() => setShowCaseIdPulse(true), 100)
  }

  const disabled = !fullName.trim() || !email.trim() || !summary.trim() || submitting

  if (submitted) {
    return (
      <section className="min-h-[80vh] px-4">
        <div className="mx-auto max-w-3xl pt-24 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e00c33]/10 text-[#e00c33]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white">Investigation Request Received</h1>
          <p className="mt-3 text-gray-300">Thanks, we've logged your request and will email next steps shortly.</p>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5 text-left">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Case ID</p>
                <p
                  className={`font-medium text-white transition-all duration-800 ${showCaseIdPulse ? "animate-pulse text-[#e00c33]" : ""}`}
                >
                  {caseId}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Selected Tier</p>
                <p className="font-medium text-white">{PLAN_LABELS[plan]}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-400">Name:</span> {fullName}
              </p>
              <p>
                <span className="text-gray-400">Email:</span> {email}
              </p>
              {company && (
                <p>
                  <span className="text-gray-400">Company:</span> {company}
                </p>
              )}
              <p className="mt-2">
                <span className="text-gray-400">Summary:</span> {summary}
              </p>
              {docs.length > 0 && (
                <p className="mt-2">
                  <span className="text-gray-400">Attachments:</span> {docs.map((d) => d.name).join(", ")}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="rounded-lg bg-[#e00c33] px-4 py-2 text-sm font-medium text-white hover:bg-[#c8002b]"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[80vh] px-4">
      <div className="mx-auto max-w-3xl pt-24">
        {/* Increased top padding from pt-14 to pt-24 for navbar spacing */}
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white my-[25px] py-px">Start Investigation</h1>
          <p className="mt-3 text-gray-300">
            Provide key details and attach any supporting files. We'll review and follow up fast.
          </p>
        </div>

        <motion.div
          className={`sticky top-20 z-20 mt-6 mb-6 transition-all duration-300 ${
            isSticky
              ? "bg-background/70 backdrop-blur-sm border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
              : ""
          } rounded-lg px-4 py-3 -mx-4`}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <motion.a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground border border-transparent hover:text-foreground hover:bg-[#e00c33]/10 hover:border-[#e00c33]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e00c33]/40 transition-colors duration-200"
              aria-label="Back to pricing"
              whileHover={prefersReducedMotion ? {} : { x: -2 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { x: -2 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
              Back to Pricing
            </motion.a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground border border-transparent hover:text-foreground hover:bg-white/5 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors duration-200"
              aria-label="Need help with your investigation request"
            >
              <HelpCircle className="h-4 w-4" />
              <span className="hidden xs:inline">Need help?</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-4">
          {/* Card */}
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-black/30 p-6">
            <div className="mb-6 sm:sticky sm:top-2 sm:z-10 sm:bg-black/30 sm:backdrop-blur-sm sm:rounded-lg sm:p-4 sm:-m-4 sm:mb-2">
              <label className="mb-2 block text-sm font-medium text-white">Selected Tier</label>
              <div
                className="grid grid-cols-2 gap-2 sm:grid-cols-4"
                role="radiogroup"
                aria-label="Investigation tier selection"
              >
                {(Object.keys(PLAN_LABELS) as PlanKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-pressed={plan === key}
                    aria-label={`Select ${PLAN_LABELS[key]} tier`}
                    onClick={() => setPlan(key)}
                    className={
                      "rounded-lg border px-3 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e00c33]/50 " +
                      (plan === key
                        ? "border-[#e00c33] bg-[#e00c33]/15 text-white ring-2 ring-[#e00c33]/30 shadow-lg shadow-[#e00c33]/40"
                        : "border-white/10 text-gray-300 hover:bg-white/5")
                    }
                  >
                    {PLAN_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1 block text-sm text-gray-300">
                  Full name *
                </label>
                <input
                  id="fullName"
                  className={`w-full rounded-lg border bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-[#e00c33] ${
                    errors.fullName ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                    if (errors.fullName) setErrors({ ...errors, fullName: "" })
                  }}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-gray-300">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full rounded-lg border bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-[#e00c33] ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: "" })
                  }}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="company" className="mb-1 block text-sm text-gray-300">
                Company (optional)
              </label>
              <input
                id="company"
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-[#e00c33]"
                placeholder="Company Ltd."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="summary" className="mb-1 block text-sm text-gray-300">
                Brief case summary *
              </label>
              <textarea
                id="summary"
                rows={5}
                maxLength={1000}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none focus:border-[#e00c33]"
                placeholder="What happened, amounts, counterparties, timelines, etc."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                aria-describedby="summary-counter"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>Required field</span>
                <span id="summary-counter">{summary.length}/1000 characters</span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="files" className="mb-1 block text-sm text-gray-300">
                Attach files (optional)
              </label>
              <input
                id="files"
                type="file"
                multiple
                onChange={onFiles}
                className="block w-full cursor-pointer rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-gray-300 file:mr-3 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-gray-100 hover:file:bg-white/20"
              />

              {/* File list */}
              {docs.length > 0 && (
                <div className="mt-3 space-y-2">
                  {docs.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <span className="text-sm text-gray-300 truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-2 text-xs text-red-400 hover:text-red-300 focus:outline-none focus:ring-1 focus:ring-red-400 rounded px-2 py-1"
                        aria-label={`Remove ${file.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-2 text-xs text-gray-400">256-bit TLS secured. We sign NDAs on request.</p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                onClick={() => router.push("/")}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={disabled}
                className={
                  "rounded-lg bg-[#e00c33] px-5 py-2 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-[#e00c33]/50 " +
                  (disabled ? "opacity-50" : "hover:bg-[#c8002b]")
                }
              >
                {submitting ? "Submitting…" : "Submit Request"}
              </button>
            </div>
          </form>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#e00c33] flex-shrink-0"></div>
                <span>Within 24 hours, a specialist reviews and emails your case ID.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#e00c33] flex-shrink-0"></div>
                <span>A secure upload link will be provided if more files are needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#e00c33] flex-shrink-0"></div>
                <span>No payment collected at this stage.</span>
              </li>
            </ul>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 mb-6">
            No payment is collected here. We'll confirm scope, timeline and costs before proceeding.
          </p>
        </div>
      </div>
    </section>
  )
}
