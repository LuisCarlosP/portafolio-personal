import React, { useEffect, useRef } from 'react';

const TerminalBody = ({ history, welcomeMessage }) => {
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className="terminal-body" ref={bodyRef}>
            {/* Welcome Message */}
            <div className="command-output">
                {welcomeMessage}
            </div>

            {/* Command History */}
            {history.map((entry) => (
                <React.Fragment key={entry.id}>
                    {/* Command Line */}
                    <div className="command-line">
                        <span className="terminal-prompt__prefix">
                            <span className="terminal-prompt__user">luiscarlos</span>
                            <span className="terminal-prompt__at">@</span>
                            <span className="terminal-prompt__host">portfolio</span>
                            <span className="terminal-prompt__path">:~</span>
                            <span className="terminal-prompt__symbol">$</span>
                        </span>
                        <span className="command-line__command">{entry.command}</span>
                    </div>

                    {/* Command Output */}
                    {entry.output && (
                        <div className="command-output">
                            {entry.output}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default TerminalBody;
