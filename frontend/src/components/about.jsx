import React from "react";
import { Link } from "react-router-dom";
import { Award, Shield, Users } from "lucide-react"; 
import "../styles/about.css";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-content" data-aos="fade-right">
        <h2>About Us</h2>
        <h3 className="tagline" data-aos="fade-up" data-aos-delay="100">
          Building excellence, shaping the future.
        </h3>
        <p data-aos="fade-up" data-aos-delay="200">
          With decades of experience, Vaghjiyani Enterprises Ltd delivers
          excellence in construction, engineering, and infrastructure
          development. We pride ourselves on quality, safety, and innovation.
        </p>

        {/* Key Highlights */}
        <div className="highlights">
          <div className="highlight" data-aos="zoom-in" data-aos-delay="300">
            <Award className="icon" />
            <p>20+ Years of Excellence</p>
          </div>
          <div className="highlight" data-aos="zoom-in" data-aos-delay="400">
            <Shield className="icon" />
            <p>Unmatched Safety Standards</p>
          </div>
          <div className="highlight" data-aos="zoom-in" data-aos-delay="500">
            <Users className="icon" />
            <p>Trusted by Global Clients</p>
          </div>
        </div>

        
        <Link
          to="/about-us"
          className="read-more-btn"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Learn More →
        </Link>
      </div>

      <div className="about-image" data-aos="fade-left">
        <img src={aboutImg} alt="About our company" className="about-img" />
      </div>
    </section>
  );
};

export default About;
