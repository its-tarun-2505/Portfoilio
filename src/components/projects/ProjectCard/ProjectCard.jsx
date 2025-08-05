
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    subtitle,
    shortDesc,
    techStack,
    thumbnail,
    thumbnailAlt,
    githubLink,
    liveLink,
    projectType
  } = project;

  return (
    <div className="project-card">
      {/* Image Container */}
      <div className="project-card-image">
        <img 
          src={thumbnail} 
          alt={thumbnailAlt || `${title} preview`}
          loading="lazy"
        />
        <div className="project-card-overlay">
          <div className="project-card-links">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
                aria-label={`View ${title} on GitHub`}
              >
                <FiGithub />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
                aria-label={`View ${title} live demo`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="project-card-content">
        {/* Project Type Badge */}
        {projectType && (
          <span className="project-type-badge">{projectType}</span>
        )}

        {/* Title and Subtitle */}
        <div className="project-card-header">
          <h3 className="project-title">{title}</h3>
          {subtitle && <p className="project-subtitle">{subtitle}</p>}
        </div>

        {/* Description */}
        <p className="project-description">{shortDesc}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {techStack.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {techStack.length > 4 && (
            <span className="tech-tag more">+{techStack.length - 4}</span>
          )}
        </div>

        {/* View Details Button */}
        <Link 
          to={`/projects/${id}`} 
          className="view-details-btn"
          aria-label={`View details of ${title} project`}
        >
          View Details <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
