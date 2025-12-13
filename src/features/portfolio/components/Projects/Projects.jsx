import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Projects.css'
import { useTranslations } from '../../../../hooks/useTranslations'
import Modal from '../Modal/Modal'
import frontendProyecto3 from '../../../../assets/images/projects/FrontendProyecto3.webp'
import crudProyecto3 from '../../../../assets/images/projects/CrudProyecto3.webp'
import simpleGraphQL from '../../../../assets/images/projects/SimpleGraphQL.webp'
import trashIA from '../../../../assets/images/projects/TrashIA.webp'
import chess3D from '../../../../assets/images/projects/chess3D.webp'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [modalState, setModalState] = useState({
    isOpen: false,
    url: '',
    title: '',
    type: '', // 'demo' or 'code'
    codeDescription: ''
  })
  const { t, language } = useTranslations()

  const projects = [
    {
      id: 1,
      title: "Frontend Proyecto 3",
      description: t('frontendProject'),
      image: frontendProyecto3,
      technologies: ["Angular", "TypeScript", "CSS3", "HTML5"],
      category: "frontend",
      demoUrl: "https://www.youtube.com/watch?v=whnM4r6fZGU",
      codeUrl: "https://github.com/LuisCarlosP/FrontEndProyecto3",
      codeDescriptionKey: "frontendProjectCodeDescription",
      featured: false
    },
    {
      id: 2,
      title: "CRUD Proyecto 3",
      description: t('crudProject'),
      image: crudProyecto3,
      technologies: ["Java", "Spring Boot", "JWT", "CORS", "Gradle"],
      category: "backend",
      demoUrl: "https://www.youtube.com/watch?v=whnM4r6fZGU",
      codeUrl: "https://github.com/LuisCarlosP/CRUDProyecto3",
      codeDescriptionKey: "crudProjectCodeDescription",
      featured: false
    },
    {
      id: 3,
      title: "TrashIA",
      description: t('trashIAProject'),
      image: trashIA,
      technologies: ["React", "Python", "FastAPI", "TensorFlow"],
      category: "fullstack",
      demoUrl: "https://luiscarlosp.github.io/TrashIAFrontend/",
      codeUrl: "https://github.com/LuisCarlosP/TrashIA",
      codeDescriptionKey: "trashIACodeDescription",
      featured: true
    },
    {
      id: 4,
      title: "Simple GraphQL API",
      description: t('graphqlProject'),
      image: simpleGraphQL,
      technologies: ["Java", "Spring Boot", "GraphQL", "Maven"],
      category: "backend",
      demoUrl: "https://github.com/LuisCarlosP/SimpleGraphQL",
      codeUrl: "https://github.com/LuisCarlosP/SimpleGraphQL",
      codeDescriptionKey: "graphqlProjectCodeDescription",
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
      codeDescriptionKey: "chess3DCodeDescription",
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

  const openModal = (url, title, type, codeDescription = '') => {
    setModalState({
      isOpen: true,
      url,
      title,
      type,
      codeDescription
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      url: '',
      title: '',
      type: '',
      codeDescription: ''
    })
  }

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

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          className="projects-swiper"
        >
          {filteredProjects.map(project => (
            <SwiperSlide key={project.id}>
              <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && <span className="featured-badge">{t('featured')}</span>}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag" translate="no">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <button
                      className="btn btn-small btn-primary"
                      onClick={() => openModal(project.demoUrl, `${project.title} - ${t('liveDemo')}`, 'demo')}
                    >
                      {t('liveDemo')}
                    </button>
                    <button
                      className="btn btn-small btn-outline"
                      onClick={() => openModal(project.codeUrl, `${project.title} - ${t('viewDescription')}`, 'code', t(project.codeDescriptionKey))}
                    >
                      {t('viewDescription')}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        url={modalState.url}
        type={modalState.type}
        codeDescription={modalState.codeDescription}
      />
    </section>
  )
}

export default Projects
