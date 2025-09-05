"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CaseCardProps {
  title: string
  subtitle: string
  problem: string
  action: string
  impact: string
  badge: string
  icon: LucideIcon // Updated from string to LucideIcon type
}

export function CaseCard({ title, subtitle, problem, action, impact, badge, icon: IconComponent }: CaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleExpanded()
    }
  }

  return (
    <motion.article
      className="group relative rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer focus-within:ring-2 focus-within:ring-primary/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        boxShadow: "0 20px 40px rgba(226, 30, 44, 0.15)",
        scale: 1.02,
      }}
      onClick={toggleExpanded}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Case study: ${title}. Click to expand details.`}
    >
      <div className="relative mb-4 aspect-video rounded-lg bg-muted/20 border border-border/20 flex items-center justify-center overflow-hidden">
        <div className="bg-white/5 rounded-full p-2 group-hover:bg-white/10 transition-colors">
          <IconComponent
            className="h-8 w-8 text-gray-300 group-hover:text-[#e00c33] transition-colors"
            aria-label={`${badge} case icon`}
          />
        </div>

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
            {badge}
          </span>
        </div>
      </div>

      <header>
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{subtitle}</p>
      </header>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{problem}</p>

      <div className="mb-4">
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleExpanded()
          }}
          onKeyDown={handleKeyDown}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-sm p-1 -m-1"
          aria-expanded={isExpanded}
          aria-controls={`case-action-${title.replace(/\s+/g, "-").toLowerCase()}`}
          aria-label={`${isExpanded ? "Hide" : "Show"} detailed actions for ${title}`}
        >
          What we did
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id={`case-action-${title.replace(/\s+/g, "-").toLowerCase()}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
              role="region"
              aria-label="Detailed actions taken"
            >
              <div className="mt-3 p-3 rounded-lg bg-muted/20 border border-border/20">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{action}</p>
                <div className="pt-3 border-t border-border/20">
                  <p className="text-xs font-medium text-primary mb-1">Impact</p>
                  <p className="text-sm text-foreground leading-relaxed">{impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="flex items-center justify-between pt-4 border-t border-border/20">
        <span className="text-xs text-muted-foreground">Intelligence Case</span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleExpanded()
          }}
          className="text-xs text-primary hover:text-primary/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-sm p-1 -m-1"
          aria-label={`${isExpanded ? "Hide" : "Show"} actions for ${title}`}
        >
          Read actions →
        </button>
      </footer>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group {
            transition: none !important;
          }
        }
      `}</style>
    </motion.article>
  )
}
