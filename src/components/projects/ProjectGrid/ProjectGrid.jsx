import React from 'react';
import ProjectCard from '../ProjectCard';
import projectsData from '../../../data/projectsData';
import './ProjectGrid.css';

const ProjectGrid = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Explore my journey through innovative solutions and cutting-edge technologies
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
