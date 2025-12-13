import { useState, useCallback, useRef } from 'react';

export function useTerminal() {
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentInput, setCurrentInput] = useState('');
    const idCounter = useRef(0);

    const addToHistory = useCallback((command, output) => {
        const entry = {
            id: `cmd-${idCounter.current++}`,
            command,
            output,
            timestamp: new Date()
        };
        setHistory(prev => [...prev, entry]);

        if (command.trim()) {
            setCommandHistory(prev => [...prev, command]);
        }
        setHistoryIndex(-1);
    }, []);

    const clearHistory = useCallback(() => {
        setHistory([]);
    }, []);

    const navigateHistory = useCallback((direction) => {
        if (commandHistory.length === 0) return currentInput;

        let newIndex;
        if (direction === 'up') {
            newIndex = historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1);
        } else {
            newIndex = historyIndex === -1
                ? -1
                : Math.min(commandHistory.length - 1, historyIndex + 1);

            if (historyIndex === commandHistory.length - 1) {
                setHistoryIndex(-1);
                return '';
            }
        }

        setHistoryIndex(newIndex);
        return commandHistory[newIndex] || '';
    }, [commandHistory, historyIndex, currentInput]);

    const getSuggestions = useCallback((input, availableCommands) => {
        if (!input.trim()) return [];
        const lowerInput = input.toLowerCase();
        return availableCommands.filter(cmd =>
            cmd.toLowerCase().startsWith(lowerInput) && cmd.toLowerCase() !== lowerInput
        );
    }, []);

    return {
        history,
        commandHistory,
        currentInput,
        setCurrentInput,
        addToHistory,
        clearHistory,
        navigateHistory,
        getSuggestions
    };
}
