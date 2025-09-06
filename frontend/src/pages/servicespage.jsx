import react, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/services.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, []);

  const allServices = [
    {
      title: "Resedntial Construction",
      desc: "Modern homes and apartments designed with precision and quality.",
      img: "/assets/services/resendtial.jpg"
    },
    {
      title: "Commercial Projects",
      desc: "High-rise offices, malls and business complexes built to last.",
      img: "/assets/services/commercial.jpg"
    },
    {
      title: "Infrastrucutre Development",
      desc: "Roads, bridges, and highwaysconnecting communities.",
      img: "/assets/services/infrastructure.jpg",
    },
    {
      title: "Industrail Engineering",
      desc: "Factories,warehouses, and plants with advanced standards.",
      img: "/assets/services/industrial.jpg",
    },
    {
      title: "Renovation & Remodeling",
      desc: "Üpgrading and modernizing spacesfor maximum value.",
      img: "/assets/services/renovation.jpg",
    }, 
    {
      title: "Project Management",
      desc: "From planning to delivery, ensuring efficiency and quality.",
      img: "/assets/services/management.jpg"
    },
  ];

  return (
    <>
    <Navbar />

    <section className="services-hero">
      <h1 data-aos="fade-down">Our Services</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Delivering excellence across construction, engineering, and infrastructure.
      </p>
    </section>

    <section className="services-grid">
      {allServices.map((service, index) => (
        <div
        className=""
        >

        </div>
      ))}

    </section>
    </>
  )
}