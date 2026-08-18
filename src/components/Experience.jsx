import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      period: "Feb 2026 — Present",
      role: "Java Full Stack Trainee",
      company: "J Spiders",
      location: "Bengaluru",

      description:
        "Building practical knowledge in Java full-stack development and working with backend, frontend and database technologies.",

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
  ];

  return (
    <section
      id="experience"
      className="experience-section"
    >

      <div className="experience-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-label">
            03 — EXPERIENCE
          </p>

          <h2>
            My professional
            <span> journey.</span>
          </h2>

          <p className="section-description">
            My training experience and the technologies
            I am currently developing my skills in.
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="experience-list">

          {experiences.map((experience) => (

            <div
              className="experience-item"
              key={experience.company}
            >

              {/* Timeline */}
              <div className="experience-timeline">

                <div className="timeline-dot"></div>

              </div>

              {/* Experience Card */}
              <div className="experience-card">

                <div className="experience-header">

                  <div>

                    <p className="experience-period">
                      <CalendarDays size={14} />
                      {experience.period}
                    </p>

                    <h3>
                      {experience.role}
                    </h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                  </div>

                  <div className="experience-icon">
                    <BriefcaseBusiness size={22} />
                  </div>

                </div>

                {/* Location */}
                <div className="experience-location">

                  <MapPin size={15} />

                  {experience.location}

                </div>

                {/* Description */}
                <p className="experience-description">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="experience-technologies">

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

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;