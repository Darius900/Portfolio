import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cojocaru Ioan Darius</p>
      <div className="footer-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;