import React from "react";
import "./FeaturedProjects.css";
import projectsData from "../../../data/projectsData";

const getEmoji = (title) => {
  if (title.toLowerCase().includes("room")) return "📡";
  if (title.toLowerCase().includes("tumor")) return "🧠";
  if (title.toLowerCase().includes("edtech")) return "📚";
  if (title.toLowerCase().includes("portfolio")) return "🌐";
  return "💻";
};

const FeaturedProjects = () => {

  return (
    <div className="featured-projects">
      <h2 className="section-title">🧩 Featured Projects</h2>
      <p className="section-subtitle">
        A sneak peek into some of the full-stack and AI-powered projects I’ve
        developed—built with performance, usability, and scalability in mind.
      </p>

      <div className="project-grid">
        {
          projectsData.map((project)=>(
            <div className="home-project-card" key={project.id}>
              <h3>{getEmoji(project.title)} {project.title}</h3>
              <p>{project.shortDesc}</p>
              <ul>
                {
                  project.keyPoints.slice(0,2).map((point, index) => (
                    <li key={index}>♦ {point}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
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
