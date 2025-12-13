import React from 'react';
import { useTranslation } from 'react-i18next';
import './HelpOutput.css';

const HelpOutput = ({ onCommandClick }) => {
    const { t } = useTranslation();

    const commands = [
        { name: 'help', key: 'commands.help' },
        { name: 'about', key: 'commands.about' },
        { name: 'skills', key: 'commands.skills' },
        { name: 'projects', key: 'commands.projects' },
        { name: 'contact', key: 'commands.contact' },
        { name: 'clear', key: 'commands.clear' },
        { name: 'ls', key: 'commands.ls' },
        { name: 'cat [id]', key: 'commands.cat' },
        { name: 'lang [en|es]', key: 'commands.lang' },
        { name: 'history', key: 'commands.history' }
    ];

    return (
        <div className="help-output">
            {commands.map((cmd) => (
                <React.Fragment key={cmd.name}>
                    <button
                        className="clickable-command help-output__command"
                        onClick={() => {
                            const baseCmd = cmd.name.split(' ')[0];
                            if (!cmd.name.includes('[')) {
                                onCommandClick(baseCmd);
                            }
                        }}
                        disabled={cmd.name.includes('[')}
                        style={cmd.name.includes('[') ? { cursor: 'default', textDecoration: 'none' } : {}}
                    >
                        {cmd.name}
                    </button>
                    <span className="help-output__description">{t(cmd.key)}</span>
                </React.Fragment>
            ))}
        </div>
    );
};

export default HelpOutput;
