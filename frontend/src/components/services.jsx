import react from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import "../styles/services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p>
        We provide professional construction services, including residential,
        commercial, and infrastructure projects.
      </p>
      <ul className="service-list">
        <li>🏠 Residential Construction</li>
        <li>🏢 Commercial Projects</li>
        <li>🔨 Renovations</li>
        <li>🌉 Civil Works</li>
      </ul>

      <Link to="/services" className="btn">
        See more
      </Link>
    </section>
  );
};

export default Services;
