import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Our Projects</h2>
      <p>
        Take a look at some of our amazing work we have delivered for our clients.
      </p>

      <div className="projects-grid">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
      </div>

      <Link to="/projects" className="btn">
        See more
      </Link>
    </section>
  );
};

export default Projects;


