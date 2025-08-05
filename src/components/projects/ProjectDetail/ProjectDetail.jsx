import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import projectsData from '../../../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projectsData.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const {
    title,
    subtitle,
    description,
    techStack,
    keyPoints,
    images,
    githubLink,
    liveLink,
    videoLink,
    projectType,
    duration,
    status
  } = project;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-detail">
      {/* Navigation Header */}
      <div className="project-nav">
        <div className="container">
          <Link to="/projects" className="back-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="hero-content">
            <div className="project-meta-header">
              <span className="project-type-badge">{projectType}</span>
              <span className="project-duration-badge">{duration}</span>
            </div>
            
            <h1 className="project-title">{title}</h1>
            <p className="project-subtitle">{subtitle}</p>
            
            <div className="project-actions">
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.58 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  Source Code
                </a>
              )}
              {videoLink && (
                <a href={videoLink} target="_blank" rel="noopener noreferrer" className="action-btn tertiary">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                  </svg>
                  Video Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <section className="project-gallery">
          <div className="container">
            <div className="gallery-container">
              <div className="main-image">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  className="gallery-image"
                />
                {images.length > 1 && (
                  <>
                    <button className="gallery-nav prev" onClick={prevImage}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                      </svg>
                    </button>
                    <button className="gallery-nav next" onClick={nextImage}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="thumbnail-scroll-container">
                  <div className="gallery-thumbnails">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        className={`thumbnail ${index%images.length === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img src={image} alt={`Thumbnail ${index%images.length + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="project-content">
        <div className="container">
          <div className="content-grid">
            
            {/* Project Description */}
            <div className="content-main">
              <div className="section-block">
                <h2 className="section-title">Project Overview</h2>
                <div className="project-description">
                  {description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className="section-block">
                <h2 className="section-title">Key Achievements</h2>
                <ul className="achievements-list">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="achievement-item">
                      <div className="achievement-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="content-sidebar">
              {/* Tech Stack */}
              <div className="sidebar-block">
                <h3 className="sidebar-title">Technologies Used</h3>
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="sidebar-block">
                <h3 className="sidebar-title">Project Details</h3>
                <div className="project-info">
                  <div className="info-item">
                    <span className="info-label">Type</span>
                    <span className="info-value">{projectType}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Duration</span>
                    <span className="info-value">{duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-completed">{status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="project-bottom-nav">
        <div className="container">
          <div className="bottom-nav-content">
            <Link to="/projects" className="nav-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
              </svg>
              View All Projects
            </Link>
            
            <div className="contact-cta">
              <p>Interested in similar work?</p>
              <Link to="/contact" className="contact-btn">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
