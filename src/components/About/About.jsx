import React from 'react'
import './About.css'
import profileImage from '../../assets/images/profile/PixelFace.webp'
import { useTranslations } from '../../hooks/useTranslations'

const About = () => {
  const { t } = useTranslations()
  return (
    <section id="acerca" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p className="section-subtitle">{t('aboutSubtitle')}</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={profileImage} 
                alt="Luis Carlos Picado - Estudiante de Desarrollo de Software" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3>{t('aboutRole')}</h3>
            <p>
              {t('aboutDescription1')}
            </p>
            <p>
              {t('aboutDescription2')}
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('learningProjects')}</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">{t('studyingYear')}</span>
              </div>
              <div className="stat">
                <span className="stat-number">18+</span>
                <span className="stat-label">{t('technologiesLearned')}</span>
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href={`${import.meta.env.BASE_URL}documents/`}
                download="CV_Luis_Carlos_Picado.pdf"
                className="btn btn-primary"
              >
                {t('downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
