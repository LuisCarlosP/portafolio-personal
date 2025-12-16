import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsOutput.css';

const SkillsOutput = memo(({ categories }) => {
    const { t } = useTranslation();

    const createBar = (level) => {
        const filled = Math.round(level / 10);
        const empty = 10 - filled;
        return `${'█'.repeat(filled)}${'░'.repeat(empty)}`;
    };

    return (
        <div className="skills-terminal">
            <div className="skills-terminal__title">
                {t('skills.title')}
            </div>

            {categories.map((category) => (
                <div key={category.id} className="skills-terminal__category">
                    <div className="skills-terminal__category-title">
                        {t(category.title)}
                    </div>
                    <div className="skills-terminal__list">
                        {category.skills.map((skill) => (
                            <div key={skill.name} className="skills-terminal__item">
                                <span className="skills-terminal__name">{skill.name}</span>
                                <span className="skills-terminal__bar">
                                    <span className="skills-terminal__bar-filled">{createBar(skill.level).slice(0, Math.round(skill.level / 10))}</span>
                                    <span className="skills-terminal__bar-empty">{createBar(skill.level).slice(Math.round(skill.level / 10))}</span>
                                </span>
                                <span className="skills-terminal__percent">{skill.level}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
});

SkillsOutput.displayName = 'SkillsOutput';

export default SkillsOutput;
