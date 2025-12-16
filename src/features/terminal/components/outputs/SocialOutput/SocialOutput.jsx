import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../shared.css';
import './SocialOutput.css';

const SocialOutput = memo(({ info }) => {
    const { t } = useTranslation();

    const socials = [
        {
            name: 'GitHub',
            icon: faGithub,
            url: info.github,
            color: 'var(--text-primary)'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            url: info.linkedin,
            color: 'var(--accent-blue)'
        },
        {
            name: 'Email',
            icon: faEnvelope,
            url: `mailto:${info.email}`,
            color: 'var(--accent-yellow)'
        },
        {
            name: 'Portfolio',
            icon: faGlobe,
            url: 'https://luiscarlosp.github.io/portafolio-personal/#/',
            color: 'var(--accent-green)'
        }
    ];

    return (
        <div className="social-output anim-fade-in">
            <h3 className="social-output__title anim-slide-down">
                {t('contact.social')}
            </h3>
            <div className="social-output__grid">
                {socials.filter(s => s.url).map((social, index) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-output__link anim-slide-right anim-delay-${index + 1}`}
                        style={{ '--social-color': social.color }}
                    >
                        <FontAwesomeIcon icon={social.icon} className="social-output__icon" />
                        <span className="social-output__name">{social.name}</span>
                        <span className="social-output__url">
                            {social.url.replace('mailto:', '').replace('https://', '')}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
});

SocialOutput.displayName = 'SocialOutput';

export default SocialOutput;
