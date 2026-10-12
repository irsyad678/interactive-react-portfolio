import { useEffect, useMemo, useState } from 'react'
import { portfolioData } from './data/portfolioData'
import './App.css'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
const currentYear = new Date().getFullYear()

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionSelector = useMemo(() => SECTION_IDS.map((id) => `#${id}`).join(','), [])

  useEffect(() => {
    const sections = document.querySelectorAll(sectionSelector)
    const revealItems = document.querySelectorAll('.reveal')

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.15 },
    )

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
    )

    sections.forEach((section) => sectionObserver.observe(section))
    revealItems.forEach((item) => revealObserver.observe(item))

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [sectionSelector])

  return (
    <div className="page-shell">
      <div className="background-glow" aria-hidden="true"></div>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home">
            {portfolioData.person.name}
          </a>
          <ul>
            {portfolioData.navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={activeSection === sectionId ? 'active' : ''}
                    aria-current={activeSection === sectionId ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-copy reveal">
            <p className="hero-status">{portfolioData.person.availability}</p>
            <h1>
              {portfolioData.person.role}
              <span>{portfolioData.person.tagline}</span>
            </h1>
            <p>{portfolioData.person.intro}</p>
            <div className="cta-group">
              <a href={portfolioData.person.cta.primary.href} className="btn btn-primary">
                {portfolioData.person.cta.primary.label}
              </a>
              <a href={portfolioData.person.cta.secondary.href} className="btn btn-ghost">
                {portfolioData.person.cta.secondary.label}
              </a>
            </div>
          </div>
          <div className="hero-visual reveal" aria-hidden="true">
            <div className="orb orb-main"></div>
            <div className="orb orb-alt"></div>
            <svg viewBox="0 0 280 280" role="img" aria-label="Abstract decorative visual">
              <title>Abstract decorative visual</title>
              <circle cx="140" cy="140" r="80"></circle>
              <circle cx="140" cy="140" r="120"></circle>
              <path d="M40 160C70 105 105 70 165 95C215 115 238 168 230 220"></path>
            </svg>
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <p>
            Saya developer yang percaya bahwa website portfolio harus terasa hidup, cepat, dan punya karakter. Fokus saya adalah
            memadukan UI modern, interaksi halus, dan struktur kode yang rapi agar mudah dikembangkan ke depannya.
          </p>
          <p>
            Saat ini berbasis di {portfolioData.person.location}, terbuka untuk kolaborasi remote, dan siap membantu membangun
            pengalaman digital yang impactful.
          </p>
        </section>

        <section id="skills" className="section reveal">
          <h2>Capabilities</h2>
          <div className="skills-grid">
            {portfolioData.skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <p className="pill">{skill.level}</p>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Selected Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`${project.title} tech stack`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <h2>Experience</h2>
          <ol className="timeline">
            {portfolioData.experiences.map((item) => (
              <li key={`${item.period}-${item.role}`}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section contact-section reveal">
          <h2>Let’s build something meaningful</h2>
          <p>
            Punya ide produk atau redesign yang ingin dieksekusi? Kirim email dan kita diskusikan solusi terbaik untuk project Anda.
          </p>
          <a className="btn btn-primary" href={`mailto:${portfolioData.person.email}`}>
            {portfolioData.person.email}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} {portfolioData.person.name}. Crafted with React.</p>
      </footer>
    </div>
  )
}

export default App
