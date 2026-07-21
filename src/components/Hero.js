import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="hero-section">
      <div className="bg-glow-sphere sphere-1"></div>
      <div className="bg-glow-sphere sphere-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-float">
            <span className="badge-dot"></span>
            Innovative Software Agency
          </div>
          <h1 className="hero-title">
            Transforming Ideas Into <br />
            <span className="text-gradient">Powerful Digital Products</span>
          </h1>
          <p className="hero-subtitle">
            Hecktak delivers premium web applications, bespoke billing software, high-performance static & dynamic websites, and data-driven digital marketing services designed for business growth.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'services')}>
              Explore Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'contact')}>
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="graphic-wrapper">
            <div className="glass-panel graphic-card card-main">
              <div className="card-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="card-title">hecktak-portfolio.html</span>
              </div>
              <div className="card-works-preview">
                <div className="preview-item">
                  <div className="preview-num">01</div>
                  <div className="preview-info">
                    <h4>wafflesquad.in</h4>
                    <p>React.js Business Website</p>
                  </div>
                  <span className="preview-status">LIVE</span>
                </div>
                
                <div className="preview-item">
                  <div className="preview-num">02</div>
                  <div className="preview-info">
                    <h4>trichydtcpplots.com</h4>
                    <p>Real Estate Property Portal</p>
                  </div>
                  <span className="preview-status">LIVE</span>
                </div>

                <div className="preview-item">
                  <div className="preview-num">03</div>
                  <div className="preview-info">
                    <h4>SmartBill POS</h4>
                    <p>Custom Invoicing System</p>
                  </div>
                  <span className="preview-status">DEPLOYED</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel graphic-card card-badge badge-top">
              <div className="badge-icon icon-cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="badge-details">
                <span className="badge-title">Speed Score</span>
                <span className="badge-val">99+ Google</span>
              </div>
            </div>

            <div className="glass-panel graphic-card card-badge badge-bottom">
              <div className="badge-icon icon-violet">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div className="badge-details">
                <span className="badge-title">Layout Specs</span>
                <span className="badge-val">Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-ticker">
        <div className="ticker-wrapper">
          <span className="ticker-item">✦ WEBSITE DEVELOPMENT </span>
          <span className="ticker-item">✦ UI DESIGN </span>
          <span className="ticker-item">✦ WEB APPLICATIONS </span>
          <span className="ticker-item">✦ DIGITAL MARKETING </span>
          <span className="ticker-item">✦ PERSONAL PORTFOLIO </span>
          <span className="ticker-item">✦ DOMAIN & HOSTING SETUP </span>
          {/* Duplicate for infinite loop */}
          <span className="ticker-item">✦ WEBSITE DEVELOPMENT </span>
          <span className="ticker-item">✦ UI DESIGN </span>
          <span className="ticker-item">✦ WEB APPLICATIONS </span>
          <span className="ticker-item">✦ DIGITAL MARKETING </span>
          <span className="ticker-item">✦ PERSONAL PORTFOLIO </span>
          <span className="ticker-item">✦ DOMAIN & HOSTING SETUP </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
