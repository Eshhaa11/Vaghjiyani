import React, { useEffect } from "react";
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
      title: "Resedential Construction",
      desc: "Custom homes and apartments with cutting-edge design and durability.",
      icon: "🏠"
    },
    {
      title: "Commercial Projects",
      desc: "Offices, malls, and complexes built to modern business standards.",
      icon: "🏢"
    },
    {
      title: "Industrial Engineering",
      desc: "Factories, warehouses,, and plants with efficient layouts.",
      icon: "🏭"
    },
    {
      title: "Renovation & Remodelling",
      desc: "Breathing new life into exisiting spaces with modern upgrades.",
      icon: "🔨"
    }
  ]
};

export default ServicesPage;
