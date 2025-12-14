import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
    const [isHidden, setIsHidden] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setIsHidden(true);
        }, 100);

        const removeTimer = setTimeout(() => {
            setIsRemoved(true);
            onLoadComplete?.();
        }, 600);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [onLoadComplete]);

    if (isRemoved) return null;

    return (
        <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
            <div className="loading-container">
                <div className="loading-terminal">
                    <div className="loading-header">
                        <div className="loading-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="loading-title">terminal</span>
                    </div>
                    <div className="loading-body">
                        <div className="loading-line">
                            <span className="prompt-user">guest</span>
                            <span className="prompt-at">@</span>
                            <span className="prompt-host">portfolio</span>
                            <span className="prompt-colon">:</span>
                            <span className="prompt-path">~</span>
                            <span className="prompt-symbol">$</span>
                            <span className="loading-text">./loading</span>
                            <span className="cursor"></span>
                        </div>
                        <div className="loading-progress">
                            <div className="progress-bar"></div>
                        </div>
                        <div className="loading-status">
                            Initializing portfolio<span className="dots"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
