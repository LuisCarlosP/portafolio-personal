import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslations } from '../../../../hooks/useTranslations'
import { useScrollTo } from '../../../../hooks/useScrollTo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslations()
  const scrollTo = useScrollTo()
  const [currentTheme, setCurrentTheme] = useState(
    () => localStorage.getItem('terminal-theme') || 'dracula'
  )

  const themes = [
    { id: 'dracula', name: 'Dracula' },
    { id: 'solarized', name: 'Solarized' },
    { id: 'matrix', name: 'Matrix' },
    { id: 'catppuccin', name: 'Catppuccin' }
  ]

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    scrollTo(id)
  }

  const changeTheme = (themeId) => {
    setCurrentTheme(themeId)
    localStorage.setItem('terminal-theme', themeId)
    if (themeId === 'dracula') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', themeId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Luis Carlos Picado</h3>
            <p>
              {t('footerDescription')}
            </p>
          </div>

          <div className="footer-section">
            <h4>{t('quickLinks')}</h4>
            <ul className="footer-links">
              <li><a href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')}>{t('home')}</a></li>
              <li><a href="#acerca" onClick={(e) => handleLinkClick(e, 'acerca')}>{t('about')}</a></li>
              <li><a href="#habilidades" onClick={(e) => handleLinkClick(e, 'habilidades')}>{t('skills')}</a></li>
              <li><a href="#proyectos" onClick={(e) => handleLinkClick(e, 'proyectos')}>{t('projects')}</a></li>
              <li><a href="#contacto" onClick={(e) => handleLinkClick(e, 'contacto')}>{t('contact')}</a></li>
              <li><Link to="/terminal"><i className="fas fa-terminal"></i> Terminal</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('themes')}</h4>
            <ul className="footer-links theme-list">
              {themes.map((theme) => (
                <li key={theme.id}>
                  <button
                    className={`theme-button ${currentTheme === theme.id ? 'active' : ''}`}
                    onClick={() => changeTheme(theme.id)}
                    translate="no"
                  >
                    {currentTheme === theme.id && <i className="fas fa-check"></i>}
                    {theme.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('contact')}</h4>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> picadoluiscarlos@gmail.com</p>
              <p><i className="fas fa-phone"></i> +506 8723 3132</p>
              <p><i className="fas fa-map-marker-alt"></i> San José, Costa Rica</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/LuisCarlosP" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/luiscarlosp/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Luis Carlos Picado. {t('allRightsReserved')}.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
