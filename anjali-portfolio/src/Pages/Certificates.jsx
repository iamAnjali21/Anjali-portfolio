

function Certificates() {
  return (
    <div className="certificates-wrapper">
      <section id="certificates" className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">🎓 Certificates & Achievements</h2>
          <p className="section-subtitle">
            Here are some of the certificates and recognitions I’ve earned.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Certificate 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="cert-card">
              <div className="card-body">
                <h5 className="card-title">Java Programming - Udemy</h5>
                <p className="card-text">
                  Completed Java fundamentals and object-oriented programming through Udemy.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="cert-card">
              <div className="card-body">
                <h5 className="card-title">Java (Basic) - HackerRank</h5>
                <p className="card-text">
                  Certified for solving core Java challenges on HackerRank platform.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="cert-card">
              <div className="card-body">
                <h5 className="card-title">SQL (Basic) - HackerRank</h5>
                <p className="card-text">
                  Earned certification in SQL queries and data retrieval skills.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement */}
          <div className="col-12">
            <div className="cert-card">
              <div className="card-body">
                <h5 className="card-title">🏆 Participant – DevNexus Hackathon 2025</h5>
                <p className="card-text">
                  Participated in “Where Developers Converge”, showcasing creativity and innovation in real-time coding challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificates;
