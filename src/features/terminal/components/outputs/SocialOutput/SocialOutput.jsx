import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './SocialOutput.css';

const SocialOutput = ({ info }) => {
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
        <div className="social-output">
            <h3 className="social-output__title">
                {t('contact.social')}
            </h3>
            <div className="social-output__grid">
                {socials.filter(s => s.url).map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-output__link"
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
};

export default SocialOutput;
