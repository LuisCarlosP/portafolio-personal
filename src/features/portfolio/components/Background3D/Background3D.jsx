import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Background3D.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Background3D = () => {
  const canvasRef = useRef(null)
  const scrollVelocityRef = useRef(0)

  const prevWidthRef = useRef(window.innerWidth)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let shouldAnimate = true

    const handleVisibilityChange = () => {
      shouldAnimate = !document.hidden
      if (shouldAnimate && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const currentWidth = window.innerWidth

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      if (Math.abs(currentWidth - prevWidthRef.current) > 50 || particles.length === 0) {
        createParticles()
        prevWidthRef.current = currentWidth
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.baseVx = (Math.random() - 0.5) * 0.5
        this.baseVy = (Math.random() - 0.5) * 0.5
        this.vx = this.baseVx
        this.vy = this.baseVy
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        // Apply scroll velocity to particle movement (subtle effect)
        const scrollBoost = scrollVelocityRef.current * 0.15 // Reduced multiplier for smoother feel

        this.vx += (this.baseVx - this.vx) * 0.05
        this.vy += (this.baseVy - this.vy) * 0.05

        this.vx += scrollBoost * 0.1
        this.vy += scrollBoost * 0.5

        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = window.innerWidth
        if (this.x > window.innerWidth) this.x = 0
        if (this.y < 0) this.y = window.innerHeight
        if (this.y > window.innerHeight) this.y = 0
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(166, 227, 161, ${this.opacity})`
        ctx.fill()
      }
    }

    const createParticles = () => {
      const isMobile = window.innerWidth < 768
      const divideFactor = isMobile ? 20000 : 15000
      const maxParticles = isMobile ? 40 : 100

      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / divideFactor), maxParticles)

      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const drawConnections = () => {
      const maxDistance = 150
      const maxDistanceSq = maxDistance * maxDistance // Optimization: avoid sqrt if possible, saving for distance check

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistanceSq) {
            const distance = Math.sqrt(distSq)
            const opacity = (1 - distance / maxDistance) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(166, 227, 161, ${opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!shouldAnimate) return

      // Clear canvas completely (no trails)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Decay velocity automatically
      scrollVelocityRef.current *= 0.92 // Slower decay for more flow
      if (Math.abs(scrollVelocityRef.current) < 0.01) {
        scrollVelocityRef.current = 0
      }

      // Draw connections first (behind particles)
      drawConnections()

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial setup
    resizeCanvas()

    animate()

    // Scroll velocity tracking
    let lastScrollY = window.scrollY
    let lastScrollTime = Date.now()

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDelta = Math.max(currentTime - lastScrollTime, 16) // Minimum 16ms


      const scrollDelta = currentScrollY - lastScrollY

      const newVelocity = scrollDelta / (timeDelta / 16)

      scrollVelocityRef.current = (scrollVelocityRef.current * 0.7) + (newVelocity * 0.3)

      lastScrollY = currentScrollY
      lastScrollTime = currentTime
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', resizeCanvas, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="background-3d">
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="background-overlay"></div>
    </div>
  )
}

export default Background3D
