import React, { useState } from 'react';

const LoanApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        loanAmount: '',
        loanTerm: '',
        loanType: '',
        documents: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send formData to the backend using fetch or axios
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Loan Application Form</h2>
            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
            <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
            <label>Loan Amount: <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required /></label>
            <label>Loan Term (in months): <input type="number" name="loanTerm" value={formData.loanTerm} onChange={handleChange} required /></label>
            <label>Loan Type:
                <select name="loanType" value={formData.loanType} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="auto">Auto Loan</option>
                </select>
            </label>
            <label>Upload Documents: <input type="file" name="documents" onChange={handleChange} required /></label>
            <button type="submit">Submit Application</button>
        </form>
    );
};

export default LoanApplicationForm;
