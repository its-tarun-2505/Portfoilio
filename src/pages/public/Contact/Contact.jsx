import React from 'react';
import {
  ContactForm,
  ContactInfo,
  AvailabilityStatus
} from '../../../components/contact';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Let's Work Together</h1>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Availability Status */}
      <AvailabilityStatus />
    </div>
  );
};

export default Contact;
