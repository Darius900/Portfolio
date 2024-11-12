import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo2.png';
import resume from './resume1.pdf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <p className="tagline">Coding with passion and precision.</p>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <a className="resume-download" href={resume} target="_blank" rel="noreferrer" download onClick={() => setIsMenuOpen(false)}>
          <FaDownload /> Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;