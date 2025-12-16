import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import '../shared.css';
import './ProjectsOutput.css';

const ProjectsOutput = memo(({ projects, onCommandClick }) => {
    const { t } = useTranslation();

    return (
        <div className="projects-output anim-fade-in">
            <h3 className="projects-output__title anim-slide-down">
                {t('projects.title')}
            </h3>

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`project-card anim-slide-right anim-delay-${Math.min(index + 1, 10)}`}
                >
                    <div className="project-card__header">
                        <button
                            className="clickable-command project-card__name"
                            onClick={() => onCommandClick(`cat ${project.id}`)}
                        >
                            {project.name}
                        </button>
                        {project.featured && (
                            <span className="project-card__badge">
                                {t('projects.featured')}
                            </span>
                        )}
                    </div>
                    <p className="project-card__description">
                        {t(project.description)}
                    </p>
                    <div className="project-card__tech">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="project-card__tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="project-card__links">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            {t('projects.viewDemo')}
                        </a>
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                        >
                            <FontAwesomeIcon icon={faCode} />
                            {t('projects.viewCode')}
                        </a>
                    </div>
                </div>
            ))}

            <p className="projects-output__hint anim-fade-in anim-delay-5">
                {t('projects.usecat')}
            </p>
        </div>
    );
});

ProjectsOutput.displayName = 'ProjectsOutput';

export default ProjectsOutput;
