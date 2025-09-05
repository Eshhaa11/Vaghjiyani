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
      desc: "Custom homes and apartments with cutting-edge design and durability.",
      icon: "🏠",
    },
    {
      title: "Commercial Projects",
      desc: "Offices, malls, and complexes built to modern business standards.",
      icon: "🏢",
    },
    {
      title: "Infrastructure Development",
      desc: "Roads, highways, and bridges to support growing communities.",
      icon: "🛣️",
    },
    {
      title: "Industrial Engineering",
      desc: "Factories, warehouses, and plants with efficient layouts.",
      icon: "🏭",
    },
    {
      title: "Renovation & Remodeling",
      desc: "Breathing new life into existing spaces with modern upgrades.",
      icon: "🔨",
    },
    {
      title: "Project Management",
      desc: "End-to-end management ensuring timely and cost-effective delivery.",
      icon: "📊",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="services-page-hero">
        <h1 data-aos="fade-down">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          From design to delivery, we cover all aspects of construction and engineering.
        </p>
      </section>

      <section className="services-page-grid">
        {allServices.map((service, index) => (
          <div
            className="service-page-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="service-page-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
