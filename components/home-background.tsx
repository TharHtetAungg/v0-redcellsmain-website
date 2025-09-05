"use client"

import { useEffect, useRef, useState } from "react"

/**
 * HomeBackground Component
 *
 * A deterministic, homepage-only background that renders the network map effect.
 * Mounted only when pathname === '/' and remounts cleanly on navigation.
 *
 * Z-index scheme:
 * - HomeBackground: z-[-1] (below all content)
 * - Main content: z-0 and above
 * - Navbar: z-50
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
}

export function HomeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const scrollYRef = useRef(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Major financial hubs coordinates (normalized 0-1)
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
  ]

  useEffect(() => {
    // Check for reduced motion preference
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
      const safeTop = (window.innerHeight * 22) / 100 // 22vh safe zone

      // Add major hubs
      majorHubs.forEach((hub) => {
        let y = hub.y * window.innerHeight + 120 // 120px offset
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

      // Add regular nodes
      for (let i = majorHubs.length; i < 110; i++) {
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
            })
          }
        })
      }

      edgesRef.current = edges
    }

    const drawWorldMap = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = `rgba(148, 163, 184, 0.04)`
      ctx.lineWidth = 0.5

      const continents = [
        // North America
        [
          [0.1, 0.2],
          [0.35, 0.2],
          [0.35, 0.5],
          [0.1, 0.5],
        ],
        // Europe
        [
          [0.45, 0.25],
          [0.6, 0.25],
          [0.6, 0.4],
          [0.45, 0.4],
        ],
        // Asia
        [
          [0.6, 0.2],
          [0.9, 0.2],
          [0.9, 0.6],
          [0.6, 0.6],
        ],
        // Africa
        [
          [0.45, 0.4],
          [0.65, 0.4],
          [0.65, 0.75],
          [0.45, 0.75],
        ],
        // South America
        [
          [0.25, 0.5],
          [0.4, 0.5],
          [0.4, 0.85],
          [0.25, 0.85],
        ],
        // Australia
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

    const drawAurora = (ctx: CanvasRenderingContext2D, time: number) => {
      const auroraOpacity = prefersReducedMotion ? 0.05 : 0.08

      const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight)
      gradient.addColorStop(0, `rgba(226, 30, 44, 0)`)
      gradient.addColorStop(0.3, `rgba(226, 30, 44, ${auroraOpacity})`)
      gradient.addColorStop(0.7, `rgba(226, 30, 44, ${auroraOpacity * 0.7})`)
      gradient.addColorStop(1, `rgba(226, 30, 44, 0)`)

      ctx.fillStyle = gradient

      const waveOffset = prefersReducedMotion ? 0 : Math.sin(time * 0.0005) * 50
      const safeTop = (window.innerHeight * 22) / 100
      const finalOffset = Math.max(scrollYRef.current * -0.12 + 120, safeTop - 200)

      ctx.save()
      ctx.translate(waveOffset, finalOffset)
      ctx.rotate(-0.2)
      ctx.fillRect(-200, -200, window.innerWidth + 400, 300)
      ctx.restore()
    }

    const drawNodes = (ctx: CanvasRenderingContext2D, time: number) => {
      const nodes = nodesRef.current
      const safeTop = (window.innerHeight * 22) / 100

      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          const parallaxX = scrollYRef.current * 0.02 * (node.isHub ? 1.2 : 0.8)
          const parallaxY = scrollYRef.current * 0.12
          node.x = node.baseX + parallaxX + Math.sin(time * 0.001 + node.pulsePhase) * 0.5
          node.y = Math.max(node.baseY + parallaxY + Math.cos(time * 0.0008 + node.pulsePhase) * 0.3, safeTop)
        }

        const flicker = prefersReducedMotion ? 1 : 0.97 + Math.sin(time * 0.003 + node.pulsePhase) * 0.03
        const motionMultiplier = prefersReducedMotion ? 0.6 : 1
        const glowIntensity = node.glow * flicker * motionMultiplier

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

    const drawEdges = (ctx: CanvasRenderingContext2D) => {
      const edges = edgesRef.current

      edges.forEach((edge) => {
        if (!prefersReducedMotion) {
          edge.progress += 0.002 + (edge.active ? 0.005 : 0)
          if (edge.progress > 1) edge.progress = 0
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
      drawAurora(ctx, time)
      drawEdges(ctx)
      drawNodes(ctx, time)
      drawTopFadeMask(ctx)

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }

    const handleResize = () => {
      resizeCanvas()
      initializeNodes()
      initializeEdges()
    }

    // Initialize
    resizeCanvas()
    initializeNodes()
    initializeEdges()

    // Start animation
    if (prefersReducedMotion) {
      animate(0) // Single frame for reduced motion
    } else {
      animationRef.current = requestAnimationFrame(animate)
    }

    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
