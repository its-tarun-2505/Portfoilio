import React from "react";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      <h2 className="section-title">🧩 Featured Projects</h2>
      <p className="section-subtitle">
        A sneak peek into some of the full-stack and AI-powered projects I’ve
        developed—built with performance, usability, and scalability in mind.
      </p>

      <div className="project-grid">
        {/* RoomLoop */}
        <div className="project-card">
          <h3>📡 RoomLoop</h3>
          <p>
            A real-time micro-meetup platform using the MERN stack and Socket.io
            for instant chat, smart room scheduling, and live notifications.
          </p>
          <ul>
            <li>🔐 Built with secure authentication using JWT and bcrypt</li>
            <li>📊 Rooms are auto-managed based on categories and activity</li>
            <li>⚡ Lightweight architecture for smooth, responsive performance</li>
          </ul>
        </div>

        {/* Brain Tumor Detection */}
        <div className="project-card">
          <h3>🧠 Brain Tumor Detection</h3>
          <p>
            A deep learning system powered by CNN and TensorFlow to detect
            tumors from MRI scans — built to assist early diagnosis with 95%
            accuracy.
          </p>
          <ul>
            <li>🧬 Trained on extensive MRI datasets using Python-based tools</li>
            <li>🖼️ Displays results in real-time through a user-friendly interface</li>
            <li>🔗 Designed with potential for secure medical integration</li>
          </ul>
        </div>

        {/* Study Notion */}
        <div className="project-card">
          <h3>📚 Study Notion</h3>
          <p>
            A full-featured e-learning platform enabling secure content
            creation, real-time updates, and course rating — all built using
            MERN + Redux.
          </p>
          <ul>
            <li>🌐 Features responsive design for all screen sizes</li>
            <li>🛡️ Includes OTP-based verification and password recovery</li>
            <li>🌟 Enables course rating and real-time user interaction</li>
          </ul>
        </div>
      </div>

      <div className="view-all-container">
        <a href="/projects" className="view-all-link">
          🚀 View All Projects
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
