"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HeroEnhancedBackground } from "./hero-enhanced-background"

export function FullscreenHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] sm:min-h-[92vh] md:min-h-[96vh] flex-col items-center justify-center overflow-hidden section pb-16 sm:pb-20 md:pb-24 pt-0 gap-0 w-auto my-[67px]"
    >
      <HeroEnhancedBackground />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Gradient stroke ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#e00c33] via-purple-500 to-pink-500 opacity-20"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
              />
              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-[#e00c33]/30 blur-xl"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
              />
              {/* Subtle pulse animation to RCA shield */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.02, 1],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
              >
                <Image
                  src="/logo-animated.svg"
                  alt="RedCellAdvisory Animated Logo"
                  width={128}
                  height={128}
                  className="relative z-10 rounded-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-white">Stop cross-border fraud</div>
            {/* Gradient shimmer animation to red text */}
            <motion.div
              className="relative text-[#e00c33] bg-gradient-to-r from-[#e00c33] to-pink-500 bg-clip-text text-transparent [&:not(:hover)]:text-[#e00c33] supports-[background-clip:text]:text-transparent"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              and unlock stuck payments faster
            </motion.div>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-lg text-muted-foreground/80 md:mx-0 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI + human intelligence for frozen funds, OFAC holds and counterparty checks that out-perform
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-[#e00c33] hover:bg-[#e00c33]/90 text-white">
              <Link href="/start-investigation">Start an Investigation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#e00c33] text-[#e00c33] hover:bg-[#e00c33]/10 bg-transparent"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
