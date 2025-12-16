import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../shared.css';
import './AboutOutput.css';

const AboutOutput = memo(() => {
    const { t } = useTranslation();

    return (
        <div className="about-output anim-fade-in">
            <h3 className="about-output__title anim-slide-down">
                <FontAwesomeIcon icon={faUser} className="about-output__icon" />
                {t('about.title')}
            </h3>

            <div className="about-output__header anim-slide-right anim-delay-1">
                <span className="about-output__name">
                    {t('about.name')}
                </span>
                <span className="about-output__role">
                    <FontAwesomeIcon icon={faBriefcase} className="about-output__icon-small" />
                    {t('about.role')}
                </span>
            </div>

            <p className="about-output__description anim-slide-right anim-delay-2">
                {t('about.description1')}
            </p>

            <p className="about-output__description anim-slide-right anim-delay-3">
                {t('about.description2')}
            </p>

            <div className="about-output__stats anim-slide-up anim-delay-4">
                <div className="about-output__stat">
                    <div className="about-output__stat-number">
                        <FontAwesomeIcon icon={faCode} className="about-output__icon-small" />
                        10+
                    </div>
                    <div className="about-output__stat-label">{t('about.stats.projects')}</div>
                </div>
                <div className="about-output__stat">
                    <div className="about-output__stat-number">
                        <FontAwesomeIcon icon={faGraduationCap} className="about-output__icon-small" />
                        3+
                    </div>
                    <div className="about-output__stat-label">{t('about.stats.years')}</div>
                </div>
                <div className="about-output__stat">
                    <div className="about-output__stat-number">20+</div>
                    <div className="about-output__stat-label">{t('about.stats.technologies')}</div>
                </div>
            </div>
        </div>
    );
});

AboutOutput.displayName = 'AboutOutput';

export default AboutOutput;
