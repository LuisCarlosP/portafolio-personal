import React from 'react'
import './About.css'
import LinuxVisual from './LinuxVisual'
import { useTranslations } from '../../../../hooks/useTranslations'

const About = () => {
  const { t } = useTranslations()
  return (
    <section id="acerca" className="about">
      <div className="container">
        <div className="section-header" data-anim-heading>
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p className="section-subtitle">{t('aboutSubtitle')}</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <LinuxVisual />
          </div>

          <div className="about-text" data-anim-section>
            <h3>{t('aboutRole')}</h3>
            <p>
              {t('aboutDescription1')}
            </p>
            <p>
              {t('aboutDescription2')}
            </p>

            <div className="stats" data-anim-stagger>
              <div className="stat" data-anim-item>
                <span className="stat-number">10+</span>
                <span className="stat-label">{t('learningProjects')}</span>
              </div>
              <div className="stat" data-anim-item>
                <span className="stat-number">3+</span>
                <span className="stat-label">{t('studyingYear')}</span>
              </div>
              <div className="stat" data-anim-item>
                <span className="stat-number">20+</span>
                <span className="stat-label">{t('technologiesLearned')}</span>
              </div>
            </div>

            <div className="about-actions" data-anim-stagger data-anim-start="top 92%">
              <a
                href={`${import.meta.env.BASE_URL}documents/CV_Luis_Carlos_Picado_Rojas.pdf`}
                download="CV_Luis_Carlos_Picado.pdf"
                className="btn btn-primary"
                data-anim-item
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
