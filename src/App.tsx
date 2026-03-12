import './App.css'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTrophy,
  FaMedal,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaWrench,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaUser,
  FaFolder,
} from 'react-icons/fa'

function App() {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode />,
      items: ['React', 'React Native', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['ASP.NET', 'C#', 'Node.js', 'Python'],
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      category: 'DevOps & Tools',
      icon: <FaWrench />,
      items: ['Docker', 'Git', 'CI/CD', 'Linux', 'Networking'],
    },
  ]

  const projects = [
    {
      title: 'Dan Fost Anxios',
      summary:
        'Mobile application for anxiety management with challenges and audio content. Deployed APIs and published on both App Store and Google Play.',
      stack: ['React Native', 'Node.js', 'MySQL'],
      link: 'https://play.google.com/store/apps/details?id=com.cartealuidan.danfostanxios',
      linkLabel: 'Play Store',
      isGithub: false,
    },
    {
      title: 'MyPasswordVault',
      summary:
        'Web app for managing passwords with zero-knowledge architecture — the server never accesses plaintext passwords. Features 2FA and email alerts for new-location logins.',
      stack: ['React', 'ASP.NET', 'PostgreSQL'],
      link: 'https://mypasswordvault.cloud/',
      linkLabel: 'Live Site',
      isGithub: false,
    },
    {
      title: 'AcoomH',
      summary:
        'App for restaurants and coffee shops to manage reservations, list menus, and attract new customers. Won special award at ESTIC 2025.',
      stack: ['React Native', 'ASP.NET', 'MySQL'],
      link: 'https://github.com/Cezart2332/acum-h',
      linkLabel: 'GitHub',
      isGithub: true,
    },
  ]

  const competitions = [
    {
      placement: '1st Place',
      event: 'ETST 2024 – Business',
      period: 'October 2024 – December 2024',
      project: 'LocX',
      description:
        'Developed a business plan for an intelligent locker system for ship containers. Conducted competitor analysis and pitched to jury, developing business strategy skills.',
    },
    {
      placement: 'Special Award',
      event: 'ESTIC 2025 – Tech',
      period: 'May 2025',
      project: 'AcoomH',
      description:
        'Developed AcoomH, an app for restaurants and coffee shops to manage reservations, optimizing administrative workflows and improving operational efficiency.',
    },
  ]

  const certificates = ['React', 'C#', 'SQL Basic', 'SQL Intermediate', 'JavaScript', 'REST API']

  const education = [
    {
      period: 'September 2023 – July 2026',
      institution: 'Facultatea de Matematica si Informatica "Ovidius"',
      location: 'Constanta, Romania',
      degree: "Bachelor's Degree in Computer Science",
      highlights: [
        'Year 1 – GPA 9.70/10: Data Structures and Algorithms, Object-Oriented Programming, Calculus, Linear Algebra',
        'Year 2 – GPA 8.90/10: Operating Systems, Web Application Development, Python-based Numerical Analysis, Computational Geometry',
      ],
    },
  ]

  const experience = [
    {
      role: 'Trainer',
      company: 'Impact Academies',
      location: 'Constanta',
      period: 'June 2025 – Present',
      highlights: [
        'Taught kids basic and advanced computer science concepts, algorithms, game creation, and AI & ML using Scratch and Python',
        'Integrated gamification and coding challenges to increase engagement and motivation',
        "Provided individual feedback and monitored progress, contributing to children's development of digital skills",
      ],
    },
  ]

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">Cezar Turliu</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#competitions">Competitions</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-social">
            <a href="https://github.com/Cezart2332" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Full-Stack Developer · Trainer · Final Year CS Student</p>
          <h1>Turliu Cezar-Mihai</h1>
          <p className="tagline">
            Passionate about building full-stack web and mobile products, containerized deployments, and keeping systems secure — comfortable on both Linux and Windows.
          </p>
          <div className="hero-actions">
            <a className="primary" href="mailto:cezarturliu25@gmail.com">
              <FaEnvelope /> Get in touch
            </a>
            <a className="secondary" href="https://github.com/Cezart2332" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
          <div className="quick-info">
            <span><FaMapMarkerAlt /> Constanta / Bucharest, Romania</span>
            <a href="tel:+40774544099"><FaPhone /> +40 774 544 099</a>
            <a href="mailto:cezarturliu25@gmail.com"><FaEnvelope /> cezarturliu25@gmail.com</a>
            <a href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <h2><FaUser /> About Me</h2>
          </div>
          <p className="about-text">
            Final year 21-year-old student passionate about computer science with experience in
            Full-Stack web development using C#, React, React Native, and SQL databases. Experienced
            with Docker for containerization, Git for version control, and GitHub Actions for CI/CD
            pipelines. Comfortable in both Linux and Windows, with an interest in networking and
            system security.
          </p>
          <div className="cards-grid three">
            <article className="card">
              <h3>Full-Stack Development</h3>
              <p>
                Shipping features end-to-end: UI, API design, data modeling, and deployment across
                web and mobile platforms.
              </p>
            </article>
            <article className="card">
              <h3>DevOps &amp; Security</h3>
              <p>
                Containerized workloads with Docker, automated pipelines via GitHub Actions, and
                security-first design patterns.
              </p>
            </article>
            <article className="card">
              <h3>Teaching &amp; Mentoring</h3>
              <p>
                Currently training kids in computer science fundamentals, algorithms, and AI
                concepts at Impact Academies.
              </p>
            </article>
          </div>
        </section>

        <section className="section muted" id="experience">
          <div className="section-heading">
            <h2><FaBriefcase /> Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((entry) => (
              <article key={entry.company} className="timeline-item">
                <div className="timeline-marker" aria-hidden />
                <div className="timeline-body">
                  <span className="timeline-period">{entry.period}</span>
                  <h3>
                    {entry.role}
                    <span className="timeline-company"> @ {entry.company}</span>
                  </h3>
                  <p className="timeline-location">
                    <FaMapMarkerAlt /> {entry.location}
                  </p>
                  <ul className="highlight-list">
                    {entry.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <h2><FaCode /> Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="certs-section">
            <h3 className="certs-heading"><FaAward /> Certifications</h3>
            <ul className="pill-list">
              {certificates.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section muted" id="projects">
          <div className="section-heading">
            <h2><FaFolder /> Projects</h2>
          </div>
          <div className="cards-grid two">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      {project.isGithub ? <FaGithub /> : <FaExternalLinkAlt />}
                      <span>{project.linkLabel}</span>
                    </a>
                  )}
                </div>
                <p>{project.summary}</p>
                <ul className="pill-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="competitions">
          <div className="section-heading">
            <h2><FaTrophy /> Competitions</h2>
          </div>
          <div className="cards-grid two">
            {competitions.map((comp) => (
              <article key={comp.event} className="comp-card">
                <div className="comp-badge">
                  {comp.placement === '1st Place' ? (
                    <FaTrophy className="comp-icon gold" />
                  ) : (
                    <FaMedal className="comp-icon silver" />
                  )}
                  <span className="comp-placement">{comp.placement}</span>
                </div>
                <h3>{comp.event}</h3>
                <span className="timeline-period">{comp.period}</span>
                <p className="comp-project">Project: <strong>{comp.project}</strong></p>
                <p>{comp.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted" id="education">
          <div className="section-heading">
            <h2><FaGraduationCap /> Education</h2>
          </div>
          <div className="timeline">
            {education.map((entry) => (
              <article key={entry.institution} className="timeline-item">
                <div className="timeline-marker" aria-hidden />
                <div className="timeline-body">
                  <span className="timeline-period">{entry.period}</span>
                  <h3>{entry.degree}</h3>
                  <p className="timeline-location">
                    <FaMapMarkerAlt /> {entry.institution}, {entry.location}
                  </p>
                  <ul className="highlight-list">
                    {entry.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta">
            <h2>Get In Touch</h2>
            <p>
              Open to internships, junior full-stack roles, and project collaborations. Let&apos;s
              build something meaningful together.
            </p>
            <div className="cta-actions">
              <a className="primary" href="mailto:cezarturliu25@gmail.com">
                <FaEnvelope /> Email Me
              </a>
              <a className="secondary" href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a className="secondary" href="https://github.com/Cezart2332" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Turliu Cezar-Mihai</p>
      </footer>
    </div>
  )
}

export default App
