import {
  Code2,
  Layers3,
  Globe,
  Server,
  Database,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      icon: <Code2 size={22} />,
      skills: ["Java", "SQL"],
    },
    {
      title: "Core Concepts",
      icon: <Layers3 size={22} />,
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Frontend",
      icon: <Globe size={22} />,
      skills: ["HTML5", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      skills: [
        "JDBC",
        "Hibernate",
        "Spring Boot",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      icon: <Database size={22} />,
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools",
      icon: <Wrench size={22} />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2>
            My technical
            <span> toolkit.</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use while building
            and learning software applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div
              className="skill-card"
              key={group.title}
            >

              <div className="skill-card-top">

                <div className="skill-icon">
                  {group.icon}
                </div>

                <h3>
                  {group.title}
                </h3>

              </div>

              <div className="skill-list">

                {group.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;