import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionsOutput = ({ onCommandClick }) => {
    const { t } = useTranslation();

    const sections = [
        { name: 'about', color: 'var(--accent-blue)' },
        { name: 'skills', color: 'var(--accent-green)' },
        { name: 'projects', color: 'var(--accent-yellow)' },
        { name: 'contact', color: 'var(--accent-purple)' }
    ];

    return (
        <div className="sections-output">
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                {t('misc.sections')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {sections.map((section) => (
                    <button
                        key={section.name}
                        className="clickable-command"
                        style={{ color: section.color }}
                        onClick={() => onCommandClick(section.name)}
                    >
                        {section.name}/
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SectionsOutput;
