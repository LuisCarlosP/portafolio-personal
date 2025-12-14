import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-terminal">
                <div className="not-found-header">
                    <div className="not-found-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <span className="not-found-title">error</span>
                </div>
                <div className="not-found-body">
                    <div className="error-code">
                        <span className="code-number">404</span>
                    </div>
                    <div className="terminal-output">
                        <div className="output-line">
                            <span className="prompt-symbol">$</span>
                            <span className="command">cd /requested-page</span>
                        </div>
                        <div className="output-line error">
                            <span className="error-text">bash: cd: /requested-page: No such file or directory</span>
                        </div>
                        <div className="output-line">
                            <span className="prompt-symbol">$</span>
                            <span className="command">echo "Page not found"</span>
                        </div>
                        <div className="output-line">
                            <span className="output-text">Page not found</span>
                        </div>
                    </div>
                    <div className="not-found-actions">
                        <Link to="/" className="home-link">
                            <span className="prompt-symbol">$</span>
                            <span className="command">cd /home</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link to="/terminal" className="terminal-link">
                            <span className="prompt-symbol">$</span>
                            <span className="command">open terminal</span>
                            <i className="fas fa-terminal"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
