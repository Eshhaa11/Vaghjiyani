import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

import constructionImg from "../assets/construction.jpg";
import engineeringImg from "../assets/engineering.jpeg";
import infrastructureImg from "../assets/infrastructure.jpg";

const Services = () => {
  const services = [
    {
      title: "Construction",
      desc: "From groundbreaking to handover, we deliver durable residential and commercial spaces with precision.",
      img: constructionImg,
    },
    {
      title: "Engineering",
      desc: "Innovative engineering solutions that address complex challenges with efficiency and expertise.",
      img: engineeringImg,
    },
    {
      title: "Infrastructure",
      desc: "Roads, bridges, and large-scale infrastructure built to serve communities for generations.",
      img: infrastructureImg,
    },
  ];

  return (
    <section className="services">
      <div className="services-header" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          At Vaghjiyani Enterprises Ltd, we blend innovation with craftsmanship
          to deliver projects that define excellence.
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
            <div className="service-img-wrapper">
              <img src={service.img} alt={service.title} className="service-img" />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/services" className="services-btn" data-aos="zoom-in">
          Explore All Services →
        </Link>
      </div>
    </section>
  );
};

export default Services;
