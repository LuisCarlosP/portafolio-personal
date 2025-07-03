import React, { useState, useEffect } from 'react'
import './Hero.css'
import devActivityImage from '../assets/images/profile/Developer-activity-bro.webp'
import { useTranslations } from '../hooks/useTranslations'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const { t, language } = useTranslations()
  
  const getTexts = () => {
    if (language === 'es') {
      return ['Estudiante de Programación', 'Java Developer', 'React Developer', 'Desarrollador Junior']
    }
    return ['Programming Student', 'Java Developer', 'React Developer', 'Junior Developer']
  }
  
  const texts = getTexts()

  useEffect(() => {
    setCurrentText('')
    setCurrentIndex(0)
    setIsDeleting(false)
  }, [language])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  return (
    <section id="inicio" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('heroTitle')} <span className="highlight">Luis Carlos Picado</span>
            </h1>
            <h2 className="hero-subtitle">
              {language === 'es' ? 'Soy ' : 'I am '}<span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              {t('heroDescription')}
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('viewProjects')}
              </button>
              <a 
                href="/documents/CVLuisCarlosPicadoEnglish.pdf" 
                download="CV_Luis_Carlos_Picado.pdf"
                className="btn btn-secondary"
              >
                {t('downloadCV')}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={devActivityImage} 
                alt="Developer Activity - Luis Carlos Picado" 
                className="hero-profile-image"
              />
              <div className="floating-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
