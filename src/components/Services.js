import React from 'react';
import './Services.css';

const servicesList = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Static Websites",
    description: "Ultra-fast, fully responsive, and SEO-optimized business websites. Ideal for landing pages, portfolios, and marketing sites built for maximum speed and conversions."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    title: "Dynamic Websites",
    description: "Interactive websites powered by flexible content management systems (CMS). Enable real-time updates, custom user portals, blogs, and secure data storage."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path>
        <path d="M9 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path>
        <path d="M9 9H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6"></path>
      </svg>
    ),
    title: "Web Applications",
    description: "Custom SaaS platforms, client portals, and secure cloud applications built using React, Node.js, and state-of-the-art databases to automate your operations."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="M10 4v16M2 10h20"></path>
      </svg>
    ),
    title: "Billing Software",
    description: "Comprehensive POS, invoice management, GST reporting, and stock-tracking systems tailored for retail, wholesale, and service-based companies."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    title: "Digital Marketing",
    description: "Targeted SEO campaigns, social media marketing (SMM), search engine marketing, and custom growth analytics designed to maximize lead generation."
  }
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Comprehensive Tech Services</h2>
          <p className="section-subtitle">
            We deliver state-of-the-art technical services to help your business transition smoothly into the digital era.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="glass-panel service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="service-hover-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
