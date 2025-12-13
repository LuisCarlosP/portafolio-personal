import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCheck } from '@fortawesome/free-solid-svg-icons';
import './ThemeOutput.css';

const ThemeOutput = ({ theme, showList, onThemeChange }) => {
    const { t } = useTranslation();
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('terminal-theme') || 'dracula';
    });

    const themes = [
        { id: 'dracula', name: 'Dracula', preview: ['#282a36', '#bd93f9', '#50fa7b'] },
        { id: 'solarized', name: 'Solarized', preview: ['#fdf6e3', '#268bd2', '#859900'] },
        { id: 'matrix', name: 'Matrix', preview: ['#0a0a0a', '#00ff00', '#00cc00'] },
        { id: 'catppuccin', name: 'Catppuccin', preview: ['#1e1e2e', '#cba6f7', '#f5c2e7'] }
    ];

    const applyTheme = (themeName) => {
        if (themeName === 'dracula') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', themeName);
        }
        localStorage.setItem('terminal-theme', themeName);
        setCurrentTheme(themeName);
    };

    useEffect(() => {
        if (theme && !showList) {
            applyTheme(theme);
        }
    }, [theme, showList]);

    if (showList) {
        const handleThemeClick = (themeId) => {
            applyTheme(themeId);
            if (onThemeChange) {
                onThemeChange(themeId);
            }
        };

        return (
            <div className="theme-output">
                <h3 className="theme-output__title">
                    <FontAwesomeIcon icon={faPalette} /> {t('theme.available')}
                </h3>
                <div className="theme-output__grid">
                    {themes.map((themeItem) => {
                        const isActive = currentTheme === themeItem.id;
                        return (
                            <button
                                key={themeItem.id}
                                className={`theme-output__option ${isActive ? 'theme-output__option--active' : ''}`}
                                onClick={() => handleThemeClick(themeItem.id)}
                            >
                                <div className="theme-output__preview">
                                    {themeItem.preview.map((color, i) => (
                                        <span key={i} style={{ background: color }} />
                                    ))}
                                </div>
                                <span className="theme-output__name">{themeItem.name}</span>
                                {isActive && <FontAwesomeIcon icon={faCheck} className="theme-output__check" />}
                            </button>
                        );
                    })}
                </div>
                <p className="theme-output__hint">{t('theme.usage')}</p>
            </div>
        );
    }

    const selectedTheme = themes.find(themeItem => themeItem.id === theme);

    return (
        <div className="theme-output theme-output--success">
            <FontAwesomeIcon icon={faPalette} className="theme-output__icon" />
            <span>{t('theme.changed').replace('{theme}', selectedTheme?.name || theme)}</span>
        </div>
    );
};

export default ThemeOutput;

