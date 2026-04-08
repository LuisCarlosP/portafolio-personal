import React, { useRef } from 'react'
import Header from '../features/portfolio/components/Header/Header'
import Hero from '../features/portfolio/components/Hero/Hero'
import About from '../features/portfolio/components/About/About'
import Skills from '../features/portfolio/components/Skills/Skills'
import Projects from '../features/portfolio/components/Projects/Projects'
import Contact from '../features/portfolio/components/Contact/Contact'
import Footer from '../features/portfolio/components/Footer/Footer'
import { usePortfolioScrollAnimations } from '../hooks/usePortfolioScrollAnimations'

const PortfolioPage = () => {
    const pageRef = useRef(null)
    const { replayStagger, prefersReducedMotion } = usePortfolioScrollAnimations(pageRef)

    return (
        <div className="portfolio-page" ref={pageRef}>
            <Header />
            <Hero />
            <About />
            <Skills
                replayStagger={replayStagger}
                prefersReducedMotion={prefersReducedMotion}
            />
            <Projects
                replayStagger={replayStagger}
                prefersReducedMotion={prefersReducedMotion}
            />
            <Contact />
            <Footer />
        </div>
    )
}

export default PortfolioPage
