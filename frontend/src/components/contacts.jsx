import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-home">
      <div className="contact-home-content">
        <h2>Let's Build Together</h2>
        <p>
          Have a project in mind? Partner with Vaghjiyani Enterprises Ltd —
          delivering excellence in construction, engineering, and infrastructure
          across Nairobi and beyond.
        </p>
        <Link to="/contact" className="contact-home-btn">
          Get in Touch →
        </Link>
      </div>
    </section>
  );
};

export default Contact;
