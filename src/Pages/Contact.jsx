import { useState } from "react";


function Contact() {
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setResponse("⚠️ Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      setResponse("❌ Please enter a valid email address.");
      return;
    }

    setResponse("✅ Thank you for your message!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section py-5 bg-dark text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-info fw-bold">📬Contact Me</h2>
          <p className="text-muted">Feel free to reach out — I’d love to hear from you!</p>
        </div>

        <div className="row">
          {/* Left Side: Contact Info */}
          <div className="col-md-5 mb-4 mb-md-0 contact-info ">
            <h4 className="text-primary ">Get in Touch</h4>
            <ul className="list-unstyled contact-info">
              <li><strong>📧 Email:</strong>anjaliyadav21feb@gmail.com</li>
              <li><strong>📱 Phone:</strong> +91 987654321</li>
              <li><strong>📍 Location:</strong> Lucknow, India</li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-7 contact-form-box p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" placeholder="John Doe" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" placeholder="name@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" rows="5" className="form-control" placeholder="Type your message here..." required></textarea>
              </div>

              <div className="text-start">
                <button type="submit" className="btn btn-info text-white">Send Message</button>
              </div>

              {response && (
                <div className="mt-3">
                  <p className="response-message">{response}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
