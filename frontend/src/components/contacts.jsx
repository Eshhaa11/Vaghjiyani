import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import contactImg from "../assets/Contactt.png"; // import image

const Contact = () => {
  return (
    <section className="contact-home">
      <div className="contact-home-container">
        <div className="contact-home-content" data-aos="fade-right">
          <h2>Let's Build Together</h2>
          <p>
            Have a project in mind? Partner with Vaghjiyani Enterprises Ltd —
            delivering excellence in construction, engineering, and infrastructure.
          </p>
          <Link to="/contact" className="contact-home-btn">
            Get in Touch →
          </Link>
        </div>

        <div
          className="contact-home-visual"
          style={{ backgroundImage: `url(${contactImg})` }}
          data-aos="fade-left"
        ></div>
      </div>
    </section>
  );
};

export default Contact;
