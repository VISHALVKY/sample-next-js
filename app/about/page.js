import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Header />
      
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h1 className="about-title">About Me</h1>
              <p className="about-description">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions. I specialize in modern web technologies 
                and enjoy turning complex problems into simple, beautiful designs.
              </p>
              <p className="about-description">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">3+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-number">25+</h3>
                  <p className="stat-label">Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div className="skills-section">
              <h2 className="skills-title">Technical Skills</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}