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

  return (
    <>
    <Navbar />

    <section className="projects-hero">
      <h1 data-aos="fade-down">Our Projects</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        From resedential to industrial, we deliver landmark projects that define excellence.
      </p>
    </section>

    <section className="projects-grid">
      {projects.map((project, index) => (
        <div
        className="projet-card"
        key={index}
        data-aos="zoom-in-up"
        data-aos-delay={index * 150}
      >
        <img src={project.img} alt={project.title} className="project-img" />
        <div className="project-overlay">
          <h3>{project.title}</h3>
        </div>
      </div>
      ))}
    </section>
    </>
  )
}