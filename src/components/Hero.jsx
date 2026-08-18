import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUpRight,
} from "lucide-react";

import profilePhoto from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-small-title">
            HELLO, I'M
          </p>

          <h1>
            Likhitha Akkili
            <span> </span>
          </h1>

          <h2>
            Java <span>Full Stack</span> Developer
          </h2>

          <p className="hero-description">
            Computer Science and Engineering student
            passionate about building clean, scalable and
            user-focused web applications using Java,
            Spring Boot, SQL and modern frontend
            technologies.
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
              Download
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

        {/* =================================================
            PROFILE PHOTO
        ================================================= */}

        <div className="hero-visual">

          <div className="profile-photo-wrapper">

            <img
              src={profilePhoto}
              alt="Likhitha Akkili"
              className="profile-photo"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;

