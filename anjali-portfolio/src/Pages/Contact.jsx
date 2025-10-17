import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔎 Log the data before sending
    console.log("Form data before sending:", formData);

    try {
      const res = await axios.post(
        "https://portfolio-backend-cqql.onrender.com/send-email", // Update with your backend URL
        formData,
        { headers: { "Content-Type": "application/json" } } // ensure JSON
      );

      // 🔎 Log server response
      console.log("Server response:", res.data);

      alert("✅ Your message was sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      //console.error("❌ Error sending message:", error.response?.data || error.message);
      alert("❌ Failed to send your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section py-5 text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-info fw-bold">📬 Contact Me</h2>
          <p className="text-muted">Feel free to reach out — I’d love to hear from you!</p>
        </div>

        <div className="row">
          {/* Left Side: Contact Info */}
          <div className="col-md-5 mb-4 mb-md-0 contact-info">
            <h4 className="text-primary">Get in Touch</h4>
            <ul className="list-unstyled contact-info">
              <li><strong>📧 Email:</strong> anjaliyadav21feb@gmail.com</li>
              <li><strong>📱 Phone:</strong> +91 9889624212</li>
              <li><strong>📍 Location:</strong> Lucknow, India</li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-7 contact-form-box p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-start">
                <button type="submit" className="btn btn-info text-white">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
