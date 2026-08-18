import {
  ArrowUpRight,
  Github,
} from "lucide-react";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-label">
            04 — PROJECT
          </p>

          <h2>
            Featured
            <span> project.</span>
          </h2>

          <p className="section-description">
            A full-stack project where I applied my
            Java, Spring Boot, database and frontend
            development skills.
          </p>

        </div>

        {/* ShipTrack Pro */}
        <article className="project-card project-featured">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <p className="project-category">
              FULL STACK WEB APPLICATION
            </p>

            <h3>
              ShipTrack Pro
            </h3>

            <p className="project-description">
              A shipment management and tracking
              application designed to manage shipments,
              track deliveries and provide a centralized
              logistics workflow.
            </p>

            {/* Features */}
            <div className="project-features">

              <div className="project-feature">
                <span className="feature-dot"></span>
                Shipment creation and management
              </div>

              <div className="project-feature">
                <span className="feature-dot"></span>
                Shipment tracking
              </div>

              <div className="project-feature">
                <span className="feature-dot"></span>
                JWT authentication
              </div>

              <div className="project-feature">
                <span className="feature-dot"></span>
                Role-based access control
              </div>

              <div className="project-feature">
                <span className="feature-dot"></span>
                Proof of Delivery
              </div>

              <div className="project-feature">
                <span className="feature-dot"></span>
                Customer signature verification
              </div>

            </div>

            {/* Technologies */}
            <div className="project-technologies">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>PostgreSQL</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>JWT</span>

            </div>

            {/* GitHub */}
            <div className="project-links">

              <a
                href="https://github.com/Likhithaakkili"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={17} />

                GitHub

                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
}

export default Projects;