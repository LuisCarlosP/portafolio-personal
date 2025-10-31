import React, { useRef, useEffect } from 'react'
import './Background3D.css'

const Background3D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let resizeTimer
    let shouldAnimate = true
    
    const handleVisibilityChange = () => {
      shouldAnimate = !document.hidden
      if (shouldAnimate && !animationFrameId) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    const resizeCanvas = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const dpr = window.devicePixelRatio || 1
        const displayWidth = window.innerWidth
        const displayHeight = window.innerHeight
        
        canvas.width = Math.floor(displayWidth * dpr)
        canvas.height = Math.floor(displayHeight * dpr)
        canvas.style.width = `${displayWidth}px`
        canvas.style.height = `${displayHeight}px`
        
        ctx.scale(dpr, dpr)
        columns = Math.ceil(displayWidth / fontSize)
        drops.length = columns
        for (let i = 0; i < columns; i++) {
          if (drops[i] === undefined) drops[i] = Math.random() * -100
        }
      }, 150)
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]();:/\\|@#$%&*+-='.split('')
    const fontSize = 14
    let columns = Math.ceil(canvas.width / fontSize)
    const drops = new Array(columns).fill(0).map(() => Math.random() * -100)
    
    // Pre-create gradients for reuse
    const createColumnGradient = (y) => {
      const gradient = ctx.createLinearGradient(0, y - fontSize * 10, 0, y)
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)')
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.5)')
      gradient.addColorStop(1, 'rgba(16, 185, 129, 1)')
      return gradient
    }

    const draw = () => {
      if (!shouldAnimate) return
      
      ctx.fillStyle = 'rgba(10, 15, 13, 0.05)'
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))
      
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * fontSize
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        // Create gradient only when character is near top of screen
        if (y < fontSize * 10) {
          ctx.fillStyle = createColumnGradient(y)
        }
        
        ctx.fillText(char, i * fontSize, y)
        
        if (y > canvas.height / (window.devicePixelRatio || 1) && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
      
      animationFrameId = requestAnimationFrame(draw)
    }

    // Initial setup
    resizeCanvas()
    draw()

    // Event listeners
    window.addEventListener('resize', resizeCanvas, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="background-3d">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="background-overlay"></div>
    </div>
  )
}

export default Background3D
