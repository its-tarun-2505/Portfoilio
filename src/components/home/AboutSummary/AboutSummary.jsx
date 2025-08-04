import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import "./AboutSummary.css";

const AboutSummary = () => {
  return (
    <div className="about-summary">
      <h1 className="about-heading">About Me</h1>

      <h4>
        👋 Hi, I’m <strong>Tarun Agarwal</strong> — a passionate Front-End Developer
        crafting clean, modern, and responsive web interfaces.
      </h4>

      <p>
        I specialize in building fast, accessible websites using tools like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Vite</strong>.
        My goal? Create pixel-perfect, user-friendly designs that work seamlessly across devices.
      </p>

      <p>
        💡 I thrive on solving real-world problems with intuitive UI and clean, maintainable code. 
        Every line matters, and every detail counts.
      </p>

      <h5>
        🚀 Currently open to opportunities where I can grow, collaborate, and contribute to impactful projects.
      </h5>

      <div className="about-controls">
        <span>🤝 Let’s connect!</span>
        <a
          href="https://www.linkedin.com/in/tarunaga/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutSummary;
