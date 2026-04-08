import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_OPTIONS = {
  sectionStart: 'top 82%',
  sectionOnce: true,
  sectionYOffset: 28,
  headingStart: 'top 86%',
  groupStart: 'top 88%',
  parallaxDistance: 8
}

const normalizeProgressValue = (value) => {
  if (!value) {
    return null
  }

  const trimmedValue = String(value).trim()
  return trimmedValue.endsWith('%') ? trimmedValue : `${trimmedValue}%`
}

const getStaggerItems = (container, itemSelector) => {
  if (!container) {
    return []
  }

  return Array.from(container.querySelectorAll(itemSelector)).filter((item) => (
    item instanceof HTMLElement && !item.hasAttribute('data-anim-ignore')
  ))
}

const animateProgressBars = (container, { reducedMotion, baseDelay = 0 } = {}) => {
  const bars = Array.from(
    container?.querySelectorAll('[data-anim-progress]') || []
  ).filter((bar) => bar instanceof HTMLElement)

  if (!bars.length) {
    return
  }

  bars.forEach((bar, index) => {
    const targetWidth = normalizeProgressValue(bar.getAttribute('data-anim-progress'))
    if (!targetWidth) {
      return
    }

    gsap.killTweensOf(bar)

    if (reducedMotion) {
      gsap.set(bar, { width: targetWidth })
      return
    }

    gsap.fromTo(
      bar,
      { width: 0 },
      {
        width: targetWidth,
        duration: 0.85,
        delay: baseDelay + (index * 0.05),
        ease: 'power2.out',
        overwrite: 'auto'
      }
    )
  })
}

const runStaggerReveal = (container, config = {}) => {
  const {
    reducedMotion = false,
    itemSelector = '[data-anim-item]',
    trigger = false,
    once = true,
    start = 'top 88%',
    delay = 0,
    duration = 0.55,
    y = 20,
    stagger = 0.08
  } = config

  const items = getStaggerItems(container, itemSelector)

  if (!items.length) {
    animateProgressBars(container, { reducedMotion })
    return null
  }

  gsap.killTweensOf(items)

  if (reducedMotion) {
    gsap.set(items, { y: 0, clearProps: 'transform,opacity,visibility' })
    animateProgressBars(container, { reducedMotion: true })
    return null
  }

  const animateBars = () => {
    animateProgressBars(container, { reducedMotion: false, baseDelay: delay + 0.1 })
  }

  const toVars = {
    y: 0,
    duration,
    stagger,
    ease: 'power2.out',
    overwrite: 'auto',
    clearProps: 'transform,opacity,visibility'
  }

  if (delay > 0) {
    toVars.delay = delay
  }

  if (trigger) {
    toVars.scrollTrigger = {
      trigger: container,
      start,
      once
    }
    toVars.onStart = animateBars
  }

  const tween = gsap.fromTo(items, { y }, toVars)

  if (!trigger) {
    animateBars()
  }

  return tween
}

export const usePortfolioScrollAnimations = (rootRef, options = {}) => {
  const {
    sectionStart,
    sectionOnce,
    sectionYOffset,
    headingStart,
    groupStart,
    parallaxDistance
  } = { ...DEFAULT_OPTIONS, ...options }

  const replayTweensRef = useRef([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = () => setPrefersReducedMotion(mediaQuery.matches)

    updateReducedMotion()
    mediaQuery.addEventListener('change', updateReducedMotion)

    return () => mediaQuery.removeEventListener('change', updateReducedMotion)
  }, [])

  const replayStagger = useCallback((container, replayOptions = {}) => {
    if (!container) {
      return
    }

    const tween = runStaggerReveal(container, {
      reducedMotion: prefersReducedMotion,
      ...replayOptions
    })

    if (tween) {
      replayTweensRef.current.push(tween)
    }
  }, [prefersReducedMotion])

  useLayoutEffect(() => {
    const root = rootRef?.current
    if (!root) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('[data-anim-section]', root)
      const headings = gsap.utils.toArray('[data-anim-heading]', root)
      const staggerGroups = gsap.utils.toArray('[data-anim-stagger]', root)
      const parallaxTargets = gsap.utils.toArray('[data-anim-parallax]', root)

      if (prefersReducedMotion) {
        gsap.set(sections, { y: 0, clearProps: 'transform,opacity,visibility' })

        headings.forEach((heading) => {
          const headingNodes = Array.from(heading.children)
          if (headingNodes.length) {
            gsap.set(headingNodes, { y: 0, clearProps: 'transform,opacity,visibility' })
          }
        })

        staggerGroups.forEach((group) => runStaggerReveal(group, { reducedMotion: true }))
        return
      }

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: sectionYOffset },
          {
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: section,
              start: sectionStart,
              once: sectionOnce
            }
          }
        )
      })

      headings.forEach((heading) => {
        const headingItems = Array.from(heading.querySelectorAll('[data-anim-heading-item]'))
        const targets = headingItems.length ? headingItems : Array.from(heading.children)

        if (!targets.length) {
          return
        }

        gsap.fromTo(
          targets,
          { y: 18 },
          {
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: heading,
              start: headingStart,
              once: true
            }
          }
        )
      })

      staggerGroups.forEach((group) => {
        runStaggerReveal(group, {
          trigger: true,
          once: group.getAttribute('data-anim-once') !== 'false',
          start: group.getAttribute('data-anim-start') || groupStart
        })
      })

      parallaxTargets.forEach((target) => {
        const customDistance = Number(target.getAttribute('data-anim-parallax'))
        const yPercent = Number.isFinite(customDistance) ? customDistance : parallaxDistance

        gsap.to(target, {
          yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: target.closest('section') || target,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        })
      })

      ScrollTrigger.refresh()
    }, root)

    return () => {
      replayTweensRef.current.forEach((tween) => tween?.kill())
      replayTweensRef.current = []
      ctx.revert()
    }
  }, [
    rootRef,
    prefersReducedMotion,
    sectionStart,
    sectionOnce,
    sectionYOffset,
    headingStart,
    groupStart,
    parallaxDistance
  ])

  return { replayStagger, prefersReducedMotion }
}
