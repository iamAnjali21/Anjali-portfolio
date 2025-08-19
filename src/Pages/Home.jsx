import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <p className="text-primary fs-2 fw-semibold">Hello, I'm</p>
            <h1 className="fw-bold display-4 text-light">Anjali Yadav</h1>
            <h2 className="fs-5 text-white mb-4">Full Stack Developer</h2>
            <p className="lead text-white mb-4">
              I specialize in building fast, scalable, and user-friendly web
              applications using React.js, Node.js, and modern RESTful APIs.
            </p>
            <div className="mt-4">
              <a href="#projects" className="btn btn-primary me-2 px-4 py-2">
                View Projects →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                View Resume →
              </a>
            </div>
          </div>

          {/* Right Side Image + Socials */}
          <div className="col-md-6 d-flex flex-column align-items-center mt-4 mt-md-0">
            <div className="image-wrapper mb-3">
              <img
                src="/photo.png"
                alt="Anjali Yadav"
                className="img-fluid"
              />
            </div>
            
            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/iamanjali21/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/iamAnjali21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-3"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
