import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import i18n from '../../../../i18n/config';

const TerminalHeader = () => {
    const navigate = useNavigate();
    const { i18n: i18nInstance } = useTranslation();
    const currentLang = i18nInstance.language;

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('portfolio-language', lang);
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <header className="terminal-header">
            <div className="terminal-header__controls">
                <button
                    className="terminal-header__button terminal-header__button--close"
                    aria-label="Close"
                />
                <button
                    className="terminal-header__button terminal-header__button--minimize"
                    aria-label="Minimize"
                />
                <button
                    className="terminal-header__button terminal-header__button--maximize"
                    aria-label="Maximize"
                />
            </div>

            <div className="terminal-header__title">
                <FontAwesomeIcon icon={faTerminal} className="terminal-header__title-icon" style={{ marginRight: '0.5rem' }} />
                <span>luiscarlos@portfolio: ~</span>
            </div>

            <div className="terminal-header__actions">
                <button
                    className="terminal-header__back-btn"
                    onClick={handleGoBack}
                    aria-label="Go back to portfolio"
                    title="Volver al portfolio"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    className={`terminal-header__lang-btn ${currentLang === 'en' ? 'terminal-header__lang-btn--active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                >
                    EN
                </button>
                <button
                    className={`terminal-header__lang-btn ${currentLang === 'es' ? 'terminal-header__lang-btn--active' : ''}`}
                    onClick={() => handleLanguageChange('es')}
                >
                    ES
                </button>
            </div>
        </header>
    );
};

export default TerminalHeader;
