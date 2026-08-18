import {
  UserRound,
  GraduationCap,
  MapPin,
  Code2,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-label">
            01 — ABOUT ME
          </p>

          <h2>
            A little bit
            <span> about me.</span>
          </h2>

        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">

            <p>
              I'm Likhitha Akkili, a Computer Science and
              Engineering student with a strong interest in
              Java full-stack development.
            </p>

            <p>
              I enjoy building practical web applications
              and learning how frontend, backend and
              database technologies work together to create
              complete software solutions.
            </p>

            <p>
              Currently, I am developing my skills in Java,
              Spring Boot, SQL, JavaScript and REST APIs
              while gaining practical experience through
              projects and training.
            </p>

          </div>

          {/* Right Side */}
          <div className="about-cards">

            <div className="about-card">

              <div className="about-card-icon">
                <Code2 size={22} />
              </div>

              <div>
                <h3>
                  Java Full Stack
                </h3>

                <p>
                  Building web applications using
                  Java, Spring Boot, SQL and frontend
                  technologies.
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <h3>
                  B.Tech CSE
                </h3>

                <p>
                  Dr. K V Subbareddy Institute of
                  Technology, Kurnool · 2022–2026
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h3>
                  Location
                </h3>

                <p>
                  India
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <UserRound size={22} />
              </div>

              <div>
                <h3>
                  Career Goal
                </h3>

                <p>
                  Looking for an entry-level software
                  development opportunity.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;