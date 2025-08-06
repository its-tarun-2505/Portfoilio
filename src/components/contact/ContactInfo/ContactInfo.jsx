import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'its.tarun.2505@gmail.com',
      link: 'mailto:its.tarun.2505@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/tarunaga/'
    },
    {
      icon: '📚',
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/its-tarun-2505'
    }
  ];

  const quickLinks = [
    { title: 'My Projects', link: '/projects' },
    { title: 'About Me', link: '/about' },
    { title: 'Resume/CV', link: '/resume.pdf' }
  ];

  return (
    <div className="contact-info">
      <h2>Get In Touch</h2>
      
      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <div key={index} className="contact-method">
            <span className="contact-icon">{method.icon}</span>
            <div className="contact-details">
              <h3>{method.title}</h3>
              {method.link ? (
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  {method.value}
                </a>
              ) : (
                <span>{method.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <div className="links-grid">
          {quickLinks.map((link, index) => (
            <a key={index} href={link.link} className="quick-link">
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="response-time">
        <p><strong>Response Time:</strong> I typically respond within 24 hours</p>
      </div>
    </div>
  );
};

export default ContactInfo;
