import React, { useState, useEffect } from 'react'
import './Hero.css'
import Background3D from '../Background3D/Background3D'
import { useTranslations } from '../../hooks/useTranslations'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const { t, language } = useTranslations()

  const getTexts = () => {
    if (language === 'es') {
      return ['Estudiante de Programación', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer']
    }
    return ['Programming Student', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer']
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
      <Background3D />
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-code badge-icon"></i>
              <span className="badge-text">{t('heroTitle')}</span>
            </div>
            <h1 className="hero-title">
              <span className="highlight-name">Luis Carlos Picado Rojas</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="subtitle-label">{language === 'es' ? 'Soy ' : 'I am '}</span>
              <span className="typing-text">{currentText}</span>
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
                <span className="btn-text">{t('viewProjects')}</span>
                <i className="fas fa-arrow-right btn-icon"></i>
              </button>
              <a
                href={`${import.meta.env.BASE_URL}documents/CV_Luis_Carlos_Picado_Rojas.pdf`}
                download="CV_Luis_Carlos_Picado.pdf"
                className="btn btn-secondary"
              >
                <i className="fas fa-download btn-icon"></i>
                <span className="btn-text">{t('downloadCV')}</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-content">
                  <i className="fas fa-laptop-code card-icon"></i>
                  <span className="card-text">Full Stack</span>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <i className="fas fa-paint-brush card-icon"></i>
                  <span className="card-text">Frontend</span>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <i className="fas fa-server card-icon"></i>
                  <span className="card-text">Backend</span>
                </div>
              </div>
              <div className="floating-card card-4">
                <div className="card-content">
                  <i className="fas fa-rocket card-icon"></i>
                  <span className="card-text">Innovation</span>
                </div>
              </div>
              <div className="central-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
