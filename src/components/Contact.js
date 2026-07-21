import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: 'Website Development',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow-sphere contact-sphere"></div>
      
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-tag">Contact Us</span>
          <h2 className="info-title">Let's Discuss Your Next Big Project</h2>
          <p className="info-desc">
            Whether you need a quick billing software deployment, a robust web application, a dynamic website, or a comprehensive SEO campaign, our engineers are ready to build it.
          </p>

          <div className="info-details-list">
            <div className="info-detail-card glass-panel">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-card-content">
                <h4>Email Us</h4>
                <p>contact@hecktak.com</p>
              </div>
            </div>

            <div className="info-detail-card glass-panel">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-card-content">
                <h4>Call Us</h4>
                <p>+91 94881 03079</p>
              </div>
            </div>

            <div className="info-detail-card glass-panel">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-card-content">
                <h4>Location</h4>
                <p>Thanjavur, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel contact-form-wrapper">
          <h3 className="form-heading">Send an Inquiry</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">Service Needed</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                className="form-control select-control"
              >
                <option value="Website Development">Website Development</option>
                <option value="UI Design">UI Design</option>
                <option value="Domain & Hosting Setup">Domain & Hosting Setup</option>
                <option value="Web Applications">Web Applications</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Personal Portfolio">Personal Portfolio</option>
                <option value="Other">Other Services</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="form-control textarea-control" 
                rows="4" 
                placeholder="Describe your requirements..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary btn-block ${submitStatus === 'sending' ? 'loading' : ''}`}
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? "Sending Inquiry..." : "Submit Inquiry"}
            </button>

            {submitStatus === 'success' && (
              <div className="form-alert alert-success">
                Success! We have received your request and will contact you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-alert alert-error">
                Please fill out all fields correctly before submitting.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
