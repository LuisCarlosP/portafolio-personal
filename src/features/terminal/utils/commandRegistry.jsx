import React from 'react';
import { projects, skillCategories, personalInfo } from '../../portfolio/data/portfolioData';
import WelcomeMessage from '../components/outputs/WelcomeMessage';
import HelpOutput from '../components/outputs/HelpOutput';
import AboutOutput from '../components/outputs/AboutOutput';
import SkillsOutput from '../components/outputs/SkillsOutput';
import ProjectsOutput from '../components/outputs/ProjectsOutput';
import ProjectDetailOutput from '../components/outputs/ProjectDetailOutput';
import ContactOutput from '../components/outputs/ContactOutput';
import SectionsOutput from '../components/outputs/SectionsOutput';
import ErrorOutput from '../components/outputs/ErrorOutput';
import SuccessOutput from '../components/outputs/SuccessOutput';
import CowsayOutput from '../components/outputs/CowsayOutput';
import SocialOutput from '../components/outputs/SocialOutput';
import ManOutput from '../components/outputs/ManOutput';
import ThemeOutput from '../components/outputs/ThemeOutput';

export const getWelcomeMessage = () => {
    return <WelcomeMessage />;
};

export const executeCommand = (rawCommand, context) => {
    const { t, executeCommand: exec, clearHistory, changeLanguage } = context;
    const trimmed = rawCommand.trim();
    const lowerTrimmed = trimmed.toLowerCase();
    const [cmd, ...args] = lowerTrimmed.split(/\s+/);
    // Preserve original case for echo and cowsay
    const originalArgs = trimmed.split(/\s+/).slice(1);

    switch (cmd) {
        case 'help':
        case '?':
            return <HelpOutput onCommandClick={exec} />;

        case 'about':
        case 'whoami':
            return <AboutOutput />;

        case 'skills':
            return <SkillsOutput categories={skillCategories} />;

        case 'projects':
        case 'ls':
            if (cmd === 'ls' && args.length === 0) {
                return <SectionsOutput onCommandClick={exec} />;
            }
            return <ProjectsOutput projects={projects} onCommandClick={exec} />;

        case 'cat':
            if (args.length === 0) {
                return <ErrorOutput message={t('errors.projectNotFound').replace('{id}', '')} />;
            }
            const projectId = args[0].toLowerCase();
            const project = projects.find(p => p.id.toLowerCase() === projectId);
            if (!project) {
                return <ErrorOutput message={t('errors.projectNotFound').replace('{id}', args[0])} />;
            }
            return <ProjectDetailOutput project={project} />;

        case 'contact':
            return <ContactOutput info={personalInfo} />;

        case 'clear':
        case 'cls':
            clearHistory();
            return 'CLEAR';

        case 'lang':
        case 'language':
            if (args.length === 0) {
                return <ErrorOutput message={t('errors.invalidLang').replace('{lang}', '')} />;
            }
            const lang = args[0].toLowerCase();
            if (lang !== 'en' && lang !== 'es') {
                return <ErrorOutput message={t('errors.invalidLang').replace('{lang}', args[0])} />;
            }
            changeLanguage(lang);
            return <SuccessOutput message={t('misc.languageChanged')} />;

        case 'history':
            const historyList = context.history.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n');
            return (
                <pre style={{ margin: 0, fontFamily: 'inherit' }}>
                    {historyList || '  (no history)'}
                </pre>
            );

        case 'sudo':
            return <ErrorOutput message={t('errors.permissionDenied')} />;

        case 'echo':
            return <span>{originalArgs.join(' ')}</span>;

        case 'date':
            return <span>{new Date().toLocaleString()}</span>;

        case 'pwd':
            return <span className="text-purple">~/portfolio</span>;

        case 'cd':
            const section = args[0]?.toLowerCase();
            const sectionMap = {
                'about': <AboutOutput />,
                'skills': <SkillsOutput categories={skillCategories} />,
                'projects': <ProjectsOutput projects={projects} onCommandClick={exec} />,
                'contact': <ContactOutput info={personalInfo} />,
                '~': <SectionsOutput onCommandClick={exec} />,
                '..': <SectionsOutput onCommandClick={exec} />
            };
            if (!section) {
                return <SectionsOutput onCommandClick={exec} />;
            }
            if (sectionMap[section]) {
                return sectionMap[section];
            }
            return <ErrorOutput message={t('errors.directoryNotFound').replace('{dir}', args[0])} />;

        case 'man':
            if (args.length === 0) {
                return <ErrorOutput message={t('man.noCommand')} />;
            }
            return <ManOutput command={args[0]} />;

        case 'cowsay':
            return <CowsayOutput message={originalArgs.join(' ')} />;

        case 'theme':
            const validThemes = ['dracula', 'solarized', 'matrix', 'catppuccin'];
            if (args.length === 0) {
                return <ThemeOutput showList={true} onThemeChange={(theme) => {
                    document.documentElement.setAttribute('data-theme', theme);
                    localStorage.setItem('terminal-theme', theme);
                }} />;
            }
            const themeName = args[0].toLowerCase();
            if (!validThemes.includes(themeName)) {
                return <ErrorOutput message={t('errors.invalidTheme').replace('{theme}', args[0])} />;
            }
            return <ThemeOutput theme={themeName} />;

        case 'social':
            return <SocialOutput info={personalInfo} />;

        case '':
            return null;

        default:
            return <ErrorOutput message={t('errors.notFound').replace('{cmd}', cmd)} />;
    }
};

export const availableCommands = [
    'help',
    'about',
    'whoami',
    'skills',
    'projects',
    'contact',
    'clear',
    'ls',
    'cat',
    'lang',
    'history',
    'sudo',
    'echo',
    'date',
    'pwd',
    'cd',
    'man',
    'cowsay',
    'theme',
    'social'
];
