import React from 'react';
import { useTranslation } from 'react-i18next';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
    const { t } = useTranslation();

    return (
        <div className="welcome-message">
            <pre className="ascii-art">
                {`
  _         _        ____            _           
 | |_   _ _(_)___   / ___|__ _ _ __ | | ___  ___ 
 | | | | | | / __| | |   / _\` | '__|| |/ _ \\/ __|
 | | |_| | | \\__ \\ | |__| (_| | |   | | (_) \\__ \\
 |_|\\__,_|_|_|___/  \\____\\__,_|_|   |_|\\___/|___/
                                                  
`}
            </pre>
            <div style={{ marginTop: '1rem' }}>
                <span className="text-green">{t('welcome.title')}</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <span className="text-secondary">{t('welcome.subtitle')}</span>
            </div>
            <div style={{ marginTop: '0.25rem' }}>
                <span className="text-muted">{t('welcome.hint')}</span>
            </div>
        </div>
    );
};

export default WelcomeMessage;
