import React from 'react'
import Terminal from '../features/terminal/components/Terminal/Terminal'
import useVisualViewport from '../hooks/useVisualViewport'

const TerminalPage = () => {
    useVisualViewport(); // This sets the --app-height CSS variable

    React.useEffect(() => {
        const originalStyle = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            width: document.body.style.width,
            height: document.body.style.height,
            overscrollBehavior: document.body.style.overscrollBehavior,
            touchAction: document.body.style.touchAction
        };

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overscrollBehavior = 'none';
        document.body.style.touchAction = 'none'; // Prevent browser gestures

        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.overscrollBehavior = 'none';
        document.documentElement.style.touchAction = 'none';

        return () => {
            document.body.style.overflow = originalStyle.overflow;
            document.body.style.position = originalStyle.position;
            document.body.style.width = originalStyle.width;
            document.body.style.height = originalStyle.height;
            document.body.style.overscrollBehavior = originalStyle.overscrollBehavior;
            document.body.style.touchAction = originalStyle.touchAction;

            document.documentElement.style.overflow = '';
            document.documentElement.style.overscrollBehavior = '';
            document.documentElement.style.touchAction = '';
        };
    }, []);

    return (
        <div className="terminal-page" style={{
            height: 'var(--app-height, 100vh)',
            width: '100vw',
            background: 'var(--terminal-bg)',
            overflow: 'hidden',
            position: 'fixed',
            inset: 0
        }}>
            <Terminal />
        </div>
    )
}

export default TerminalPage
