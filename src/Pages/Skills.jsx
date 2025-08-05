import React from 'react';
import { FaCode, FaDatabase, FaTools, FaBrain, FaLaptopCode,} from 'react-icons/fa';


function Skill() {
  const skills = [
    { name: 'HTML5', icon: <FaCode /> },
    { name: 'CSS3', icon: <FaCode /> },
    { name: 'JavaScript (ES6+)', icon: <FaCode /> },
    { name: 'React.js', icon: <FaLaptopCode /> },
    { name: 'Core Java (OOPs, Collections)', icon: <FaLaptopCode /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'JDBC', icon: <FaDatabase /> },
    { name: 'RESTful APIs', icon: <FaTools /> },
    { name: 'Postman (API Testing)', icon: <FaTools /> },
    { name: 'VS Code', icon: <FaTools /> },
    { name: 'IntelliJ IDEA', icon: <FaTools /> },
    { name: 'Git & GitHub', icon: <FaTools /> },
    { name: 'AI Tools (ChatGPT, Gemini)', icon: <FaBrain /> },
    { name: 'Bootstrap 5', icon: <FaCode /> },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="section-heading">🛠️ My Skills</h2>
          <p className="section-description">
            A quick overview of the technologies, tools, and platforms I use to build scalable and maintainable applications.
          </p>
        </div>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div className="skill-card text-center p-4 h-100 rounded shadow-sm">
                <div className="icon fs-3 mb-3 text-skill">{skill.icon}</div>
                <h6 className="skill-name fw-semibold">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
