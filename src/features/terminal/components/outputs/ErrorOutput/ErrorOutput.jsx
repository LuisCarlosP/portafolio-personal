import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './ErrorOutput.css';

const ErrorOutput = ({ message }) => {
    return (
        <div className="error-message">
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '0.5rem' }} />
            {message}
        </div>
    );
};

export default ErrorOutput;
