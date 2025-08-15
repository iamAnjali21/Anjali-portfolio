function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm">
        <div className="container">
          
          {/* Brand with Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img
              src="/photo.png"   // place logo in public/logo.png
              alt="Logo"
              width="40"
              height="40"
              className="me-2 rounded-circle"
            />
            <span className="fw-bold text-primary">
              Anjali <span className="text-white">Yadav</span>
            </span>
          </a>

          {/* Navbar Links */}
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
