function Home() {
  return (
    <section
      id="home"
      className="home-section d-flex align-items-center justify-content-center text-white"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #0f172a 100%)',
      }}
    >
      <div className="text-center">
        <p className="text-primary fs-4 fw-semibold">Hello, I'm</p>
        <h1 className="fw-bold display-4 text-light">Anjali Yadav</h1>
        <h2 className="text fs-5 mb-4">Full Stack Developer</h2>
        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
          I specialize in building fast, scalable, and user-friendly web applications using React.js, Node.js, and modern RESTful APIs.
        </p>
        <a href="#projects" className="btn btn-primary mt-4 px-4 py-2">View Projects →</a>
      </div>
    </section>
  );
}

export default Home;
