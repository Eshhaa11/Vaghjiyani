import react from "react";
import {Link} from "react-router-dom";
import "../styles/services.css";


const Services = () => {
  const services = [
    {
      title: "Construction",
      desc:"High-quality resedential and commercial building solutions.",
      img: "/assets/services/construction.jpg", 
    },
    {
      title: "Engineering",
      desc: "Innovative engineering tailored to complex challenges.",
      img: "/assets/services/engineering.jpg",
    },
    {
      title: "Infrastructure",
      desc: "Road, bridges, and urban infrastructure for tomorrow.",
      img: "/assets/services/infrastructure.jpg",
    },
  ];

  return (
    <section className="services home-services">
      <div className="services-header" data-aos="fade-up">
        
      </div>
    </section>
  )
}