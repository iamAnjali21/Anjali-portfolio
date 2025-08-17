import React from "react";
import { FaUserAlt, FaGraduationCap } from "react-icons/fa";

function AboutMe() {
  return (
    <section id="about" className="py-5  text-light">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-info">👋 About Me</h2>
          <p className="lead text-muted">
            Full Stack Developer passionate about crafting clean, scalable web applications.
          </p>
        </div>

        <div className="row g-4">
          {/* Who I Am */}
          <div className="col-md-6">
            <div className="p-4 rounded shadow-sm bg-black h-100">
              <h3 className="text-success d-flex align-items-center mb-3">
                <FaUserAlt className="me-2" /> Who I Am
              </h3>
              <p>
                I’m a full stack developer focused on building modern, responsive
                web apps with clean architecture and maintainable code.
              </p>
              <p>
                With strong experience in React.js and Node.js, I specialize in
                bridging backend logic with frontend performance.
              </p>
              <p>
                Currently pursuing my Master's in Computer Applications, I’m
                driven by a passion for learning and solving real-world problems
                through software.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="col-md-6">
            <div className="p-4 rounded shadow-sm bg-black h-100">
              <h3 className="text-success d-flex align-items-center mb-3">
                <FaGraduationCap className="me-2" /> Education
              </h3>
              <ul className="timeline list-unstyled">
                <li className="mb-4">
                  <div className="fw-bold">Master of Computer Applications</div>
                  <div className="text">VIT Bhopal, 2024 – 2026</div>
                </li>
                <li>
                  <div className="fw-bold">Bachelor of Computer Applications</div>
                  <div className="text">University of Lucknow, 2020 – 2023</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
