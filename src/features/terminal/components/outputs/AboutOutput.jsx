import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const AboutOutput = () => {
    const { t } = useTranslation();

    return (
        <div className="about-output">
            <h3 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
                {t('about.title')}
            </h3>

            <div style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>
                    {t('about.name')}
                </span>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '0.25rem' }} />
                    {t('about.role')}
                </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: '1.6' }}>
                {t('about.description1')}
            </p>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                {t('about.description2')}
            </p>

            <div className="stats">
                <div className="stat">
                    <div className="stat__number">
                        <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.5rem' }} />
                        10+
                    </div>
                    <div className="stat__label">{t('about.stats.projects')}</div>
                </div>
                <div className="stat">
                    <div className="stat__number">
                        <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '0.5rem' }} />
                        3+
                    </div>
                    <div className="stat__label">{t('about.stats.years')}</div>
                </div>
                <div className="stat">
                    <div className="stat__number">20+</div>
                    <div className="stat__label">{t('about.stats.technologies')}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutOutput;
