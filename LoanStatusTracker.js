import React, { useState } from 'react';

const LoanStatusTracker = () => {
    const [status, setStatus] = useState('Submitted');

    const getStatusColor = () => {
        switch (status) {
            case 'Submitted': return 'orange';
            case 'Under Review': return 'blue';
            case 'Approved': return 'green';
            case 'Rejected': return 'red';
            default: return 'gray';
        }
    };

    return (
        <div>
            <h2>Loan Status</h2>
            <p style={{ color: getStatusColor() }}>Current Status: {status}</p>
        </div>
    );
};

export default LoanStatusTracker;
