"use client"

import { useEffect, useRef, useState } from "react"

export default function OrganicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasLowerRef = useRef<HTMLCanvasElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameUpperRef = useRef<number | null>(null)
  const animationFrameLowerRef = useRef<number | null>(null)
  const animationTimeRef = useRef(0)
  const isSafari = useRef(false)

  // Detect Safari browser
  useEffect(() => {
    // Safari detection
    isSafari.current = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  }, [])

  // Scroll performance optimization
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      if (scrollingTimerRef.current) {
        clearTimeout(scrollingTimerRef.current)
      }

      // Longer debounce for Safari
      const debounceTime = isSafari.current ? 300 : 200

      scrollingTimerRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, debounceTime)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollingTimerRef.current) {
        clearTimeout(scrollingTimerRef.current)
      }
    }
  }, [])

  // Animation for the lower layer (below the blur)
  useEffect(() => {
    const canvas = canvasLowerRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Set canvas dimensions with Safari-specific optimizations
    const resizeCanvas = () => {
      const dpr = isSafari.current ? 1 : window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      // Ensure we have valid dimensions
      if (width > 0 && height > 0) {
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
    }

    resizeCanvas()

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout | null = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
      }, 200)
    }

    window.addEventListener("resize", handleResize)

    // Brand colors
    const limeColor = "#bed903"

    // Wave class for the flowing effect
    class Wave {
      amplitude: number
      period: number
      phase: number
      color: string
      y: number
      thickness: number

      constructor(y: number, amplitude: number, period: number, phase: number, color: string, thickness: number) {
        this.y = y
        this.amplitude = amplitude
        this.period = period
        this.phase = phase
        this.color = color
        this.thickness = thickness
      }

      draw(time: number) {
        ctx.beginPath()
        ctx.moveTo(0, this.y)

        // Draw the wave with optimized step size for Safari
        const step = isScrolling || isSafari.current ? 4 : 1
        for (let x = 0; x < canvas.width; x += step) {
          const dx = x / canvas.width
          const offsetY = Math.sin(dx * this.period + this.phase + time * 0.001) * this.amplitude
          ctx.lineTo(x, this.y + offsetY)
        }

        // Complete the path to fill
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        // Fill with gradient
        const gradient = ctx.createLinearGradient(
          0,
          this.y - this.amplitude,
          0,
          this.y + this.amplitude + this.thickness,
        )
        gradient.addColorStop(0, "rgba(190, 217, 3, 0)")
        gradient.addColorStop(0.5, this.color)
        gradient.addColorStop(1, "rgba(190, 217, 3, 0)")

        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Floating orb class for more prominent movement
    class FloatingOrb {
      x: number
      y: number
      radius: number
      baseColor: string
      r: number
      g: number
      b: number
      speedX: number
      speedY: number
      pulseSpeed: number
      pulseAmount: number
      pulsePhase: number
      lastUpdate: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.baseColor = color
        this.lastUpdate = 0

        // Parse the rgba values
        const rgbaMatch = color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)$$/)
        if (rgbaMatch) {
          this.r = Number.parseInt(rgbaMatch[1])
          this.g = Number.parseInt(rgbaMatch[2])
          this.b = Number.parseInt(rgbaMatch[3])
        } else {
          // Default to lime green if parsing fails
          this.r = 190
          this.g = 217
          this.b = 3
        }

        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.pulseSpeed = 0.02 + Math.random() * 0.02
        this.pulseAmount = 0.2 + Math.random() * 0.3
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update(time: number) {
        // Skip updates during scrolling for Safari
        if (isScrolling && isSafari.current) return

        // Throttle updates for Safari
        if (isSafari.current && time - this.lastUpdate < 30) return
        this.lastUpdate = time

        // Move the orb
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x < this.radius || this.x > canvas.width - this.radius) {
          this.speedX *= -1
        }
        if (this.y < this.radius || this.y > canvas.height - this.radius) {
          this.speedY *= -1
        }

        // Keep in bounds
        this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x))
        this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y))
      }

      draw(time: number) {
        // Calculate pulse
        const pulseRadius = this.radius * (1 + Math.sin(time * this.pulseSpeed + this.pulsePhase) * this.pulseAmount)

        // Draw the orb with gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseRadius)

        // Properly formatted rgba strings
        gradient.addColorStop(0, this.baseColor)
        gradient.addColorStop(0.7, `rgba(${this.r}, ${this.g}, ${this.b}, 0.7)`)
        gradient.addColorStop(1, `rgba(${this.r}, ${this.g}, ${this.b}, 0)`)

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create waves at different positions
    const waves = [
      new Wave(canvas.height * 0.6, 50, 8, 0, "rgba(190, 217, 3, 0.5)", 120),
      new Wave(canvas.height * 0.7, 40, 12, 1, "rgba(190, 217, 3, 0.4)", 100),
      new Wave(canvas.height * 0.8, 30, 16, 2, "rgba(190, 217, 3, 0.35)", 80),
    ]

    // Create floating orbs - reduce count for Safari
    const orbs = []
    const numOrbs = isSafari.current ? 5 : 8

    for (let i = 0; i < numOrbs; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = 50 + Math.random() * 100
      const alpha = 0.2 + Math.random() * 0.3
      orbs.push(new FloatingOrb(x, y, radius, `rgba(190, 217, 3, ${alpha})`))
    }

    let animationTime = 0
    let lastFrameTime = 0

    // Animation loop with frame rate control for Safari
    function animate(timestamp: number) {
      // Throttle frame rate for Safari during normal operation
      if (isSafari.current && !isScrolling) {
        if (timestamp - lastFrameTime < 1000 / 30) {
          // 30 FPS for Safari
          animationFrameLowerRef.current = requestAnimationFrame(animate)
          return
        }
        lastFrameTime = timestamp
      }

      // During scrolling in Safari, reduce updates even more
      if (isScrolling && isSafari.current) {
        if (timestamp - lastFrameTime < 1000 / 15) {
          // 15 FPS during scrolling
          animationFrameLowerRef.current = requestAnimationFrame(animate)
          return
        }
        lastFrameTime = timestamp
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw orbs
      orbs.forEach((orb) => {
        orb.update(animationTime)
        orb.draw(animationTime)
      })

      // Draw waves
      waves.forEach((wave) => {
        wave.draw(animationTime)
      })

      animationTime += isSafari.current ? 1 : 2 // Slower animation in Safari
      animationFrameLowerRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameLowerRef.current) {
        cancelAnimationFrame(animationFrameLowerRef.current)
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [isScrolling])

  // Animation for the upper layer (above the green waves)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Set canvas dimensions with Safari-specific optimizations
    const resizeCanvas = () => {
      const dpr = isSafari.current ? 1 : window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      // Ensure we have valid dimensions
      if (width > 0 && height > 0) {
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
    }

    resizeCanvas()

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout | null = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
      }, 200)
    }

    window.addEventListener("resize", handleResize)

    // Convert hex to rgba
    const hexToRgba = (hex: string, alpha = 1) => {
      const r = Number.parseInt(hex.slice(1, 3), 16)
      const g = Number.parseInt(hex.slice(3, 5), 16)
      const b = Number.parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    // Brand colors
    const limeColor = "#bed903"
    const darkColor = "#2c2e2e"

    // Blob class
    class Blob {
      x: number
      y: number
      radius: number
      color: string
      angle: number
      velocity: number
      amplitude: number
      lastUpdate: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.angle = Math.random() * Math.PI * 2
        this.velocity = 0.0005 + Math.random() * 0.0005
        this.amplitude = 20 + Math.random() * 30
        this.lastUpdate = 0
      }

      update(timestamp: number) {
        // Skip updates during scrolling for Safari
        if (isScrolling && isSafari.current) return

        // Throttle updates for Safari
        if (isSafari.current && timestamp - this.lastUpdate < 30) return
        this.lastUpdate = timestamp

        this.angle += this.velocity
        this.x += (Math.cos(this.angle) * this.amplitude) / 20
        this.y += (Math.sin(this.angle) * this.amplitude) / 20
      }

      draw() {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)

        gradient.addColorStop(0, hexToRgba(this.color, 0.4))
        gradient.addColorStop(1, hexToRgba(this.color, 0))

        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create blobs - reduce for Safari
    const blobs: Blob[] = []

    // Large lime blob in bottom left
    blobs.push(new Blob(canvas.width * 0.2, canvas.height * 1.1, canvas.width * 0.6, limeColor))

    // Medium lime blob in top right
    blobs.push(new Blob(canvas.width * 0.8, canvas.height * -0.1, canvas.width * 0.4, limeColor))

    // Small lime blob in middle - skip for Safari
    if (!isSafari.current) {
      blobs.push(new Blob(canvas.width * 0.7, canvas.height * 0.5, canvas.width * 0.2, limeColor))
    }

    // Dark blob for contrast
    blobs.push(new Blob(canvas.width * 0.3, canvas.height * 0.3, canvas.width * 0.3, darkColor))

    let lastFrameTime = 0
    let noiseAppliedTime = 0

    // Animation loop with optimizations for Safari
    function animate(timestamp: number) {
      // Throttle frame rate for Safari during normal operation
      if (isSafari.current && !isScrolling) {
        if (timestamp - lastFrameTime < 1000 / 30) {
          // 30 FPS for Safari
          animationFrameUpperRef.current = requestAnimationFrame(animate)
          return
        }
        lastFrameTime = timestamp
      }

      // During scrolling in Safari, reduce updates even more
      if (isScrolling && isSafari.current) {
        if (timestamp - lastFrameTime < 1000 / 15) {
          // 15 FPS during scrolling
          animationFrameUpperRef.current = requestAnimationFrame(animate)
          return
        }
        lastFrameTime = timestamp
      }

      // Clear with a dark base color with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = hexToRgba(darkColor, 0.7)
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update blobs
      for (const blob of blobs) {
        blob.update(timestamp)
        blob.draw()
      }

      // Add noise texture - only if canvas has valid dimensions and not scrolling in Safari
      // For Safari, apply noise less frequently
      const shouldApplyNoise =
        canvas.width > 0 &&
        canvas.height > 0 &&
        !(isScrolling && isSafari.current) &&
        (!isSafari.current || timestamp - noiseAppliedTime > 500)

      if (shouldApplyNoise) {
        noiseAppliedTime = timestamp
        try {
          // For Safari, sample fewer pixels
          const sampleStep = isSafari.current ? 8 : 4

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data

          for (let i = 0; i < data.length; i += 4 * sampleStep) {
            const noise = Math.random() * 10 - 5
            data[i] += noise // R
            data[i + 1] += noise // G
            data[i + 2] += noise // B
          }

          ctx.putImageData(imageData, 0, 0)
        } catch (error) {
          console.warn("Error applying noise texture:", error)
          // Continue animation without noise if there's an error
        }
      }

      animationFrameUpperRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameUpperRef.current) {
        cancelAnimationFrame(animationFrameUpperRef.current)
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [isScrolling])

  // Make sure the organic background doesn't extend beyond its container
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: "transparent" }}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#2c2e2e]" />

      {/* Lower layer with green waves and orbs */}
      <canvas ref={canvasLowerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

      {/* Blur layer with reduced opacity */}
      <div className="absolute inset-0 backdrop-blur-[60px]" />

      {/* Upper layer with blobs and noise */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" aria-hidden="true" />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c2e2e]/80 to-transparent" />
    </div>
  )
}
