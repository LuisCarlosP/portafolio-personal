import React from 'react';
import { useTranslation } from 'react-i18next';
import './ManOutput.css';

const ManOutput = ({ command }) => {
    const { t } = useTranslation();

    const manPages = {
        help: {
            name: 'help',
            synopsis: 'help',
            description: t('man.help.description'),
            examples: ['help']
        },
        about: {
            name: 'about',
            synopsis: 'about',
            description: t('man.about.description'),
            aliases: ['whoami'],
            examples: ['about', 'whoami']
        },
        skills: {
            name: 'skills',
            synopsis: 'skills',
            description: t('man.skills.description'),
            examples: ['skills']
        },
        projects: {
            name: 'projects',
            synopsis: 'projects',
            description: t('man.projects.description'),
            examples: ['projects']
        },
        contact: {
            name: 'contact',
            synopsis: 'contact',
            description: t('man.contact.description'),
            examples: ['contact']
        },
        clear: {
            name: 'clear',
            synopsis: 'clear',
            description: t('man.clear.description'),
            aliases: ['cls'],
            examples: ['clear', 'cls']
        },
        ls: {
            name: 'ls',
            synopsis: 'ls [section]',
            description: t('man.ls.description'),
            examples: ['ls', 'ls projects']
        },
        cat: {
            name: 'cat',
            synopsis: 'cat <project-id>',
            description: t('man.cat.description'),
            examples: ['cat trashia', 'cat chess3d']
        },
        cd: {
            name: 'cd',
            synopsis: 'cd <section>',
            description: t('man.cd.description'),
            examples: ['cd about', 'cd projects', 'cd ~']
        },
        lang: {
            name: 'lang',
            synopsis: 'lang <en|es>',
            description: t('man.lang.description'),
            aliases: ['language'],
            examples: ['lang en', 'lang es']
        },
        history: {
            name: 'history',
            synopsis: 'history',
            description: t('man.history.description'),
            examples: ['history']
        },
        theme: {
            name: 'theme',
            synopsis: 'theme <dark|light|hacker|catppuccin>',
            description: t('man.theme.description'),
            examples: ['theme dark', 'theme hacker', 'theme catppuccin']
        },
        cowsay: {
            name: 'cowsay',
            synopsis: 'cowsay <message>',
            description: t('man.cowsay.description'),
            examples: ['cowsay Hello World!', 'cowsay Moo!']
        },
        social: {
            name: 'social',
            synopsis: 'social',
            description: t('man.social.description'),
            examples: ['social']
        },
        echo: {
            name: 'echo',
            synopsis: 'echo <text>',
            description: t('man.echo.description'),
            examples: ['echo Hello', 'echo Hello World']
        },
        date: {
            name: 'date',
            synopsis: 'date',
            description: t('man.date.description'),
            examples: ['date']
        },
        pwd: {
            name: 'pwd',
            synopsis: 'pwd',
            description: t('man.pwd.description'),
            examples: ['pwd']
        }
    };

    const man = manPages[command?.toLowerCase()];

    if (!man) {
        return (
            <div className="man-output man-output--error">
                <span className="man-output__error">
                    {t('man.notFound').replace('{cmd}', command || '')}
                </span>
                <span className="man-output__hint">{t('man.hint')}</span>
            </div>
        );
    }

    return (
        <div className="man-output">
            <div className="man-output__section">
                <span className="man-output__label">NAME</span>
                <span className="man-output__value">{man.name} - {man.description}</span>
            </div>

            <div className="man-output__section">
                <span className="man-output__label">SYNOPSIS</span>
                <code className="man-output__code">{man.synopsis}</code>
            </div>

            {man.aliases && (
                <div className="man-output__section">
                    <span className="man-output__label">ALIASES</span>
                    <span className="man-output__value">{man.aliases.join(', ')}</span>
                </div>
            )}

            <div className="man-output__section">
                <span className="man-output__label">EXAMPLES</span>
                <div className="man-output__examples">
                    {man.examples.map((ex, i) => (
                        <code key={i} className="man-output__example">$ {ex}</code>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManOutput;
