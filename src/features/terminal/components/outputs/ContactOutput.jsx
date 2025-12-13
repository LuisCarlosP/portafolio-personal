import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactOutput = ({ info }) => {
    const { t } = useTranslation();

    return (
        <div className="contact-output">
            <h3 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                {t('contact.title')}
            </h3>

            <div className="contact-output__item">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
                    {t('contact.email')}:
                </span>
                <a href={`mailto:${info.email}`} className="contact-output__value" style={{ color: 'var(--accent-cyan)' }}>
                    {info.email}
                </a>
            </div>

            <div className="contact-output__item">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem' }} />
                    {t('contact.phone')}:
                </span>
                <a href={`tel:${info.phone}`} className="contact-output__value" style={{ color: 'var(--accent-cyan)' }}>
                    {info.phone}
                </a>
            </div>

            <div className="contact-output__item">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '0.5rem' }} />
                    {t('contact.location')}:
                </span>
                <span className="contact-output__value">{info.location}</span>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>
                    <FontAwesomeIcon icon={faLink} style={{ marginRight: '0.5rem' }} />
                    {t('contact.social')}
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a
                        href={info.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                    </a>
                    <a
                        href={info.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </a>
                </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                {t('contact.cta')}
            </p>
        </div>
    );
};

export default ContactOutput;
