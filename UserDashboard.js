import React from 'react';
import LoanApplicationForm from './LoanApplicationForm';
import LoanStatusTracker from './LoanStatusTracker';

const UserDashboard = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <LoanApplicationForm />
            <LoanStatusTracker />
        </div>
    );
};

export default UserDashboard;
