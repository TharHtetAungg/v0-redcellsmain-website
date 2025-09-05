"use client"

import { useEffect, useRef, useState } from "react"

/**
 * HeroEnhancedBackground Component
 *
 * Enhanced version of the network map background specifically for the Hero section.
 * Features increased node density around RCA shield, animated nodes with pulsing glow,
 * edges that fade in/out randomly, radial spotlight behind shield, and subtle animations.
 */

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  glow: number
  pulsePhase: number
  isHub: boolean
}

interface Edge {
  from: Node
  to: Node
  progress: number
  active: boolean
  opacity: number
  fadePhase: number
}

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  opacity: number
  speed: number
  drift: number
}

export function HeroEnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const particlesRef = useRef<Particle[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const majorHubs = [
    { x: 0.26, y: 0.35, name: "New York" },
    { x: 0.48, y: 0.32, name: "London" },
    { x: 0.58, y: 0.45, name: "Dubai" },
    { x: 0.72, y: 0.38, name: "Hong Kong" },
    { x: 0.75, y: 0.52, name: "Singapore" },
    { x: 0.74, y: 0.48, name: "Bangkok" },
    { x: 0.35, y: 0.55, name: "São Paulo" },
    { x: 0.52, y: 0.28, name: "Frankfurt" },
    { x: 0.85, y: 0.42, name: "Tokyo" },
    { x: 0.15, y: 0.45, name: "Los Angeles" },
    // Additional nodes around shield area (center-top)
    { x: 0.45, y: 0.35, name: "Shield Area 1" },
    { x: 0.55, y: 0.35, name: "Shield Area 2" },
    { x: 0.5, y: 0.4, name: "Shield Area 3" },
    { x: 0.42, y: 0.42, name: "Shield Area 4" },
    { x: 0.58, y: 0.42, name: "Shield Area 5" },
  ]

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const initializeNodes = () => {
      const nodes: Node[] = []
      const safeTop = (window.innerHeight * 22) / 100

      // Add major hubs with increased density around shield
      majorHubs.forEach((hub) => {
        let y = hub.y * window.innerHeight + 120
        if (y < safeTop) {
          y = safeTop + Math.random() * 24
        }

        nodes.push({
          x: hub.x * window.innerWidth,
          y: y,
          baseX: hub.x * window.innerWidth,
          baseY: y,
          radius: 2.5,
          glow: 0.8 + Math.random() * 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
          isHub: true,
        })
      })

      for (let i = majorHubs.length; i < 140; i++) {
        const x = Math.random() * window.innerWidth
        let y = Math.random() * window.innerHeight + 120

        if (y < safeTop) {
          y = safeTop + Math.random() * 24
        }

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: 1 + Math.random() * 1.5,
          glow: 0.3 + Math.random() * 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
          isHub: false,
        })
      }

      nodesRef.current = nodes
    }

    const initializeEdges = () => {
      const nodes = nodesRef.current
      const edges: Edge[] = []

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        const distances = nodes
          .map((other, index) => ({ node: other, distance: Math.hypot(other.x - node.x, other.y - node.y), index }))
          .filter((item) => item.index !== i)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, node.isHub ? 4 : 2)

        distances.forEach(({ node: other }) => {
          if (Math.random() < 0.7) {
            edges.push({
              from: node,
              to: other,
              progress: Math.random(),
              active: Math.random() < 0.1,
              opacity: 0.1 + Math.random() * 0.2,
              fadePhase: Math.random() * Math.PI * 2, // Added fade phase for random fade effects
            })
          }
        })
      }

      edgesRef.current = edges
    }

    const initializeParticles = () => {
      const particles: Particle[] = []

      for (let i = 0; i < 7; i++) {
        const x = Math.random() * window.innerWidth
        const y = window.innerHeight * 0.6 + Math.random() * window.innerHeight * 0.4

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: 1 + Math.random() * 2,
          opacity: 0.2 + Math.random() * 0.3,
          speed: 0.2 + Math.random() * 0.3,
          drift: Math.random() * 0.5 - 0.25,
        })
      }

      particlesRef.current = particles
    }

    const drawWorldMap = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = `rgba(148, 163, 184, 0.04)`
      ctx.lineWidth = 0.5

      const continents = [
        [
          [0.1, 0.2],
          [0.35, 0.2],
          [0.35, 0.5],
          [0.1, 0.5],
        ],
        [
          [0.45, 0.25],
          [0.6, 0.25],
          [0.6, 0.4],
          [0.45, 0.4],
        ],
        [
          [0.6, 0.2],
          [0.9, 0.2],
          [0.9, 0.6],
          [0.6, 0.6],
        ],
        [
          [0.45, 0.4],
          [0.65, 0.4],
          [0.65, 0.75],
          [0.45, 0.75],
        ],
        [
          [0.25, 0.5],
          [0.4, 0.5],
          [0.4, 0.85],
          [0.25, 0.85],
        ],
        [
          [0.75, 0.7],
          [0.85, 0.7],
          [0.85, 0.8],
          [0.75, 0.8],
        ],
      ]

      continents.forEach((continent) => {
        ctx.beginPath()
        continent.forEach(([x, y], i) => {
          const screenX = x * window.innerWidth
          const screenY = y * window.innerHeight
          if (i === 0) ctx.moveTo(screenX, screenY)
          else ctx.lineTo(screenX, screenY)
        })
        ctx.closePath()
        ctx.stroke()
      })
    }

    const drawRadialSpotlight = (ctx: CanvasRenderingContext2D) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight * 0.4 // Approximate shield position
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
      gradient.addColorStop(0, `rgba(224, 12, 51, 0.25)`)
      gradient.addColorStop(0.5, `rgba(224, 12, 51, 0.12)`)
      gradient.addColorStop(1, `rgba(224, 12, 51, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    const drawNodes = (ctx: CanvasRenderingContext2D, time: number) => {
      const nodes = nodesRef.current
      const safeTop = (window.innerHeight * 22) / 100

      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.x = node.baseX + Math.sin(time * 0.001 + node.pulsePhase) * 0.5
          node.y = Math.max(node.baseY + Math.cos(time * 0.0008 + node.pulsePhase) * 0.3, safeTop)
        }

        const pulseIntensity = prefersReducedMotion ? 1 : 0.8 + Math.sin(time * 0.003 + node.pulsePhase) * 0.2
        const randomPulse = prefersReducedMotion ? 1 : 0.9 + Math.sin(time * 0.005 + node.pulsePhase * 1.3) * 0.1
        const motionMultiplier = prefersReducedMotion ? 0.6 : 1
        const glowIntensity = node.glow * pulseIntensity * randomPulse * motionMultiplier

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
        gradient.addColorStop(0, `rgba(226, 30, 44, ${glowIntensity * 0.3})`)
        gradient.addColorStop(0.5, `rgba(226, 30, 44, ${glowIntensity * 0.1})`)
        gradient.addColorStop(1, `rgba(226, 30, 44, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(226, 30, 44, ${glowIntensity * 0.8})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawEdges = (ctx: CanvasRenderingContext2D, time: number) => {
      const edges = edgesRef.current

      edges.forEach((edge) => {
        if (!prefersReducedMotion) {
          edge.progress += 0.002 + (edge.active ? 0.005 : 0)
          if (edge.progress > 1) edge.progress = 0

          edge.fadePhase += 0.01 + Math.random() * 0.02
          const fadeMultiplier = 0.3 + Math.sin(edge.fadePhase) * 0.7
          edge.opacity = Math.max(0.05, (0.1 + Math.random() * 0.2) * fadeMultiplier)
        }

        ctx.strokeStyle = `rgba(226, 30, 44, ${edge.opacity})`
        ctx.lineWidth = edge.active ? 1 : 0.5
        ctx.beginPath()
        ctx.moveTo(edge.from.x, edge.from.y)
        ctx.lineTo(edge.to.x, edge.to.y)
        ctx.stroke()

        if (!prefersReducedMotion && edge.active) {
          const dotX = edge.from.x + (edge.to.x - edge.from.x) * edge.progress
          const dotY = edge.from.y + (edge.to.y - edge.from.y) * edge.progress

          ctx.fillStyle = `rgba(226, 30, 44, 0.8)`
          ctx.beginPath()
          ctx.arc(dotX, dotY, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const drawParticles = (ctx: CanvasRenderingContext2D, time: number) => {
      const particles = particlesRef.current

      particles.forEach((particle) => {
        if (!prefersReducedMotion) {
          // Drift upward slowly
          particle.y -= particle.speed
          particle.x += Math.sin(time * 0.001 + particle.baseX * 0.01) * particle.drift

          // Reset particle when it goes off screen
          if (particle.y < -10) {
            particle.y = window.innerHeight + 10
            particle.x = particle.baseX + (Math.random() - 0.5) * 100
          }
        }

        // Draw glowing particle
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
        gradient.addColorStop(0, `rgba(226, 30, 44, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(226, 30, 44, ${particle.opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(226, 30, 44, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle = `rgba(226, 30, 44, ${particle.opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawTopFadeMask = (ctx: CanvasRenderingContext2D) => {
      const maskHeight = (window.innerHeight * 22) / 100
      const gradient = ctx.createLinearGradient(0, 0, 0, maskHeight)
      gradient.addColorStop(0, `rgba(11, 17, 23, 1)`)
      gradient.addColorStop(0.7, `rgba(11, 17, 23, 0.8)`)
      gradient.addColorStop(1, `rgba(11, 17, 23, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, maskHeight)
    }

    const animate = (time: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      drawWorldMap(ctx)
      drawRadialSpotlight(ctx)
      drawParticles(ctx, time)
      drawEdges(ctx, time)
      drawNodes(ctx, time)
      drawTopFadeMask(ctx)

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    const handleResize = () => {
      resizeCanvas()
      initializeNodes()
      initializeEdges()
      initializeParticles()
    }

    // Initialize
    resizeCanvas()
    initializeNodes()
    initializeEdges()
    initializeParticles()

    // Event listeners
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
