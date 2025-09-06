import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/services.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allServices = [
    {
      title: "Residential Construction",
      desc: "Modern homes and apartments designed with precision and quality.",
      img: "/assets/services/residential.jpg",
    },
    {
      title: "Commercial Projects",
      desc: "High-rise offices, malls, and business complexes built to last.",
      img: "/assets/services/commercial.jpg",
    },
    {
      title: "Infrastructure Development",
      desc: "Roads, bridges, and highways connecting communities.",
      img: "/assets/services/infrastructure.jpg",
    },
    {
      title: "Industrial Engineering",
      desc: "Factories, warehouses, and plants with advanced standards.",
      img: "/assets/services/industrial.jpg",
    },
    {
      title: "Renovation & Remodeling",
      desc: "Upgrading and modernizing spaces for maximum value.",
      img: "/assets/services/renovation.jpg",
    },
    {
      title: "Project Management",
      desc: "From planning to delivery, ensuring efficiency and quality.",
      img: "/assets/services/management.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="services-hero">
        <h1 data-aos="fade-down">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Delivering excellence across construction, engineering, and
          infrastructure.
        </p>
      </section>

      <section className="services-grid">
        {allServices.map((service, index) => (
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
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
