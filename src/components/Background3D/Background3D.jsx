import React, { useRef, useEffect } from 'react'
import './Background3D.css'

const Background3D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]();:/\\|@#$%&*+-='.split('')
    
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 15, 13, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        const y = drops[i] * fontSize
        const gradient = ctx.createLinearGradient(0, y - fontSize * 10, 0, y)
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)')
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.5)')
        gradient.addColorStop(1, 'rgba(16, 185, 129, 1)')
        
        ctx.fillStyle = gradient
        ctx.fillText(char, i * fontSize, y)
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
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
