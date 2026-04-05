import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import Lenis from 'lenis'
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
  FaMoon,
  FaSun,
} from 'react-icons/fa'

type Theme = 'dark' | 'light'

const heroTitleWords = ['Turliu', 'Cezar-Mihai']
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const fluidEase = [0.22, 1, 0.36, 1] as const

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: fluidEase,
      when: 'beforeChildren',
      staggerChildren: 0.09,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.54, ease: fluidEase },
  },
}

function App() {
  const shouldReduceMotion = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [theme, setTheme] = useState<Theme>('dark')
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(false)
  const [isCursorInteractive, setIsCursorInteractive] = useState(false)
  const [isCursorPressed, setIsCursorPressed] = useState(false)
  const cursorVisibleRef = useRef(false)
  const cursorInteractiveRef = useRef(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorDotX = useSpring(cursorX, { stiffness: 560, damping: 44, mass: 0.08 })
  const cursorDotY = useSpring(cursorY, { stiffness: 560, damping: 44, mass: 0.08 })
  const cursorRingX = useSpring(cursorX, { stiffness: 260, damping: 30, mass: 0.22 })
  const cursorRingY = useSpring(cursorY, { stiffness: 260, damping: 30, mass: 0.22 })

  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode />,
      items: ['React', 'React Native'],
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      items: ['ASP.NET', 'Node.js', 'Python'],
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

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('ui-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('ui-theme', theme)
  }, [theme])

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    const syncFinePointer = () => {
      setIsFinePointer(pointerQuery.matches)
    }

    syncFinePointer()
    pointerQuery.addEventListener('change', syncFinePointer)

    return () => {
      pointerQuery.removeEventListener('change', syncFinePointer)
    }
  }, [])

  useEffect(() => {
    const useCustomCursor = isFinePointer && !shouldReduceMotion
    document.body.classList.toggle('custom-cursor-enabled', useCustomCursor)

    return () => {
      document.body.classList.remove('custom-cursor-enabled')
    }
  }, [isFinePointer, shouldReduceMotion])

  useEffect(() => {
    if (!isFinePointer || shouldReduceMotion) {
      cursorVisibleRef.current = false
      cursorInteractiveRef.current = false
      setIsCursorVisible(false)
      setIsCursorInteractive(false)
      setIsCursorPressed(false)
      return
    }

    const interactiveSelector = 'a, button, [data-cursor="interactive"]'

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)

      if (!cursorVisibleRef.current) {
        cursorVisibleRef.current = true
        setIsCursorVisible(true)
      }

      const interactiveTarget =
        event.target instanceof Element ? event.target.closest(interactiveSelector) : null
      const nextInteractive = Boolean(interactiveTarget)

      if (nextInteractive !== cursorInteractiveRef.current) {
        cursorInteractiveRef.current = nextInteractive
        setIsCursorInteractive(nextInteractive)
      }
    }

    const handleMouseLeave = () => {
      cursorVisibleRef.current = false
      cursorInteractiveRef.current = false
      setIsCursorVisible(false)
      setIsCursorInteractive(false)
      setIsCursorPressed(false)
    }

    const handleMouseDown = () => {
      setIsCursorPressed(true)
    }

    const handleMouseUp = () => {
      setIsCursorPressed(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY, isFinePointer, shouldReduceMotion])

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1300)

    return () => {
      window.clearTimeout(loadingTimer)
    }
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      lerp: 0.08,
      autoRaf: false,
    })

    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [shouldReduceMotion])

  useEffect(() => {
    let previousScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const movingUp = currentScroll < previousScroll
      setIsNavVisible(movingUp || currentScroll < 90)
      previousScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleAnchorClick = (event: ReactMouseEvent<HTMLAnchorElement>, target: string) => {
    const section = document.querySelector<HTMLElement>(target)
    if (!section) {
      return
    }

    event.preventDefault()

    if (lenisRef.current) {
      lenisRef.current.scrollTo(section, { offset: -108, duration: 1.1 })
      return
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleMagneticMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (!isFinePointer || shouldReduceMotion) {
      return
    }

    const target = event.currentTarget
    const bounds = target.getBoundingClientRect()
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)
    const maxOffsetX = Math.min(bounds.width * 0.16, 14)
    const maxOffsetY = Math.min(bounds.height * 0.16, 10)
    const magneticX = Math.max(-maxOffsetX, Math.min(maxOffsetX, offsetX * 0.14))
    const magneticY = Math.max(-maxOffsetY, Math.min(maxOffsetY, offsetY * 0.14))

    target.style.setProperty('--magnetic-x', `${magneticX}px`)
    target.style.setProperty('--magnetic-y', `${magneticY}px`)
  }

  const handleMagneticLeave = (event: ReactMouseEvent<HTMLElement>) => {
    const target = event.currentTarget
    target.style.setProperty('--magnetic-x', '0px')
    target.style.setProperty('--magnetic-y', '0px')
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const nextThemeLabel = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className="fluid-page">
      <div className="ambient-orb orb-one" aria-hidden />
      <div className="ambient-orb orb-two" aria-hidden />
      <div className="ambient-orb orb-three" aria-hidden />

      <AnimatePresence>
        {isFinePointer && !shouldReduceMotion && (
          <>
            <motion.div
              className={`custom-cursor-ring${isCursorVisible ? ' is-visible' : ''}${isCursorInteractive ? ' is-interactive' : ''}${isCursorPressed ? ' is-pressed' : ''}`}
              style={{ x: cursorRingX, y: cursorRingY }}
              aria-hidden
            />
            <motion.div
              className={`custom-cursor-dot${isCursorVisible ? ' is-visible' : ''}${isCursorPressed ? ' is-pressed' : ''}`}
              style={{ x: cursorDotX, y: cursorDotY }}
              aria-hidden
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.52, ease: fluidEase },
            }}
          >
            <motion.div
              className="preloader-door preloader-door-left"
              initial={{ x: 0 }}
              exit={{ x: '-112%', transition: { duration: 0.8, ease: fluidEase } }}
            />
            <motion.div
              className="preloader-door preloader-door-right"
              initial={{ x: 0 }}
              exit={{ x: '112%', transition: { duration: 0.8, ease: fluidEase } }}
            />
            <motion.p
              className="preloader-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: fluidEase }}
            >
              Welcome to my website
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="floating-nav-shell"
        initial={false}
        animate={{ y: isNavVisible ? 0 : -130, opacity: isNavVisible ? 1 : 0.92 }}
        transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }}
      >
        <nav className="floating-nav" aria-label="Primary navigation">
          <a
            className="brand magnetic"
            href="#top"
            onClick={(event) => handleAnchorClick(event, '#top')}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
          >
            Cezar Turliu
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="magnetic"
                onClick={(event) => handleAnchorClick(event, item.href)}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle magnetic"
            onClick={toggleTheme}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            data-cursor="interactive"
            aria-label={`Switch to ${nextThemeLabel} theme`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <div className="nav-social">
            <a
              href="https://github.com/Cezart2332"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="magnetic"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="magnetic"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </motion.header>

      <header className="hero" id="top">
        <motion.div
          className="hero-panel"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: fluidEase }}
        >
          <motion.p
            className="eyebrow"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: fluidEase }}
          >
            Full-Stack Developer • Trainer • Final Year CS Student
          </motion.p>

          <h1 className="hero-title">
            {heroTitleWords.map((word, index) => (
              <motion.span
                key={word}
                className="hero-word"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 170,
                  damping: 18,
                  delay: 0.28 + index * 0.12,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="tagline"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease: fluidEase }}
          >
            I build fluid full-stack products for web and mobile, with a strong focus on polished
            UX, deployment reliability, and practical security.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: fluidEase }}
          >
            <a
              className="primary magnetic"
              href="mailto:cezarturliu25@gmail.com"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaEnvelope /> Get in touch
            </a>
            <a
              className="secondary magnetic"
              href="https://github.com/Cezart2332"
              target="_blank"
              rel="noreferrer"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaGithub /> GitHub
            </a>
          </motion.div>

          <motion.div
            className="quick-info"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.67, ease: fluidEase }}
          >
            <span>
              <FaMapMarkerAlt /> Constanta / Bucharest, Romania
            </span>
            <a href="tel:+40774544099" className="magnetic" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
              <FaPhone /> +40 774 544 099
            </a>
            <a
              href="mailto:cezarturliu25@gmail.com"
              className="magnetic"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaEnvelope /> cezarturliu25@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263"
              target="_blank"
              rel="noreferrer"
              className="magnetic"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </header>

      <main>
        <motion.section
          className="section"
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaUser /> About Me
            </h2>
          </motion.div>
          <motion.p className="about-text" variants={itemVariants}>
            Final year 21-year-old student passionate about computer science with experience in
            Full-Stack web development using C#, React, React Native, and SQL databases. Experienced
            with Docker for containerization, Git for version control, and GitHub Actions for CI/CD
            pipelines. Comfortable in both Linux and Windows, with an interest in networking and
            system security.
          </motion.p>
          <div className="cards-grid three">
            <motion.article className="card" variants={itemVariants}>
              <h3>Full-Stack Development</h3>
              <p>
                Shipping features end-to-end: UI, API design, data modeling, and deployment across
                web and mobile platforms.
              </p>
            </motion.article>
            <motion.article className="card" variants={itemVariants}>
              <h3>DevOps &amp; Security</h3>
              <p>
                Containerized workloads with Docker, automated pipelines via GitHub Actions, and
                security-first design patterns.
              </p>
            </motion.article>
            <motion.article className="card" variants={itemVariants}>
              <h3>Teaching &amp; Mentoring</h3>
              <p>
                Currently training kids in computer science fundamentals, algorithms, and AI
                concepts at Impact Academies.
              </p>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          className="section muted"
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaBriefcase /> Experience
            </h2>
          </motion.div>
          <motion.div className="timeline" variants={itemVariants}>
            {experience.map((entry) => (
              <motion.article key={entry.company} className="timeline-item" variants={itemVariants}>
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
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="section"
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaCode /> Skills
            </h2>
          </motion.div>
          <div className="skills-grid">
            {skills.map((group) => (
              <motion.div key={group.category} className="skill-card" variants={itemVariants}>
                <div className="skill-card-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div className="certs-section" variants={itemVariants}>
            <h3 className="certs-heading">
              <FaAward /> Certifications
            </h3>
            <ul className="pill-list">
              {certificates.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          className="section muted"
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaFolder /> Projects
            </h2>
          </motion.div>
          <div className="cards-grid two">
            {projects.map((project) => (
              <motion.article key={project.title} className="project-card" variants={itemVariants}>
                <div className="card-header">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link magnetic"
                      onMouseMove={handleMagneticMove}
                      onMouseLeave={handleMagneticLeave}
                    >
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
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="competitions"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaTrophy /> Competitions
            </h2>
          </motion.div>
          <div className="cards-grid two">
            {competitions.map((comp) => (
              <motion.article key={comp.event} className="comp-card" variants={itemVariants}>
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
                <p className="comp-project">
                  Project: <strong>{comp.project}</strong>
                </p>
                <p>{comp.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section muted"
          id="education"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-heading" variants={itemVariants}>
            <h2>
              <FaGraduationCap /> Education
            </h2>
          </motion.div>
          <motion.div className="timeline" variants={itemVariants}>
            {education.map((entry) => (
              <motion.article key={entry.institution} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker" aria-hidden />
                <div className="timeline-body">
                  <span className="timeline-period">{entry.period}</span>
                  <h3>{entry.degree}</h3>
                  <p className="timeline-location">
                    <FaMapMarkerAlt /> {entry.institution}, {entry.location}
                  </p>
                  <ul className="highlight-list">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="section"
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="cta" variants={itemVariants}>
            <h2>Get In Touch</h2>
            <p>
              Open to internships, junior full-stack roles, and project collaborations. Let&apos;s
              build something meaningful together.
            </p>
            <div className="cta-actions">
              <a
                className="primary magnetic"
                href="mailto:cezarturliu25@gmail.com"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <FaEnvelope /> Email Me
              </a>
              <a
                className="secondary magnetic"
                href="https://linkedin.com/in/cezar-mihai-turliu-75a05a263"
                target="_blank"
                rel="noreferrer"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                className="secondary magnetic"
                href="https://github.com/Cezart2332"
                target="_blank"
                rel="noreferrer"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Turliu Cezar-Mihai</p>
      </footer>
    </div>
  )
}

export default App
