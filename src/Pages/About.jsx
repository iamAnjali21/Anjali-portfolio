import React from 'react';



function AboutMe() {
  return (
    <section id="about" className="py-5 bg-dark text-light">
      <div className="container">

        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-info">👋 About Me</h2>
          <p className="lead text-muted">
            Full Stack Developer passionate about crafting clean, scalable web applications using React & Node.js.
          </p>
        </div>

        {/* About Box */}
        <div className="custom-box mb-5">
          <h3 className="text-success mb-3">Who I Am</h3>
          <p>
            I’m a full stack developer focused on building modern, responsive web apps with clean architecture and maintainable code.
            With strong experience in React.js and Node.js, I specialize in bridging backend logic with frontend performance.
          </p>
          <p>
            Currently pursuing my Master's in Computer Applications, I’m driven by a passion for learning and solving real-world problems through software.
            My development approach combines efficiency, scalability, and simplicity.
          </p>
        </div>

        {/* Education Box */}
        <div className="custom-box">
          <h4 className="text-primary mb-3">🎓 Education</h4>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>Master of Computer Applications</strong><br />
              VIT Bhopal, 2024 – 2026
            </li>
            <li>
              <strong>Bachelor of Computer Science</strong><br />
              University of Lucknow, 2020 – 2023
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
