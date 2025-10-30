import React from 'react'
import './Footer.css'
import { useTranslations } from '../../hooks/useTranslations'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslations()

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
              <li><a href="#inicio">{t('home')}</a></li>
              <li><a href="#acerca">{t('about')}</a></li>
              <li><a href="#habilidades">{t('skills')}</a></li>
              <li><a href="#proyectos">{t('projects')}</a></li>
              <li><a href="#contacto">{t('contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('techStack')}</h4>
            <ul className="footer-links">
              <li translate="no">Java & Spring Boot</li>
              <li translate="no">React & Angular</li>
              <li translate="no">TypeScript</li>
              <li translate="no">MySQL & MariaDB</li>
              <li translate="no">Git & GitHub</li>
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
          
          <button className="scroll-to-top" onClick={scrollToTop} aria-label={t('backToTop')}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
