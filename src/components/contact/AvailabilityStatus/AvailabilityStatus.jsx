import React from 'react';
import './AvailabilityStatus.css';

const AvailabilityStatus = () => {
  return (
    <section className="availability-status">
      <div className="container">
        <div className="status-card">
          <div className="status-indicator">
            <span className="status-dot available"></span>
            <span className="status-text">Available for New Projects</span>
          </div>
          <p className="status-description">
            I'm currently open to freelance projects and full-time opportunities. 
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="status-actions">
            <a href="mailto:its.tarun.2505@gmail.com" className="primary-action">
              Email Me
            </a>
            <a href="/resume.pdf" className="secondary-action" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityStatus;
