import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    title: "WaffleSquad Website",
    category: "Static Websites",
    desc: "Developed and deployed a responsive business website using React.js, HTML, CSS, and JavaScript. Designed modern UI components, smooth navigation, and mobile-friendly layouts to improve user experience and online presence.",
    badgeColor: "green",
    url: "https://wafflesquad.in"
  },
  {
    title: "Trichy DTCP Plots Website",
    category: "Static Websites",
    desc: "Developed and successfully deployed a responsive real estate business website using React.js featuring animated sections, property showcases, gallery, and contact forms. Ensured a seamless user experience across mobile and desktop devices.",
    badgeColor: "yellow",
    url: "https://trichydtcpplots.com"
  }
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Billing Software", "Web Applications", "Static Websites", "Dynamic Websites", "Digital Marketing"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Our Works</h2>
          <p className="section-subtitle">
            Explore a selection of billing engines, dynamic web applications, and marketing frameworks we have crafted for businesses worldwide.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="portfolio-categories">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="glass-panel project-card">
              <div className="project-header">
                <span className={`project-badge badge-${project.badgeColor}`}>
                  {project.category}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-footer">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="learn-more">
                    Visit Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                ) : (
                  <span className="learn-more">
                    View Specs
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                )}
              </div>
              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
