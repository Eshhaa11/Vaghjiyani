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
      title: "Infrastrucutre development",
      desc: "Roads, bridges, and highwaysconnecting communities.",
      img: "/assets/services/infrastructure.jpg",
    },
    {
      title: "Industrail Engineering",
      
    }
  ]
}