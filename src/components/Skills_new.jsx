import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85, icon: "fab fa-react" },
        { name: "JavaScript", level: 90, icon: "fab fa-js-square" },
        { name: "HTML5", level: 95, icon: "fab fa-html5" },
        { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
        { name: "Bootstrap", level: 85, icon: "fab fa-bootstrap" },
        { name: "jQuery", level: 80, icon: "fas fa-code" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85, icon: "fab fa-node-js" },
        { name: "Python", level: 80, icon: "fab fa-python" },
        { name: "PHP", level: 75, icon: "fab fa-php" },
        { name: "MySQL", level: 85, icon: "fas fa-database" },
        { name: "PostgreSQL", level: 80, icon: "fas fa-database" },
        { name: "MongoDB", level: 75, icon: "fas fa-leaf" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90, icon: "fab fa-git-alt" },
        { name: "Docker", level: 70, icon: "fab fa-docker" },
        { name: "AWS", level: 65, icon: "fab fa-aws" },
        { name: "Linux", level: 80, icon: "fab fa-linux" },
        { name: "Postman", level: 85, icon: "fas fa-paper-plane" },
        { name: "VS Code", level: 95, icon: "fas fa-code" }
      ]
    }
  ]

  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías y herramientas que domino y uso en mis proyectos</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <i className={skill.icon}></i>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-item">
            <h4>Especialización</h4>
            <p>Desarrollo Full-Stack con React, Node.js y Python</p>
          </div>
          <div className="summary-item">
            <h4>Experiencia</h4>
            <p>2+ años desarrollando aplicaciones web modernas</p>
          </div>
          <div className="summary-item">
            <h4>Metodología</h4>
            <p>Desarrollo ágil, clean code y mejores prácticas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
