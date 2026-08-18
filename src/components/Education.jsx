import {
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";

function Education() {
  const education = [
    {
      period: "2022 — 2026",
      degree: "B.Tech — Computer Science & Engineering",
      college:
        "Dr. K V Subbareddy Institute of Technology",
      location: "Kurnool",
      score: "7.8",
      scoreLabel: "CGPA",
    },

    {
      period: "2020 — 2022",
      degree: "Intermediate",
      college: "Sri Chaitanya",
      location: "Kurnool",
      score: "93%",
      scoreLabel: "Percentage",
    },
  ];

  return (
    <section
      id="education"
      className="education-section"
    >

      <div className="education-container">

        {/* Section Heading */}

        <div className="section-heading">

          <p className="section-label">
            05 — EDUCATION
          </p>

          <h2>
            My academic
            <span> background.</span>
          </h2>

          <p className="section-description">
            My educational journey and academic
            qualifications.
          </p>

        </div>

        {/* Education Cards */}

        <div className="education-list">

          {education.map((item) => (

            <div
              className="education-card"
              key={item.degree}
            >

              {/* Icon */}

              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              {/* Content */}

              <div className="education-content">

                <div className="education-period">

                  <CalendarDays size={14} />

                  {item.period}

                </div>

                <h3>
                  {item.degree}
                </h3>

                <p className="education-college">
                  {item.college}
                </p>

                <div className="education-location">

                  <MapPin size={14} />

                  {item.location}

                </div>

              </div>

              {/* Score */}

              <div className="education-score">

                <strong>
                  {item.score}
                </strong>

                <span>
                  {item.scoreLabel}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;