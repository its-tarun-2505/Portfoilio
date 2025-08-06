import React from 'react';
import {
  PersonalStory,
  Timeline,
  SkillsDetailed,
  Philosophy
} from '../../../components/about';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header">
        <div className="about-header-content">
          <div className="about-photo">
            <img 
              src="/myPhoto.png" 
              alt="Your Name - Full Stack Developer"
            />
          </div>
          <div className="about-intro">
            <h1>About Me</h1>
            <h2>Full Stack Developer</h2>
            <p className="location">📍 India</p>
            <p className="tagline">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <PersonalStory />

      {/* Professional Timeline */}
      <Timeline />

      {/* Skills & Expertise */}
      <SkillsDetailed />

      {/* Values & Philosophy */}
      <Philosophy />

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <div className="contact-cta">
          <h2>Let's Work Together</h2>
          <p>Ready to bring your ideas to life? I'd love to hear from you.</p>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default About;
