"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface StatItem {
  number: string
  label: string
  value: number
}

const stats: StatItem[] = [
  { number: "30+", label: "Jurisdictions Monitored", value: 30 },
  { number: "100+", label: "Registries Tracked", value: 100 },
  { number: "48h", label: "Average Turnaround", value: 48 },
  { number: "$250k+", label: "Losses Blocked", value: 250 },
]

function CountUpNumber({
  value,
  suffix = "",
  prefix = "",
  inView,
  prefersReducedMotion,
}: {
  value: number
  suffix?: string
  prefix?: string
  inView: boolean
  prefersReducedMotion: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (prefersReducedMotion) {
      setCount(value)
      return
    }

    let startTime: number
    const duration = 2000 // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, value, prefersReducedMotion])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function QuickStatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
            >
              <div className="text-4xl font-extrabold text-red-400 bg-gradient-to-r from-[#e00c33] to-pink-500 bg-clip-text [&:not(:has(*))]:text-transparent mb-2">
                {stat.number.includes("$") ? (
                  <CountUpNumber
                    value={stat.value}
                    prefix="$"
                    suffix="k+"
                    inView={isInView}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ) : stat.number.includes("h") ? (
                  <CountUpNumber
                    value={stat.value}
                    suffix="h"
                    inView={isInView}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ) : (
                  <CountUpNumber
                    value={stat.value}
                    suffix="+"
                    inView={isInView}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                )}
              </div>
              <div className="text-sm text-muted-foreground/80 uppercase tracking-wide font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
