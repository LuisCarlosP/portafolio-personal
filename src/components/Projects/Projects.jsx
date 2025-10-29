import React, { useState } from 'react'
import './Projects.css'
import { useTranslations } from '../../hooks/useTranslations'
import frontendProyecto3 from '../../assets/images/projects/FrontendProyecto3.webp'
import crudProyecto3 from '../../assets/images/projects/CrudProyecto3.webp'
import simpleGraphQL from '../../assets/images/projects/SimpleGraphQL.webp'
import trashIA from '../../assets/images/projects/TrashIA.webp'
import chess3D from '../../assets/images/projects/chess3D.webp'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const { t, language } = useTranslations()
  
  const projects = [
    {
      id: 1,
      title: "Frontend Proyecto 3 - Angular",
      description: t('frontendProject'),
      image: frontendProyecto3,
      technologies: ["Angular", "TypeScript", "CSS3", "HTML5"],
      category: "frontend",
      demoUrl: "https://www.youtube.com/watch?v=whnM4r6fZGU",
      codeUrl: "https://github.com/LuisCarlosP/FrontEndProyecto3",
      featured: false
    },
    {
      id: 2,
      title: "CRUD Proyecto 3 - Spring Boot",
      description: t('crudProject'),
      image: crudProyecto3,
      technologies: ["Java", "Spring Boot", "JWT", "CORS", "Gradle"],
      category: "backend",
      demoUrl: "https://www.youtube.com/watch?v=whnM4r6fZGU",
      codeUrl: "https://github.com/LuisCarlosP/CRUDProyecto3",
      featured: false
    },
    {
      id: 3,
      title: "TrashIA",
      description: t('trashIAProject'),
      image: trashIA,
      technologies: ["Java", "Spring Boot", "Python", "Gradle", "FastAPI"],
      category: "fullstack",
      demoUrl: "https://youtu.be/w1eLc3p4GKQ",
      codeUrl: "https://github.com/LuisCarlosP/TrashIA",
      featured: true
    },
    {
      id: 4,
      title: "Simple GraphQL API",
      description: t('graphqlProject'),
      image: simpleGraphQL,
      technologies: ["Java", "Spring Boot", "GraphQL", "Maven"],
      category: "backend",
      demoUrl: "#",
      codeUrl: "https://github.com/LuisCarlosP/SimpleGraphQL",
      featured: false
    },
    {
      id: 5,
      title: "Chess 3D",
      description: t('chess3DProject'),
      image: chess3D,
      technologies: ["React", "Three.js", "chess.js"],
      category: "frontend",
      demoUrl: "https://luiscarlosp.github.io/chess-3d/",
      codeUrl: "https://github.com/LuisCarlosP/chess-3d",
      featured: false
    }
  ]

  const getCategories = () => [
    { id: 'all', name: language === 'es' ? 'Todos' : 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const categories = getCategories()

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('projectsTitle')}</h2>
          <p className="section-subtitle">{t('projectsSubtitle')}</p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.demoUrl} 
                      className="btn btn-small btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('liveDemo')}
                    </a>
                    <a 
                      href={project.codeUrl} 
                      className="btn btn-small btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('viewCode')}
                    </a>
                  </div>
                </div>
                {project.featured && <span className="featured-badge">{t('featured')}</span>}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" translate="no">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>{language === 'es' ? '¿Te interesa ver más proyectos?' : 'Interested in seeing more projects?'}</p>
          <a 
            href="https://github.com/LuisCarlosP" 
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'es' ? 'Ver GitHub' : 'View GitHub'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
