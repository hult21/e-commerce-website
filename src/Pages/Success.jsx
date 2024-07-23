import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Payment Successful</h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Thank you for your purchase!</p>
      <Link to="/shop/collection" style={{ fontSize: '1.5rem', color: '#C17278', textDecoration: 'none', marginTop: '20px' }}>CONTINUE SHOPPING</Link>
    </div>
  );
};

export default Success;
