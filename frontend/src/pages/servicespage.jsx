import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/servicesus.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allServices = [
    {
      title: "Building Construction",
      desc: `CIVIL SERVANTS HOUSING SCHEME AT EMBU

DEPARTMENT OF DEFENCE, RECRUITS TRAINING SCHOOL

FOOD SCIENCE TECHNOLOGY COMPLEX FOR CHUKA UNIVERSITY

FORMULATION FACILITY

GIKOMBA QUARRY ROAD MARKET BLOCK D

IMPROVEMENT TO BITUMEN STANDARDS & PERFORMANCE BASED ROUTINE MAINTENANCE OF METEMBE - MARANI ROADS

KEMSA MODERN WAREHOUSE AND OFFICE BLOCK

KENYA HIGH SCHOOL NEW MODERN DINING HALL

LAMU PORT POLICE AND MANAGEMENT HOUSING

PAEDIATRIC EMERGENCY CENTRE AND BURNS MANAGEMENT CENTRE

PROPOSED ADMINISTRATION BLOCK AND BOUNDARY WALL FOR SPECIAL ECONOMIC ZONES AUTHORITY (SEZA) AT NAIVASHA INDUSTRIAL PARK, NAKURU COUNTY

PROPOSED SOCIAL HOUSING UNITS AND ASSOCIATED CIVIL WORKS AT MET SITE NAIROBI (LOT 1-BEDSITTERS)

PUBLIC SAFETY CENTRE AT KONZA TECHNOPOLIS

RECRUITS TRAINING SCHOOL ELDORET

RESEARCH TECHNOLOGY & INNOVATION LABORATORIES & RELATED INFRASTRUCTURE

SCHOOL OF AGRICULTURE AINABKOI

SOCIAL HOUSING PROJECT AT MET SITE

SOCIAL HOUSING PROJECT AT MET SITE - SERVICES

TUITION AND OFFICE BLOCK FOR MACHAKOS UNIVERSITY

ULTRA-MODERN LIBRARY AT EGERTON UNIVERSITY

UNIVERSITY OF KABIANGA LECTURE THEATRE PHASE IV

UNIVERSITY OF KABIANGA LIBRARY.`,
      img: "/assets/services/residential.jpg",
    },
    {
      title: "Water, Sanitation and Irrigation",
      desc: `In Water and Sanitation engineering we design infrastructure to store and direct water, having looked at the way that natural systems such as rivers behave and considered how water interacts with all aspects of the built and natural environments. 

The key sectors in Water and Sanitation Engineering include:
- Dam Engineering
- Irrigation Systems
- Urban and Rural water supply and treatment systems
- Sewerage and treatment systems
- Solid waste management
- Urban drainage and onsite sanitation

Our profile and experience has been built through the provision of the following services:

Water resources management
We have undertaken numerous ground water and surface water assignments in the region. Recent advances in simulations and database management have actively been used in these projects and modern concepts of water as an economic good, demand management and ecosystems approaches are applied to our water resources management models.

Water supply development
We cover all aspects of water supply development from water source assignments and intake structures through treatment, storage and distribution networks. These projects range from the smallest village water supply to large schemes for big cities.

Waste water management
We also undertake the planning and design of new systems and the rehabilitation of existing sewer systems in urban, industrial and rural areas. We have expertise to plan and supervise construction of mechanical, biological and chemical processes, as well as sludge handling and stabilization.

Other service areas in this field include:
- Water quality and pollution control
- Master plan and manuals preparation
- Monitoring and evaluation of projects
- Water conservation and catchment management
- Hydro-logical studies and Geo-technical investigations
- Water tariff review studies
- Water allocation plans
- Project management and construction supervision
- Feasibility studies and baseline surveys`,
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

      {/* Hero Section */}
      <section className="services-hero">
        <h1 data-aos="fade-down">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Delivering excellence across construction, engineering, and infrastructure.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {allServices.map((service, index) => (
          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={service.img}
              alt={service.title}
              className="service-img"
            />
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
