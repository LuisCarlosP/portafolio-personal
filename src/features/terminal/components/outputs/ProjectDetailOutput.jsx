import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faFolder } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailOutput = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="project-detail">
            <h3 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                <FontAwesomeIcon icon={faFolder} style={{ marginRight: '0.5rem' }} />
                {project.name}
            </h3>

            {project.featured && (
                <span className="project-card__badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                    {t('projects.featured')}
                </span>
            )}

            <pre style={{
                whiteSpace: 'pre-wrap',
                color: 'var(--text-secondary)',
                fontFamily: 'inherit',
                margin: '1rem 0',
                lineHeight: '1.6'
            }}>
                {t(project.details)}
            </pre>

            <div className="project-card__tech" style={{ marginBottom: '1rem' }}>
                {project.technologies.map((tech) => (
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
    );
};

export default ProjectDetailOutput;
