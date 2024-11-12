import React from 'react';
import './Footer.css'; 
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons for links

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CID. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Darius939" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a href="mailto:dariuscojocaru123@gmail.com">
          <FaEnvelope className="footer-icon" /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
