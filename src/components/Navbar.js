import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">HECKTAK</span>
        </a>

        <div className={`navbar-menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
          </li>
          <li>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>Our Works</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a>
          </li>
          <li className="nav-btn-item">
            <a href="#contact" className="btn btn-primary nav-btn" onClick={(e) => handleLinkClick(e, 'contact')}>
              Chat Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
