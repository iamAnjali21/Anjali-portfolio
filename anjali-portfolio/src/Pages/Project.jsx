

function Project() {
  const projectList = [
    {
      title: "Craftora – Handmade Craft Store",
      timeframe: "Jul 2024 – Aug 2024",
      description:
        "Developed a responsive e-commerce platform using React.js, Bootstrap, and CSS. Implemented product listings, dynamic rendering, and cart functionality.",
      link: "https://handmade-craft-58zj.vercel.app/",
      github: "https://github.com/iamAnjali21/HandmadeCraft",
      tech: ["React.js", "Bootstrap", "CSS"],
    },
    {
      title: "Pet Care Management System",
      timeframe: "Nov 2024 – Dec 2024",
      description:
        "Built a Java-based desktop application using JDBC and MySQL to manage pet appointments and medical records. Supported full CRUD operations with data validation.",
      github: "https://github.com/your-username/pet-care-management",
      tech: ["Java", "JDBC", "MySQL"],
    },
    {
      title: "Weather App",
      description:
        "React-based weather forecast app using OpenWeatherMap API. Features dynamic background themes and responsive UI updates.",
      github: "https://github.com/your-username/weather-app",
      tech: ["React.js", "OpenWeatherMap API"],
    },
    {
      title: "Calculator App",
      description:
        "Built a web calculator using HTML, CSS, and JavaScript. Supports keyboard input and all standard arithmetic operations.",
      github: "https://github.com/iamAnjali21/Calculator",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Quiz App",
      description:
        "A responsive quiz app built with React that tracks scores and provides instant feedback on answer selection.",
      link: "https://your-quiz-app-link.com",
      github: "https://github.com/iamAnjali21/Quiz_App",
      tech: ["HTML", "JavaScript", "CSS"],
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="section-heading">🚀 Projects</h2>
        </div>

        <div className="row g-4">
          {projectList.map((project) => (
            <div key={project.title} className="col-md-6">
              <div className="project-card h-100 p-4 rounded shadow-sm">
                <h5 className="project-title mb-1">{project.title}</h5>
                {project.timeframe && (
                  <p
                    className="text-muted fst-italic"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {project.timeframe}
                  </p>
                )}
                <p className="project-description">{project.description}</p>
                {project.tech && project.tech.length > 0 && (
                  <p className="project-tech">
                    <strong>Tech Stack:</strong> {project.tech.join(", ")}
                  </p>
                )}
                <div className="d-flex gap-2 mt-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 View Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 GitHub
                    </a>
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

export default Project;
