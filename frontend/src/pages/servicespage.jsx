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
PROPOSED ADMINISTRATION BLOCK AND BOUNDARY WALL FOR SEZA AT NAIVASHA INDUSTRIAL PARK
PROPOSED SOCIAL HOUSING UNITS AT MET SITE NAIROBI
PUBLIC SAFETY CENTRE AT KONZA TECHNOPOLIS
RECRUITS TRAINING SCHOOL ELDORET
RESEARCH TECHNOLOGY & INNOVATION LABORATORIES
SCHOOL OF AGRICULTURE AINABKOI
SOCIAL HOUSING PROJECT AT MET SITE
SOCIAL HOUSING PROJECT AT MET SITE - SERVICES
TUITION AND OFFICE BLOCK FOR MACHAKOS UNIVERSITY
ULTRA-MODERN LIBRARY AT EGERTON UNIVERSITY
UNIVERSITY OF KABIANGA LECTURE THEATRE PHASE IV
UNIVERSITY OF KABIANGA LIBRARY.`,
    },
    {
      title: "Water, Sanitation and Irrigation",
      desc: `In Water and Sanitation engineering, we design infrastructure to store and direct water having looked at natural systems such as rivers and considered how water interacts with the built and natural environments.

Key sectors in Water and Sanitation Engineering include:
- Dam Engineering
- Irrigation Systems
- Urban and Rural water supply and treatment systems
- Sewerage and treatment systems
- Solid waste management
- Urban drainage and onsite sanitation

Our profile and experience has been built through:
• Water resources management
• Water supply development
• Waste water management
• Water quality and pollution control
• Master plan and manuals preparation
• Monitoring and evaluation of projects
• Water conservation and catchment management
• Hydro-logical studies and Geo-technical investigations
• Water tariff review studies
• Water allocation plans
• Project management and supervision
• Feasibility studies and baseline surveys`,
    },
    {
      title: "Transportation",
      desc: `VEL has over 20 years of experience, knowledge, and management in Road and Bridges construction.

### Planning and Design
Before construction begins, extensive planning is carried out. Key considerations:
- Traffic volume and location
- Terrain and soil properties
- Utility lines, drainage and sewers
- Climate, environmental and residential requirements
- Future expansion possibilities
- Road maintenance costs

### Construction Stages
**Excavation & Earthwork**
- Clearing vegetation and preparing land
- Mounting, grading, aggregating for stabilization

**Paving**
- Gravel Layer (frost blanket)
- Base Layer (bitumen, cement, lime binders)
- Surface Layer (friction, smoothness, drainage)

### Road Types
- Concrete Roads
- Gravel Roads
- Low Volume Seal Roads
- Asphalt Roads
- Earthen Roads
- Kankar Roads`,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="services-hero">
        <h1 data-aos="fade-down">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Delivering excellence across construction, engineering, and infrastructure.
        </p>
      </section>

      {/* Services */}
      <section className="services-wrapper">
        {allServices.map((service, index) => (
          <div
            key={index}
            className="service-block"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h2>{service.title}</h2>
            <p className="service-text">{service.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
