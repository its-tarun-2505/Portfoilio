import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Brand Info */}
        <div className="footer-brand">
          <h3>Tarun Agarwal</h3>
          <p>Full Stack Developer | Turning ideas into scalable digital solutions</p>
          <p className="availability-badge">📌 Open to new opportunities</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-socials">
          <a href="https://linkedin.com/in/tarunaga" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> Linkedin
          </a>
          <a href="https://github.com/its-tarun-2505" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Github
          </a>
          <a href="mailto:its.tarun.2505@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-separator" />
        <a href="#top" className="back-to-top">↑ Back to Top</a>
        <p>© 2025 Tarun Agarwal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
