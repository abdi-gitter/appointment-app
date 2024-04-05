import React from 'react';
import { Container } from 'react-bootstrap';

function Header() {
  return (
    <Container className="text-center my-4">
      <h1 style={{ 
          fontWeight: 'bold', 
          color: '#007bff', // This is Bootstrap's primary color
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // A common and professional font choice
      }}>
        CLARUS HOSPITAL
      </h1>
    </Container>
  );
}

export default Header;
