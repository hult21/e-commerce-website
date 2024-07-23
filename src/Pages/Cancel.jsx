import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Payment Canceled</h1>
            <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Your payment was canceled. Please try again.</p>
            <Link to="/" style={{ fontSize: '1.5rem', color: '#C17278', textDecoration: 'none', marginTop: '20px' }}>Go Back To Home</Link>
        </div>
    );
};

export default Cancel;
