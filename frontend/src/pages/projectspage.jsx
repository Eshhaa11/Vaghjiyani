import react, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/projects.css";


const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, []);

  const projects = [
    {
      title: "Luxury Apartments",
      desc: "High-end residential development with modern design.",
      img: "assets/projects/apartments.jpg",
    },
    {
      title: "Corporate Towers",
      desc: "State-of-the-art office complexes in prime locations.",
      img: "/assets/projects/towers.jpg",
    },
    {
      title: "Bridge Construction",
      desc: "Major infrastructure project connecting communities.",
      img: "/assets/projects/bridge.jpg",
    },
    {
      title: "Industrial Hub",
      desc: "Factories and warehouses with advanced engineering.",
      img: "/assets/projects/industrials.jpg",
    },
  ];

  
}