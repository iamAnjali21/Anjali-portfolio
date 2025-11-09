

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
      title: "Star Rating App",
      timeframe: "Jan 2025 – Mar 2025",
      description:
        "Interactive web app built with React that lets users rate items using a 5-star system. Features real-time feedback, smooth animations, and responsive design for seamless user experience.",
      github: "https://github.com/your-username/pet-care-management",
      tech: [ "React.js","Node.js","express.js","MYSQL" ],
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
      link: "https://your-quiz-app-link.com/",
      github: "https://github.com/iamAnjali21/Quiz_App",
      tech: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "Visual Product Matcher",
      description:" AI-powered web application that identifies and matches visually similar products from uploaded images. Built with a React frontend and Node.js backend, featuring an image detection model for accurate matching and responsive design.",
      link: "https://image-matcher-jade.vercel.app/",
      github: "https://github.com/iamAnjali21/Visual_matcher",
      tech: ["React.js", "Node.js", "CSS", "AI Image Detection"],
    }
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
