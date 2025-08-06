import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Resume Header */}
      <section className="resume-header">
        <div className="container">
          <h1>My Resume</h1>
          <p>Download or view my resume</p>
          <div className="resume-actions">
            <a 
              href="/resume.pdf" 
              download="Tarun-Agarwal-Resume.pdf" 
              className="download-btn primary"
            >
              📄 Download PDF
            </a>
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')} 
              className="download-btn secondary"
            >
              👁️ View in New Tab
            </button>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pdf-viewer-section">
        <div className="container">
          <div className="pdf-container">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH"
              title="Resume PDF"
              className="pdf-iframe"
              loading="lazy"
            />
            <div className="pdf-fallback">
              <p>Can't view the PDF? <a href="/resume.pdf" target="_blank">Click here to open it in a new tab</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
