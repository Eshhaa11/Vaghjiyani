import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import aboutImg from "../assets/about.png"; 
import AboutUs from "../pages/AboutUsPage";

const About = () => {
  return (
    <section className="about">
      <div className="about-content" data-aos="fade-right">
        <h2>About Us</h2>
        <h3 className="tagline" data-aos="fade-up" data-aos-delay="100">
          Developing Future, Building Excellence.
        </h3>
        <p data-aos="fade-up" data-aos-delay="200">
          With decades of experience, Vaghjiyani Enterprises Ltd delivers
          excellence in construction, engineering, and infrastructure development. 
          We pride ourselves on quality, safety, and innovation.
        </p>


        <div className="highlights">
          
        </div>
        <Link to="/about-us" className="read-more" data-aos="zoom-in" data-aos-delay="400">
        Read More →
        </Link>

      </div>

      <div className="about-image" data-aos="fade-left">
        <img src={aboutImg} alt="About our company" />
      </div>
    </section>
  );
};

export default About;
