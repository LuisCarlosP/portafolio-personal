import React from 'react'
import Header from '../features/portfolio/components/Header/Header'
import Hero from '../features/portfolio/components/Hero/Hero'
import About from '../features/portfolio/components/About/About'
import Skills from '../features/portfolio/components/Skills/Skills'
import Projects from '../features/portfolio/components/Projects/Projects'
import Contact from '../features/portfolio/components/Contact/Contact'
import Footer from '../features/portfolio/components/Footer/Footer'

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default PortfolioPage
