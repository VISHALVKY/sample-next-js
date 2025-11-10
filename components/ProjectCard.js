export default function ProjectCard({ title, description, technologies, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-actions">
        <a href={liveLink} className="project-primary-button" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={codeLink} className="project-secondary-button" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  )
}