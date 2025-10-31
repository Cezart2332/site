import './App.css'

function App() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'HTML & CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js (Express.js)', 'Flask', '.NET', 'Java', 'Python'],
    },
    {
      category: 'Databases & Cloud',
      items: ['PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Coolify'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'GitHub Actions', 'Linux', 'CI/CD'],
    },
  ]

  const projects = [
    {
      title: 'Ecommerce Website',
      summary:
        'A full-stack electronics store with product management, secure checkout, and responsive UI.',
      stack: ['HTML', 'CSS', 'JavaScript', '.NET', 'MySQL'],
    },
    {
      title: 'BudgetMaker',
      summary:
        'Desktop finance tracker that stores income and expenses with expressive MySQL-backed insights.',
      stack: ['C#', 'MySQL'],
    },
    {
      title: 'AcoomH App',
      summary:
        'Cross-platform mobile app and .NET API powering curated wellness content with real production deployment.',
      stack: ['React Native', '.NET', 'MySQL', 'REST API'],
      link: 'acoomh.ro',
    },
    {
      title: 'Dan Fost Anxios',
      summary:
        'Mental health support app streaming real-time content via a custom Node.js + Express backend.',
      stack: ['React Native', 'Node.js', 'Express.js'],
    },
  ]

  const certificates = ['SQL', 'REST API', 'C# Basic', 'React']

  const languages = [
    { name: 'Romanian', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
  ]

  const education = [
    {
      period: '10/2023 – present',
      institution: 'Facultatea de Matematica si Informatica "Ovidius"',
      location: 'Constanta, Romania',
      detail: 'B.Sc. Computer Science (in progress)',
    },
    {
      period: '09/2019 – 07/2023',
      institution: 'Colegiu Comercial Carol I',
      location: 'Constanta, Romania',
      detail: 'High School Diploma',
    },
  ]

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">Cezar Turliu</div>
          <div className="nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Full Stack Developer · Cloud Enthusiast</p>
          <h1>Turliu Cezar</h1>
          <p className="tagline">
            21-year-old Computer Science student crafting delightful web and mobile experiences, deploying with confidence, and iterating fast.
          </p>
          <div className="hero-actions">
            <a className="primary" href="mailto:cezarturliu25@gmail.com">
              Let&apos;s collaborate
            </a>
            <a className="secondary" href="https://github.com/Cezart2332" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
          <div className="quick-info">
            <span>Constanta, Romania</span>
            <span>Since Oct 15, 2004</span>
            <span>
              <a href="tel:+40774544099">+40 774 544 099</a>
            </span>
            <span>
              <a href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="profile">
          <div className="section-heading">
            <h2>Profile</h2>
            <p>
              I design and build full stack products with a focus on usability, reliability, and fast iteration. Experienced across React, React Native, .NET, Node.js, Flask, and cloud-native tooling including Docker and AWS.
            </p>
          </div>
          <div className="cards-grid three">
            <article className="card">
              <h3>Full Stack Mindset</h3>
              <p>
                Comfortable shipping features end-to-end: UI, API design, data modeling, deployment, and observability.
              </p>
            </article>
            <article className="card">
              <h3>Cloud & DevOps Savvy</h3>
              <p>
                Builds automated pipelines with GitHub Actions, delivers containerized workloads to Coolify and AWS.
              </p>
            </article>
            <article className="card">
              <h3>Collaborative & Curious</h3>
              <p>
                Thrives in team settings using Git best practices, code reviews, and continuous learning to raise the bar.
              </p>
            </article>
          </div>
        </section>

        <section className="section muted" id="skills">
          <div className="section-heading">
            <h2>Skills Snapshot</h2>
            <p>Tech stack on repeat for high-impact delivery.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="meta-grid">
            <div className="meta-card">
              <h3>Certificates</h3>
              <ul>
                {certificates.map((certificate) => (
                  <li key={certificate}>{certificate}</li>
                ))}
              </ul>
            </div>
            <div className="meta-card">
              <h3>Languages</h3>
              <ul>
                {languages.map((language) => (
                  <li key={language.name}>
                    <span>{language.name}</span>
                    <span>{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Selected builds that highlight real-world impact and breadth.</p>
          </div>
          <div className="cards-grid two">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit ↗
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

        <section className="section muted" id="education">
          <div className="section-heading">
            <h2>Education</h2>
            <p>Foundation rooted in computer science and business-focused problem solving.</p>
          </div>
          <div className="timeline">
            {education.map((entry) => (
              <article key={entry.institution} className="timeline-item">
                <div className="timeline-marker" aria-hidden />
                <div>
                  <span className="timeline-period">{entry.period}</span>
                  <h3>{entry.institution}</h3>
                  <p className="timeline-location">{entry.location}</p>
                  <p>{entry.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta">
            <h2>Let&apos;s build what&apos;s next</h2>
            <p>
              Whether it&apos;s a new product, mentorship opportunity, or internship, I&apos;m ready to collaborate and deliver.
            </p>
            <div className="cta-actions">
              <a className="primary" href="mailto:cezarturliu25@gmail.com">
                Email me
              </a>
              <a className="secondary" href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263" target="_blank" rel="noreferrer">
                Message on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Turliu Cezar-Mihai. Crafted with purpose.</p>
      </footer>
    </div>
  )
}

export default App
