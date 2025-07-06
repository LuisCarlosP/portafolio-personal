import React, { useState, useEffect } from 'react'
import './Header.css'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { useTranslations } from '../../hooks/useTranslations'
import logoSvg from '../../assets/logo/luis-picado-logo.svg'
import logoConfig from '../../utils/logoConfig'

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
          <img 
            src={logoSvg} 
            alt={logoConfig.useTranslationForText ? t('portfolio') : logoConfig.customText} 
            className="logo-image"
            style={{ height: `${logoConfig.logoHeight}px` }}
            onClick={() => logoConfig.clickToHome && scrollToSection('inicio')}
          />
          {logoConfig.showText && (
            <span 
              className="logo-text" 
              onClick={() => logoConfig.clickToHome && scrollToSection('inicio')}
            >
              {logoConfig.useTranslationForText ? t('portfolio') : logoConfig.customText}
            </span>
          )}
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
