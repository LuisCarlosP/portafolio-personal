import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import './LinuxVisual.css'

gsap.registerPlugin(ScrollTrigger)

const COMMAND_LINES = [
  '$ uname -srmo',
  '$ sudo systemctl status portfolio.service',
  '$ git push origin main'
]

const LinuxVisual = () => {
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  const screenRef = useRef(null)
  const statusIconRef = useRef(null)
  const ringRef = useRef(null)
  const scanlineRef = useRef(null)
  const cursorRef = useRef(null)

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const commandLineNodes = Array.from(
        containerRef.current?.querySelectorAll('.linux-command-line') || []
      )

      if (prefersReducedMotion) {
        gsap.set(cardRef.current, { autoAlpha: 1, y: 0, scale: 1 })
        gsap.set(cursorRef.current, { autoAlpha: 1 })
        return
      }

      const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
      floatTimeline.to(screenRef.current, {
        y: -6,
        duration: 3,
        ease: 'sine.inOut'
      })

      const ringTimeline = gsap.timeline({ repeat: -1, paused: true })
      ringTimeline.to(ringRef.current, {
        rotation: 360,
        duration: 18,
        ease: 'none',
        transformOrigin: '50% 50%'
      })

      const statusIconTimeline = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
      statusIconTimeline.to(statusIconRef.current, {
        scale: 1.04,
        duration: 2,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%'
      })

      const scanlineTween = gsap.fromTo(
        scanlineRef.current,
        { yPercent: -120, autoAlpha: 0 },
        {
          yPercent: 120,
          autoAlpha: 0.5,
          duration: 2.8,
          repeat: -1,
          paused: true,
          ease: 'none'
        }
      )

      const cursorTween = gsap.to(cursorRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        paused: true,
        ease: 'power1.inOut'
      })

      let commandTimeline = null
      if (commandLineNodes.length > 0) {
        commandTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5, paused: true })
        commandTimeline
          .to(commandLineNodes, {
            opacity: 0.55,
            duration: 0.35,
            stagger: 0.1,
            ease: 'power1.inOut'
          })
          .to(commandLineNodes, {
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out'
          })
      }

      gsap.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 20, scale: 0.92 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              floatTimeline.play(0)
              ringTimeline.play(0)
              statusIconTimeline.play(0)
              scanlineTween.play(0)
              cursorTween.play(0)
              if (commandTimeline) {
                commandTimeline.play(0)
              }
            }
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="linux-visual" ref={containerRef}>
      <div
        className="linux-visual-card"
        ref={cardRef}
        role="img"
        aria-label="Animated Linux terminal visual with penguin emblem"
      >
        <div className="linux-ambient-ring" ref={ringRef} aria-hidden="true"></div>

        <div className="linux-status-pill" aria-hidden="true">
          <span className="linux-status-dot"></span>
          <span className="linux-status-text">linux core online</span>
          <span className="linux-status-icon-wrap" ref={statusIconRef}>
            <FontAwesomeIcon icon={faLinux} className="linux-penguin-icon linux-status-icon" />
          </span>
        </div>

        <div className="linux-terminal-screen" ref={screenRef}>
          <div className="linux-scanline" ref={scanlineRef}></div>

          {COMMAND_LINES.map((line) => (
            <p key={line} className="linux-command-line">{line}</p>
          ))}

          <p className="linux-active-line">
            <span className="linux-terminal-user">dev@kernel</span>
            <span className="linux-terminal-separator">:</span>
            <span className="linux-terminal-path">~/portfolio</span>
            <span className="linux-terminal-prompt">$</span>
            <span className="linux-terminal-command">deploy --prod</span>
            <span className="linux-terminal-cursor" ref={cursorRef}>_</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LinuxVisual
