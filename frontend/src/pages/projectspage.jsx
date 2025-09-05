import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/projects.css";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allProjects = [
    {
      title: "Skyline Towers",
      desc: "Luxury apartments with cutting-edge green technology.",
      img: "https://via.placeholder.com/400x250?text=Skyline+Towers",
    },
    {
      title: "Metro Bridge",
      desc: "Connecting urban hubs with strong, sustainable design.",
      img: "https://via.placeholder.com/400x250?text=Metro+Bridge",
    },
    {
      title: "Green Mall",
      desc: "A retail hub built with eco-friendly practices.",
      img: "https://via.placeholder.com/400x250?text=Green+Mall",
    },
    {
      title: "Harbor Terminal",
      desc: "State-of-the-art port terminal for global logistics.",
      img: "https://via.placeholder.com/400x250?text=Harbor+Terminal",
    },
    {
      title: "Innovation Park",
      desc: "Business park designed for modern tech companies.",
      img: "https://via.placeholder.com/400x250?text=Innovation+Park",
    },
    {
      title: "Highway Expansion",
      desc: "Infrastructure to ease traffic and improve transport.",
      img: "https://via.placeholder.com/400x250?text=Highway+Expansion",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="projects-page-hero">
        <h1 data-aos="fade-down">Our Projects</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Showcasing excellence in construction, engineering, and infrastructure.
        </p>
      </section>

      <section className="projects-page-grid">
        {allProjects.map((project, index) => (
          <div
            className="project-page-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-page-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default ProjectsPage;
