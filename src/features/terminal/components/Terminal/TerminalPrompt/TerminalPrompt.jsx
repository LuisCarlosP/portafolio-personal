import React, { useRef, useEffect, useState } from 'react';
import { availableCommands } from '../../../utils/commandRegistry';
import './TerminalPrompt.css';

const TerminalPrompt = ({
    value,
    onChange,
    onSubmit,
    onHistoryNavigate,
    getSuggestions
}) => {
    const inputRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        inputRef.current?.focus();

        const scrollToInput = () => {
            inputRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        };

        scrollToInput();
    }, []);

    useEffect(() => {
        const newSuggestions = getSuggestions(value);
        setSuggestions(newSuggestions.slice(0, 5));
    }, [value, getSuggestions]);

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                if (value.trim()) {
                    onSubmit(value);
                    onChange('');
                    setSuggestions([]);
                }
                break;

            case 'ArrowUp':
                e.preventDefault();
                const prevCmd = onHistoryNavigate('up');
                onChange(prevCmd);
                break;

            case 'ArrowDown':
                e.preventDefault();
                const nextCmd = onHistoryNavigate('down');
                onChange(nextCmd);
                break;

            case 'Tab':
                e.preventDefault();
                if (suggestions.length > 0) {
                    onChange(suggestions[0]);
                    setSuggestions([]);
                }
                break;

            case 'Escape':
                onChange('');
                setSuggestions([]);
                break;

            case 'l':
                if (e.ctrlKey) {
                    e.preventDefault();
                    onSubmit('clear');
                }
                break;

            default:
                break;
        }
    };

    const handleSuggestionClick = (suggestion) => {
        onChange(suggestion);
        inputRef.current?.focus();
        setSuggestions([]);
    };

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-prompt" onClick={handleFocus}>
            <span className="terminal-prompt__prefix">
                <span className="terminal-prompt__user">luiscarlos</span>
                <span className="terminal-prompt__at">@</span>
                <span className="terminal-prompt__host">portfolio</span>
                <span className="terminal-prompt__path">:~</span>
                <span className="terminal-prompt__symbol">$</span>
            </span>

            <div className="terminal-prompt__input-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    className="terminal-prompt__input"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a command..."
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                />
            </div>

            {suggestions.length > 0 && (
                <div className="suggestions" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: 'var(--terminal-padding)',
                    right: 'var(--terminal-padding)',
                    marginBottom: '0.5rem'
                }}>
                    {suggestions.map((suggestion) => (
                        <button
                            key={suggestion}
                            className="suggestion-chip"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TerminalPrompt;
