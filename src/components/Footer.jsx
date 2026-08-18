import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Footer Top */}

        <div className="footer-top">

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              Likhitha
              <span>.</span>
            </a>

            <p>
              Java Full Stack Developer building
              practical and user-focused web
              applications.
            </p>

          </div>

          {/* Social Links */}

          <div className="footer-socials">

            <a
              href="https://github.com/LikhithaAkkili"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/likhithaakkili"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:likhithaakkili@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Likhitha Akkili.
            All rights reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;