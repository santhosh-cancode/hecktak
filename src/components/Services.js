import React from 'react';
import './Services.css';

const servicesList = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    title: "Website Development",
    description: "Custom full-stack web development using modern technologies. We build secure, interactive, and database-driven dynamic websites and applications."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "UI Design",
    description: "Clean, intuitive, and interactive user interface (UI) designs. We focus on modern layouts, smooth micro-animations, and outstanding usability."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Domain & Hosting Setup",
    description: "End-to-end domain acquisition, fast hosting deployment, SSL certification, and configuration of business emails for a seamless launch."
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
        <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    title: "Digital Marketing",
    description: "Targeted SEO campaigns, social media marketing (SMM), search engine marketing, and custom growth analytics designed to maximize lead generation."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Personal Portfolio",
    description: "Bespoke personal portfolio websites designed for creators, executives, and professionals. Highlight your achievements, showcase your projects, and build a powerful personal brand online."
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
            <div 
              key={index} 
              className="glass-panel service-card" 
              id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
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
