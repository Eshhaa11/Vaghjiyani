import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-home">
      <div className="contact-home-container">
        {/* Left side */}
        <div
          className="contact-home-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Let’s Build Something Great Together</h2>
          <p>
            Have a project in mind? Partner with Vaghjiyani Enterprises Ltd —
            delivering excellence in construction, engineering, and
            infrastructure across Nairobi and beyond.
          </p>
          <Link to="/contact" className="contact-home-btn">
            Get in Touch →
          </Link>
        </div>

        {/* Right side */}
        <div
          className="contact-home-visual"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="visual-overlay" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
