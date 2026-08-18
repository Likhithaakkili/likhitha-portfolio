import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* Section Heading */}

        <div className="section-heading contact-heading">

          <p className="section-label">
            07 — CONTACT
          </p>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>

          <p className="section-description">
            I'm open to entry-level software development
            opportunities, internships and projects.
          </p>

        </div>

        {/* Contact Content */}

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            {/* Email */}

            <div className="contact-item">

              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:likhithaakkili@gmail.com">
                  likhithaakkili@gmail.com
                </a>
              </div>

            </div>

            {/* Location */}

            <div className="contact-item">

              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Location</span>

                <p>
                  Bengaluru, India
                </p>
              </div>

            </div>

            {/* Social Links */}

            <div className="contact-socials">

              <a
                href="https://github.com/LikhithaAkkili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={19} />

                GitHub

                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://linkedin.com/in/likhithaakkili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={19} />

                LinkedIn

                <ArrowUpRight size={14} />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can I help?"
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <ArrowUpRight size={17} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;