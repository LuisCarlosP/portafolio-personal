import React, { useState, useRef } from 'react'
import './Contact.css'
import { useTranslations } from '../../../../hooks/useTranslations'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t, language } = useTranslations()
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

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
      link: 'https://www.linkedin.com/in/luiscarlosp/'
    }
  ]

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Configuración de EmailJS desde variables de entorno
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setMessage(t('messageSent') || 'Message sent successfully!')
        setIsLoading(false)
        form.current.reset()
      })
      .catch(() => {
        setMessage(t('messageError') || 'Error sending message. Please try again.')
        setIsLoading(false)
      })
  }

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

          <div className="contact-form-section">
            <div className="contact-form-container">
              <h3>{t('sendMessage') || 'Send me a message'}</h3>
              <p className="form-description">
                {t('sendMessageDescription') || 'Have a project in mind or want to collaborate? Send me a message and I\'ll get back to you as soon as possible.'}
              </p>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="from_name"
                    placeholder={t('yourName') || 'Your Name'}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="from_email"
                    placeholder={t('yourEmail') || 'Your Email'}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('subject') || 'Subject'}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t('yourMessage') || 'Your Message'}
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary form-submit"
                >
                  {isLoading ? (t('sending') || 'Sending...') : (t('sendMessage') || 'Send Message')}
                </button>
                <div className="form-message-container">
                  {message && (
                    <div className={`form-message ${message.includes('Error') ? 'error' : 'success'}`}>
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
