import React, { useState, useEffect } from 'react'
import './Header.css'
import LanguageSelector from './LanguageSelector'
import { useTranslations } from '../hooks/useTranslations'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="logo-text">{t('portfolio')}</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>{t('home')}</a></li>
            <li><a href="#acerca" onClick={() => scrollToSection('acerca')}>{t('about')}</a></li>
            <li><a href="#habilidades" onClick={() => scrollToSection('habilidades')}>{t('skills')}</a></li>
            <li><a href="#proyectos" onClick={() => scrollToSection('proyectos')}>{t('projects')}</a></li>
            <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>{t('contact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSelector />
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
