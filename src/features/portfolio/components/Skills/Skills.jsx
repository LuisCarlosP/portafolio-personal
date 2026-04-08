import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
import { useTranslations } from '../../../../hooks/useTranslations'

const Skills = ({ replayStagger, prefersReducedMotion }) => {
  const { t, language } = useTranslations()
  const [activeCategory, setActiveCategory] = useState('all')
  const skillsGridRef = useRef(null)
  const hasInitializedReplayRef = useRef(false)

  const skillCategories = [
    {
      title: t('frontend'),
      id: 'frontend',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: "React", level: 80, icon: "fab fa-react" },
        { name: "Angular", level: 75, icon: "fab fa-angular" },
        { name: "JavaScript", level: 85, icon: "fab fa-js-square" },
        { name: "TypeScript", level: 75, icon: "fab fa-js-square" },
        { name: "HTML5", level: 90, icon: "fab fa-html5" },
        { name: "CSS3", level: 85, icon: "fab fa-css3-alt" }
      ]
    },
    {
      title: t('backend'),
      id: 'backend',
      icon: 'fas fa-server',
      skills: [
        { name: "Java", level: 90, icon: "fab fa-java" },
        { name: "C#", level: 70, icon: "fas fa-code" },
        { name: "Python", level: 90, icon: "fab fa-python" },
        { name: "Node.js", level: 70, icon: "fab fa-node-js" },
        { name: "ASP.NET", level: 65, icon: "fab fa-microsoft" },
        { name: "GraphQL", level: 60, icon: "fas fa-project-diagram" }
      ]
    },
    {
      title: t('databasesTools'),
      id: 'tools',
      icon: 'fas fa-tools',
      skills: [
        { name: "MySQL", level: 80, icon: "fas fa-database" },
        { name: "Microsoft SQL", level: 75, icon: "fas fa-database" },
        { name: "MariaDB", level: 75, icon: "fas fa-database" },
        { name: "MongoDB", level: 70, icon: "fas fa-leaf" },
        { name: "Git", level: 85, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 90, icon: "fab fa-github" },
        { name: "BitBucket", level: 80, icon: "fab fa-bitbucket" },
        { name: "Docker", level: 65, icon: "fab fa-docker" }
      ]
    }
  ]

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory)

  useEffect(() => {
    if (hasInitializedReplayRef.current) {
      if (!skillsGridRef.current || typeof replayStagger !== 'function') {
        return undefined
      }

      const frameId = requestAnimationFrame(() => {
        replayStagger(skillsGridRef.current, {
          itemSelector: '.skill-item[data-anim-item]',
          duration: 0.45,
          y: 14,
          stagger: 0.05
        })
      })

      return () => cancelAnimationFrame(frameId)
    }

    hasInitializedReplayRef.current = true
    return undefined
  }, [activeCategory, replayStagger, prefersReducedMotion])

  return (
    <section id="habilidades" className="skills" data-anim-section>
      <div className="container">
        <div className="section-header" data-anim-heading>
          <h2 className="section-title">{t('skillsTitle')}</h2>
          <p className="section-subtitle">{t('skillsSubtitle')}</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="skills-category-buttons" data-anim-stagger data-anim-start="top 90%">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            data-anim-item
          >
            <i className="fas fa-th"></i>
            <span>{language === 'es' ? 'General' : 'All'}</span>
          </button>
          <button
            className={`category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
            data-anim-item
          >
            <i className="fas fa-paint-brush"></i>
            <span>Frontend</span>
          </button>
          <button
            className={`category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
            data-anim-item
          >
            <i className="fas fa-server"></i>
            <span>Backend</span>
          </button>
          <button
            className={`category-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools')}
            data-anim-item
          >
            <i className="fas fa-tools"></i>
            <span>{language === 'es' ? 'Bases de Datos y Herramientas' : 'Databases & Tools'}</span>
          </button>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" data-anim-stagger ref={skillsGridRef}>
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    data-anim-item
                  >
                    <div className="skill-header">
                      <i className={skill.icon}></i>
                      <span className="skill-name" translate="no">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`
                        }}
                        data-anim-progress={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary" data-anim-section>
          <p>{t('skillsSummary')}</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
