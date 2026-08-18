import { useState } from "react";
import {
  Github,
  Linkedin,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
        >
          <span className="logo-mark">L</span>

          <span className="logo-text">
            Likhitha Akkili<span></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">

          <a
            href="https://github.com/Likhithaakkili"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/likhithaakkili"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-social"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#contact"
            className="navbar-contact"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          isOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="mobile-nav-links">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact-button"
            onClick={handleLinkClick}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>

          <div className="mobile-socials">

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

          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;

