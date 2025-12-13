import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsOutput.css';

const SkillsOutput = ({ categories }) => {
    const { t } = useTranslation();

    const renderProgressBar = (level) => {
        const filled = Math.round(level / 10);
        const empty = 10 - filled;
        return (
            <>
                <span className="progress-bar__filled">{'█'.repeat(filled)}</span>
                <span className="progress-bar__empty">{'░'.repeat(empty)}</span>
            </>
        );
    };

    return (
        <div className="skills-output">
            <h3 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                {t('skills.title')}
            </h3>

            {categories.map((category) => (
                <div key={category.id} style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>
                        {t(category.title)}
                    </h4>
                    {category.skills.map((skill) => (
                        <div key={skill.name} className="progress-bar">
                            <span className="progress-bar__label">{skill.name}</span>
                            <span className="progress-bar__track">
                                {renderProgressBar(skill.level)}
                            </span>
                            <span className="progress-bar__value">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SkillsOutput;
