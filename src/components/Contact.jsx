import React from 'react'
import './Contact.css'
import { useTranslations } from '../hooks/useTranslations'

const Contact = () => {
  const { t, language } = useTranslations()
  
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: t('email'),
      value: 'picadoluiscarlos@gmail.com',
      link: 'mailto:picadoluiscarlos@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: t('phone'),
      value: '+506 8723 3132',
      link: 'tel:+50687233132'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: t('location'),
      value: 'San José, Costa Rica',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Luis Carlos Picado Rojas',
      link: 'https://www.linkedin.com/in/luis-carlos-picado-rojas-6b035227a/'
    }
  ]

  const socialLinks = [
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      link: 'https://github.com/LuisCarlosP'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/luis-carlos-picado-rojas-6b035227a/'
    }
  ]

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contactTitle')}</h2>
          <p className="section-subtitle">{t('contactSubtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-description">
              <h3>{t('contactInfo')}</h3>
              <p>
                {t('contactDescription')}
              </p>
            </div>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="contact-item"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-title">{item.title}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>{t('findMeOn')}</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
