import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      title: "Construction",
      desc: "High-quality residential and commercial building solutions.",
      img: "/assets/services/construction.jpg",
    },
    {
      title: "Engineering",
      desc: "Innovative engineering tailored to complex challenges.",
      img: "/assets/services/engineering.jpg",
    },
    {
      title: "Infrastructure",
      desc: "Roads, bridges, and urban infrastructure for tomorrow.",
      img: "/assets/services/infrastructure.jpg",
    },
  ];

  return (
    <section className="services home-services">
      <div className="services-header" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          We provide a complete range of construction and engineering solutions
          designed to deliver excellence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/services" className="services-btn" data-aos="zoom-in">
          View All Services →
        </Link>
      </div>
    </section>
  );
};

export default Services;