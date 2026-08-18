import {
  Award,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

function Certifications() {
  const certifications = [
    {
      title: "Data Structures and Algorithms using Java",
      provider: "Edu Skills",
      date: "March 2026",
    },
    {
      title: "Programming using Java",
      provider: "Infosys Springboard",
      date: "March 2026",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        {/* Section Heading */}

        <div className="section-heading">

          <p className="section-label">
            06 — CERTIFICATIONS
          </p>

          <h2>
            Learning &
            <span> certifications.</span>
          </h2>

          <p className="section-description">
            Certifications that strengthen my programming
            and problem-solving skills.
          </p>

        </div>

        {/* Certification Cards */}

        <div className="certifications-list">

          {certifications.map((certificate) => (

            <div
              className="certification-card"
              key={certificate.title}
            >

              {/* Icon */}

              <div className="certification-icon">
                <Award size={24} />
              </div>

              {/* Content */}

              <div className="certification-content">

                <h3>
                  {certificate.title}
                </h3>

                <p className="certification-provider">
                  {certificate.provider}
                </p>

                <div className="certification-date">

                  <CalendarDays size={14} />

                  {certificate.date}

                </div>

              </div>

              {/* Verified */}

              <div className="certification-status">
                <CheckCircle2 size={18} />
                <span>Certified</span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;