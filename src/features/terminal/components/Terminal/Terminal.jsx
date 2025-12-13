import React, { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TerminalHeader from './TerminalHeader';
import TerminalBody from './TerminalBody';
import TerminalPrompt from './TerminalPrompt';
import { useTerminal } from '../../../../hooks/useTerminal';
import { executeCommand, getWelcomeMessage, availableCommands } from '../../utils/commandRegistry';
import i18n from '../../../../i18n/config';
import '../../../../styles/terminal.css';

const Terminal = () => {
    const { t } = useTranslation();
    const {
        history,
        commandHistory,
        currentInput,
        setCurrentInput,
        addToHistory,
        clearHistory,
        navigateHistory,
        getSuggestions
    } = useTerminal();

    const hasExecutedInitialCommand = useRef(false);

    const changeLanguage = useCallback((lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('portfolio-language', lang);
    }, []);

    const handleExecuteCommand = useCallback((command) => {
        const context = {
            t,
            executeCommand: handleExecuteCommand,
            clearHistory,
            changeLanguage,
            history: commandHistory
        };

        const output = executeCommand(command, context);

        if (output === 'CLEAR') {
            return;
        }

        addToHistory(command, output);
    }, [t, addToHistory, clearHistory, changeLanguage, commandHistory]);

    const handleAutocompleteSuggestions = useCallback((input) => {
        return getSuggestions(input, availableCommands);
    }, [getSuggestions]);

    // Auto-execute 'help' command on initial load
    useEffect(() => {
        if (!hasExecutedInitialCommand.current) {
            hasExecutedInitialCommand.current = true;
            // Small delay to ensure everything is mounted
            setTimeout(() => {
                handleExecuteCommand('help');
            }, 100);
        }
    }, [handleExecuteCommand]);

    return (
        <div className="terminal">
            <TerminalHeader />
            <TerminalBody
                history={history}
                welcomeMessage={getWelcomeMessage()}
            />
            <TerminalPrompt
                value={currentInput}
                onChange={setCurrentInput}
                onSubmit={handleExecuteCommand}
                onHistoryNavigate={navigateHistory}
                getSuggestions={handleAutocompleteSuggestions}
            />
        </div>
    );
};

export default Terminal;
