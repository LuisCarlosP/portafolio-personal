import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SuccessOutput = ({ message }) => {
    return (
        <div className="success-message">
            <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '0.5rem' }} />
            {message}
        </div>
    );
};

export default SuccessOutput;
