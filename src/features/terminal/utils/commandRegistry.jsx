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

export const getWelcomeMessage = () => {
    return <WelcomeMessage />;
};

export const executeCommand = (rawCommand, context) => {
    const { t, executeCommand: exec, clearHistory, changeLanguage } = context;
    const trimmed = rawCommand.trim().toLowerCase();
    const [cmd, ...args] = trimmed.split(/\s+/);

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
            if (args.join(' ') === 'hire-me' || args.join('-') === 'hire-me') {
                return <SuccessOutput message={t('errors.sudoHireMe')} />;
            }
            return <ErrorOutput message={t('errors.permissionDenied')} />;

        case 'echo':
            return <span>{args.join(' ')}</span>;

        case 'date':
            return <span>{new Date().toLocaleString()}</span>;

        case 'pwd':
            return <span className="text-purple">~/portfolio</span>;

        case 'cd':
            const section = args[0]?.toLowerCase();
            if (!section || ['about', 'skills', 'projects', 'contact', '~', '..'].includes(section)) {
                return <SuccessOutput message={`Changed directory to ${section || '~'}`} />;
            }
            return <ErrorOutput message={`Directory not found: ${args[0]}`} />;

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
    'cd'
];
