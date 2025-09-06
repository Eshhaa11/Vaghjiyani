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
    }
  ]
}