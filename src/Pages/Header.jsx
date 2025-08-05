


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            Anjali <span className="text-white">Yadav</span>
          </a>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
             </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
