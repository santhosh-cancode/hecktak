import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    if (isOpen) {
      setDropdownOpen(false);
    }
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setDropdownOpen(false);
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

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 968) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    } else {
      handleLinkClick(e, 'services');
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
          <li className={`navbar-dropdown-wrapper ${dropdownOpen ? 'dropdown-active' : ''}`}>
            <a href="#services" onClick={handleServicesClick} className="navbar-dropdown-toggle">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2.5" className="dropdown-arrow-icon" style={{ marginLeft: '6px', verticalAlign: 'middle', transition: 'transform 0.2s ease' }}>
                <polyline points="1 1 5 5 9 1"></polyline>
              </svg>
            </a>
            <ul className="navbar-dropdown-menu">
              <li>
                <a href="#service-website-development" onClick={(e) => handleLinkClick(e, 'service-website-development')}>Website Development</a>
              </li>
              <li>
                <a href="#service-ui-design" onClick={(e) => handleLinkClick(e, 'service-ui-design')}>UI Design</a>
              </li>
              <li>
                <a href="#service-domain-hosting-setup" onClick={(e) => handleLinkClick(e, 'service-domain-hosting-setup')}>Domain & Hosting</a>
              </li>
              <li>
                <a href="#service-web-applications" onClick={(e) => handleLinkClick(e, 'service-web-applications')}>Web Applications</a>
              </li>
              <li>
                <a href="#service-digital-marketing" onClick={(e) => handleLinkClick(e, 'service-digital-marketing')}>Digital Marketing</a>
              </li>
              <li>
                <a href="#service-personal-portfolio" onClick={(e) => handleLinkClick(e, 'service-personal-portfolio')}>Personal Portfolio</a>
              </li>
            </ul>
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
