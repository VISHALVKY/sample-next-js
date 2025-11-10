import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, shopping cart, user authentication, and payment integration.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "API Integration", "Chart.js", "Geolocation"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Social Media Platform",
      description: "A modern social media application with post creation, real-time messaging, likes, comments, and user profiles.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Prisma"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editing, categories, tags, and SEO optimization.",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and contact information with modern design principles.",
      technologies: ["Next.js", "React", "CSS3", "Vercel"],
      liveLink: "#",
      codeLink: "#"
    }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Header />
      
      <section className="projects-section">
        <div className="container">
          <div className="projects-header">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">
              Here's a collection of projects I've worked on. Each project represents 
              a unique challenge and an opportunity to create something meaningful.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}