import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Globe,
  Terminal,
  ChevronDown,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  Award,
  Menu,
  X,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import { useState } from "react";

const skills = [
  {
    icon: <Code2 size={25} />,
    title: "Java",
    items: [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "DSA",
    ],
  },
  {
    icon: <Server size={25} />,
    title: "Backend",
    items: [
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "JDBC",
      "Servlets",
    ],
  },
  {
    icon: <Globe size={25} />,
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive UI",
    ],
  },
  {
    icon: <Database size={25} />,
    title: "Database",
    items: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "JPA",
      "Database Design",
    ],
  },
  {
    icon: <Terminal size={25} />,
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Postman",
    ],
  },
  {
    icon: <Layers3 size={25} />,
    title: "Concepts",
    items: [
      "Data Structures",
      "Algorithms",
      "MVC",
      "REST Architecture",
      "JWT",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "ShipTrack Pro",
    category: "Full Stack Shipment Management",
    description:
      "A full-stack shipment management platform designed to manage shipments, track deliveries, handle users and roles, and manage proof of delivery.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Hibernate",
    ],
    features: [
      "Shipment creation and management",
      "Real-time shipment tracking",
      "JWT authentication",
      "Role-based access control",
      "Proof of Delivery",
      "Customer signature verification",
    ],
    github: "https://github.com/Likhithaakkili",
    featured: true,
  },
  {
    number: "02",
    title: "Chatbot Emotion Recognition",
    category: "AI / Machine Learning",
    description:
      "An intelligent chatbot project focused on emotion recognition and music recommendation using natural language processing and deep learning techniques.",
    technologies: [
      "Python",
      "NLP",
      "CNN",
      "LSTM",
      "BERT",
    ],
    features: [
      "Emotion classification",
      "Natural language processing",
      "Deep learning models",
      "Music recommendation",
    ],
    github: "https://github.com/Likhithaakkili",
    featured: false,
  },
  {
    number: "03",
    title: "HR Attrition Prediction",
    category: "Machine Learning",
    description:
      "A machine learning project designed to analyze employee information and predict potential employee attrition.",
    technologies: [
      "Python",
      "Machine Learning",
      "IBM Watson",
      "Data Analysis",
    ],
    features: [
      "Employee data analysis",
      "Attrition prediction",
      "Feature analysis",
      "Predictive modeling",
    ],
    github: "https://github.com/Likhithaakkili",
    featured: false,
  },
];

const experiences = [
  {
    year: "Feb 2026 — Present",
    role: "Java Full Stack Trainee",
    company: "J Spiders",
    location: "Bengaluru",
    description:
      "Developing practical knowledge in Java full-stack development and working with backend, frontend and database technologies.",
    technologies: [
      "Core Java",
      "Advanced Java",
      "JDBC",
      "Servlets",
      "Hibernate",
      "Spring Boot",
      "SQL",
      "JavaScript",
    ],
  },
  {
    year: "Project Experience",
    role: "Software Development Intern",
    company: "Glossary Soft Tech Pvt Ltd",
    location: "Remote",
    description:
      "Worked on AI and machine learning based projects involving emotion recognition, natural language processing and predictive analytics.",
    technologies: [
      "Python",
      "NLP",
      "CNN",
      "LSTM",
      "BERT",
    ],
  },
];

const certifications = [
  {
    title: "Data Structures and Algorithms using Java",
    provider: "Infosys Springboard",
    date: "March 2026",
  },
  {
    title: "Programming using Java",
    provider: "Infosys Springboard",
    date: "March 2026",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            <span>L</span>
            <strong>Likhitha</strong>
          </a>

          <nav
            className={`nav-links ${
              menuOpen ? "active" : ""
            }`}
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="nav-button"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-grid"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small-title">
              HELLO, I'M
            </p>

            <h1>
              Likhitha
              <span> Akkili</span>
            </h1>

            <h2>
              Java <span>Full Stack</span> Developer
            </h2>

            <p className="hero-description">
              I build clean, scalable and user-focused web
              applications using Java, Spring Boot, React and
              SQL. I enjoy turning ideas into practical software
              solutions.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <Download size={18} />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Likhitha_Akkili_Resume.pdf"
                className="secondary-button"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/Likhithaakkili"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/likhithaakkili"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:likhithaakkili@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="orbit orbit-one"></div>

            <div className="orbit orbit-two"></div>

            <div className="developer-card">

              <div className="card-top">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="card-file">
                  developer.java
                </span>

              </div>

              <div className="code-content">

                <p>
                  <span className="code-keyword">
                    public class
                  </span>{" "}
                  <span className="code-name">
                    Developer
                  </span>{" "}
                  {"{"}
                </p>

                <p className="indent">
                  <span className="code-keyword">
                    String
                  </span>{" "}
                  name ={" "}
                  <span className="code-string">
                    "Likhitha"
                  </span>
                  ;
                </p>

                <p className="indent">
                  <span className="code-keyword">
                    String
                  </span>{" "}
                  role ={" "}
                  <span className="code-string">
                    "Java Full Stack Developer"
                  </span>
                  ;
                </p>

                <p className="indent">
                  <span className="code-keyword">
                    String[]
                  </span>{" "}
                  skills = {"{"}
                </p>

                <p className="double-indent">
                  <span className="code-string">
                    "Java"
                  </span>
                  ,{" "}
                  <span className="code-string">
                    "Spring Boot"
                  </span>
                  ,
                </p>

                <p className="double-indent">
                  <span className="code-string">
                    "React"
                  </span>
                  ,{" "}
                  <span className="code-string">
                    "SQL"
                  </span>
                </p>

                <p className="indent">
                  {"};"}
                </p>

                <p>{"}"}</p>

              </div>

            </div>

            <div className="floating-badge badge-java">
              <Code2 size={18} />
              <span>Java</span>
            </div>

            <div className="floating-badge badge-react">
              <Globe size={18} />
              <span>React</span>
            </div>

            <div className="floating-badge badge-spring">
              <Server size={18} />
              <span>Spring Boot</span>
            </div>

          </div>

        </div>

        <a
          href="#about"
          className="scroll-indicator"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={18} />
        </a>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <p className="section-label">
              01 — ABOUT ME
            </p>

            <h2>
              Building solutions,
              <span> learning every day.</span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-text">

              <p className="large-text">
                I'm a Computer Science and Engineering graduate
                passionate about building reliable and
                user-friendly software.
              </p>

              <p>
                My primary focus is Java full-stack development.
                I enjoy working across the application stack —
                from designing REST APIs and database structures
                to creating responsive React interfaces.
              </p>

              <p>
                Through my internship and projects, I've gained
                hands-on experience with Java, Spring Boot,
                Hibernate, SQL, React, JavaScript and Git.
              </p>

              <p>
                I'm continuously improving my problem-solving
                and Data Structures & Algorithms skills while
                building real-world applications.
              </p>

              <div className="about-details">

                <div>
                  <MapPin size={18} />
                  <span>India</span>
                </div>

                <div>
                  <GraduationCap size={18} />
                  <span>
                    B.Tech CSE · 2022–2026
                  </span>
                </div>

              </div>

            </div>

            <div className="about-stats">

              <div className="stat-card">
                <strong>7.8</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card">
                <strong>2026</strong>
                <span>Graduation</span>
              </div>

              <div className="stat-card">
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

              <div className="stat-card">
                <strong>3+</strong>
                <span>Major Projects</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-container">

          <div className="section-heading center">

            <p className="section-label">
              02 — SKILLS
            </p>

            <h2>
              My technical
              <span> toolkit.</span>
            </h2>

            <p className="heading-description">
              Technologies and tools I use to design, develop
              and deliver applications.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>
                  {skill.title}
                </h3>

                <div className="skill-list">

                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <p className="section-label">
              03 — EXPERIENCE
            </p>

            <h2>
              Where I've
              <span> learned & grown.</span>
            </h2>

          </div>

          <div className="timeline">

            {experiences.map(
              (experience, index) => (

                <div
                  className="timeline-item"
                  key={index}
                >

                  <div className="timeline-marker">
                    <Briefcase size={17} />
                  </div>

                  <div className="timeline-content">

                    <span className="timeline-date">
                      {experience.year}
                    </span>

                    <h3>
                      {experience.role}
                    </h3>

                    <h4>
                      {experience.company} ·{" "}
                      {experience.location}
                    </h4>

                    <p>
                      {experience.description}
                    </p>

                    <div className="technology-tags">

                      {experience.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <p className="section-label">
              04 — PROJECTS
            </p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>

            <p className="heading-description">
              A selection of projects that demonstrate my
              development and problem-solving skills.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className={`project-card ${
                  project.featured
                    ? "featured"
                    : ""
                }`}
                key={project.number}
              >

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={20} />
                    <ArrowUpRight size={15} />
                  </a>

                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-features">

                    {project.features.map(
                      (feature) => (

                        <div key={feature}>

                          <CheckCircle2
                            size={15}
                          />

                          <span>
                            {feature}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                  <div className="technology-tags">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="section-container">

          <div className="section-heading center">

            <p className="section-label">
              05 — EDUCATION
            </p>

            <h2>
              My academic
              <span> journey.</span>
            </h2>

          </div>

          <div className="education-card">

            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <div className="education-main">

              <span className="education-period">
                2022 — 2026
              </span>

              <h3>
                Bachelor of Technology —
                Computer Science & Engineering
              </h3>

              <h4>
                Dr. K V Subbareddy Institute of
                Technology, Kurnool
              </h4>

              <p>
                Developed a strong foundation in programming,
                data structures, databases, web development
                and software engineering.
              </p>

            </div>

            <div className="education-score">

              <strong>7.8</strong>

              <span>
                CGPA
              </span>

            </div>

          </div>

          <div className="education-card smaller">

            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <div className="education-main">

              <span className="education-period">
                2020 — 2022
              </span>

              <h3>
                Intermediate
              </h3>

              <h4>
                Sri Chaitanya, Kurnool
              </h4>

              <p>
                Board of Intermediate Education,
                Andhra Pradesh
              </p>

            </div>

            <div className="education-score">

              <strong>93%</strong>

              <span>
                Percentage
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section
        className="section certification-section"
      >

        <div className="section-container">

          <div className="section-heading center">

            <p className="section-label">
              06 — CERTIFICATIONS
            </p>

            <h2>
              Learning beyond
              <span> the classroom.</span>
            </h2>

          </div>

          <div className="certification-grid">

            {certifications.map(
              (certificate) => (

                <div
                  className="certificate-card"
                  key={certificate.title}
                >

                  <div className="certificate-icon">
                    <Award size={25} />
                  </div>

                  <div>

                    <span>
                      {certificate.date}
                    </span>

                    <h3>
                      {certificate.title}
                    </h3>

                    <p>
                      {certificate.provider}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="contact-glow"></div>

        <div className="section-container">

          <div className="contact-content">

            <p className="section-label">
              07 — CONTACT
            </p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p className="contact-description">
              I'm currently open to entry-level software
              development, Java full-stack and internship
              opportunities. If you have an opportunity or
              simply want to connect, feel free to reach out.
            </p>

            <div className="contact-buttons">

              <a
                href="mailto:likhithaakkili@gmail.com"
                className="primary-button"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://linkedin.com/in/likhithaakkili"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <Download size={18} />
                View Resume
              </a>

            </div>

            <div className="contact-details">

              <a href="mailto:likhithaakkili@gmail.com">
                <Mail size={18} />
                likhithaakkili@gmail.com
              </a>

              <a href="tel:+919986268596">
                <Phone size={18} />
                +91 9986268596
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <div className="logo">
              <span>L</span>
              <strong>Likhitha</strong>
            </div>

            <p>
              Java Full Stack Developer building practical
              digital solutions.
            </p>

          </div>

          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/Likhithaakkili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/likhithaakkili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>

            <a href="mailto:likhithaakkili@gmail.com">
              <Mail size={18} />
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Likhitha Akkili.
            All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;