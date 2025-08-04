import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import "./ContactPreview.css";

const ContactPreview = () => {
  return (
    <section className="contact-preview">
      <div className="contact-preview-content">
        <FaEnvelopeOpenText className="contact-icon" />
        <h2>Let’s Connect</h2>
        <p>
          Got a project, collaboration, or just want to chat tech? I'm always open
          to meaningful conversations.
        </p>
        <a href="/contact" className="contact-button">
          Contact Me →
        </a>
      </div>
    </section>
  );
};

export default ContactPreview;
