import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";
import { title } from "framer-motion/client";

const services = () => {
  const services = [
    {
      title: "Construction",
      desc: "Delivering high-quality building solutions with precision and safety.",
      icon: "🏗️"
    },
    {
      title: "Engineering",
      desc: "Innovative engineering services tailored to complex challenges.",
      icon: "⚙️"
    },
    {
      title: "Infrastructure",
      desc: "Building roads, bridges, and facilities that shape the future.",
      icon: "🌉"
    },
  ];

  return (
    <section className="services">
      <div className="services-header" data-aos="fade-up">
      <h2>Our Services</h2>
      <p>
        We provide top-notch services across construction, engineering, and infrastructure.
      </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
          className="service-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          >
        
        <div className="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{services.desc}</p>
        </div>
        ))}
      </div>

      <div 
    </section>
  )
}