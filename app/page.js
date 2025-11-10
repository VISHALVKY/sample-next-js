import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              I'm a passionate full-stack developer creating beautiful, functional web applications 
              with modern technologies like Next.js, React, and Node.js.
            </p>
            <div className="button-group">
              <button className="primary-button">View My Work</button>
              <button className="secondary-button">Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3 className="feature-title">Web Development</h3>
              <p className="feature-description">
                Building responsive and performant web applications using modern frameworks and best practices.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">UI/UX Design</h3>
              <p className="feature-description">
                Creating intuitive user interfaces with focus on user experience and accessibility.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Performance</h3>
              <p className="feature-description">
                Optimizing applications for speed, SEO, and overall user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}