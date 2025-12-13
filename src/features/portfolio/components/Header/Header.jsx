import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import LanguageSelector from '../../../../components/LanguageSelector/LanguageSelector'
import { useTranslations } from '../../../../hooks/useTranslations'
import { useScrollTo } from '../../../../hooks/useScrollTo'
import logoSvg from '../../../../assets/logo/luis-picado-logo.svg'
import logoConfig from '../../../../utils/logoConfig'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslations()
  const scrollTo = useScrollTo()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50
          setIsScrolled(prev => prev === scrolled ? prev : scrolled)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollTo(sectionId)
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
            onClick={(e) => {
              if (logoConfig.clickToHome) {
                handleNavClick(e, 'inicio')
              }
            }}
          />
          {logoConfig.showText && (
            <span
              className="logo-text"
              onClick={(e) => {
                if (logoConfig.clickToHome) {
                  handleNavClick(e, 'inicio')
                }
              }}
            >
              {logoConfig.useTranslationForText ? t('portfolio') : logoConfig.customText}
            </span>
          )}
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>{t('home')}</a></li>
            <li><a href="#acerca" onClick={(e) => handleNavClick(e, 'acerca')}>{t('about')}</a></li>
            <li><a href="#habilidades" onClick={(e) => handleNavClick(e, 'habilidades')}>{t('skills')}</a></li>
            <li><a href="#proyectos" onClick={(e) => handleNavClick(e, 'proyectos')}>{t('projects')}</a></li>
            <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>{t('contact')}</a></li>
            <li><Link to="/terminal" className="nav-terminal"><i className="fas fa-terminal"></i> Terminal</Link></li>
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
