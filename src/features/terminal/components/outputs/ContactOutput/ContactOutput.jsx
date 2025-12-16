import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../shared.css';
import './ContactOutput.css';

const ContactOutput = memo(({ info }) => {
    const { t } = useTranslation();

    return (
        <div className="contact-output anim-fade-in">
            <h3 className="contact-output__title anim-slide-down">
                {t('contact.title')}
            </h3>

            <div className="contact-output__item anim-slide-right anim-delay-1">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-output__icon" />
                    {t('contact.email')}:
                </span>
                <a href={`mailto:${info.email}`} className="contact-output__link">
                    {info.email}
                </a>
            </div>

            <div className="contact-output__item anim-slide-right anim-delay-2">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faPhone} className="contact-output__icon" />
                    {t('contact.phone')}:
                </span>
                <a href={`tel:${info.phone}`} className="contact-output__link">
                    {info.phone}
                </a>
            </div>

            <div className="contact-output__item anim-slide-right anim-delay-3">
                <span className="contact-output__label">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-output__icon" />
                    {t('contact.location')}:
                </span>
                <span className="contact-output__value">{info.location}</span>
            </div>

            <div className="contact-output__social anim-slide-up anim-delay-4">
                <h4 className="contact-output__social-title">
                    <FontAwesomeIcon icon={faLink} className="contact-output__icon" />
                    {t('contact.social')}
                </h4>
                <div className="contact-output__social-links">
                    <a
                        href={info.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-output__social-link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                    </a>
                    <a
                        href={info.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-output__social-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </a>
                </div>
            </div>

            <p className="contact-output__cta anim-fade-in anim-delay-5">
                {t('contact.cta')}
            </p>
        </div>
    );
});

ContactOutput.displayName = 'ContactOutput';

export default ContactOutput;
