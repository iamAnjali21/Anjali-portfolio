import React from "react";
import { FaCode, FaDatabase, FaTools, FaBrain, FaLaptopCode } from "react-icons/fa";

function Skill() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="me-2 text-primary" />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Bootstrap 5", level: 75 },
      ],
    },
    {
      title: "Backend",
      icon: <FaLaptopCode className="me-2 text-success" />,
      skills: [
        { name: "Core Java (OOPs, Collections)", level: 80 },
        { name: "RESTful APIs", level: 75 },
        { name: "JDBC", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="me-2 text-warning" />,
      skills: [{ name: "MySQL", level: 85 }],
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="me-2 text-info" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Postman (API Testing)", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "IntelliJ IDEA", level: 80 },
      ],
    },
    {
      title: "AI Tools",
      icon: <FaBrain className="me-2 text-danger" />,
      skills: [{ name: "ChatGPT, Gemini", level: 75 }],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5 ">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="section-heading">🛠️ My Skills</h2>
          <p className="section-description">
            A categorized view of the technologies and tools I work with.
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6">
              <div className="skill-category p-4 rounded shadow-sm ">
                <h5 className="fw-bold mb-3 d-flex align-items-center">
                  {category.icon} {category.title}
                </h5>
                {category.skills.map((skill, i) => (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
