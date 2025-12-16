import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import '../shared.css';
import './SkillsOutput.css';

const SkillsOutput = memo(({ categories }) => {
    const { t } = useTranslation();

    const createBar = (level) => {
        const filled = Math.round(level / 10);
        const empty = 10 - filled;
        return { filled: '█'.repeat(filled), empty: '░'.repeat(empty) };
    };

    return (
        <div className="skills-terminal anim-fade-in">
            <div className="skills-terminal__title anim-slide-down">
                {t('skills.title')}
            </div>

            {categories.map((category, categoryIndex) => (
                <div
                    key={category.id}
                    className={`skills-terminal__category anim-slide-down anim-section-${categoryIndex + 1}`}
                >
                    <div className="skills-terminal__category-title">
                        {t(category.title)}
                    </div>
                    <div className="skills-terminal__list">
                        {category.skills.map((skill, skillIndex) => {
                            const bar = createBar(skill.level);
                            return (
                                <div
                                    key={skill.name}
                                    className={`skills-terminal__item anim-slide-right anim-delay-${Math.min(skillIndex + 1, 10)}`}
                                >
                                    <span className="skills-terminal__name">{skill.name}</span>
                                    <span className="skills-terminal__bar">
                                        <span className="skills-terminal__bar-filled">{bar.filled}</span>
                                        <span className="skills-terminal__bar-empty">{bar.empty}</span>
                                    </span>
                                    <span className="skills-terminal__percent">{skill.level}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
});

SkillsOutput.displayName = 'SkillsOutput';

export default SkillsOutput;
