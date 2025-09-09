import React from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";


import skylineImg from "../assets/skyline.jpg";
import metroImg from "../assets/metro.jpg";
import greenmallImg from "../assets/greenmall.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Skyline Towers",
      desc: "A modern residential complex with sustainable design.",
      img: skylineImg,
    },
    {
      title: "Metro Bridge",
      desc: "A landmark bridge project enhancing urban connectivity.",
      img: metroImg,
    },
    {
      title: "Green Mall",
      desc: "Eco-friendly commercial mall with innovative architecture.",
      img: greenmallImg,
    },
  ];

  return (
    <section className="projects">
      <div className="projects-header" data-aos="fade-up">
        <h2>Our Projects</h2>
        <p>
          Delivering world-class projects that stand the test of time, shaping
          the world's future with innovation and quality.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/projects" className="projects-btn" data-aos="zoom-in">
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
