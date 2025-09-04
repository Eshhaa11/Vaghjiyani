import React from "react";
import "../styles/about.css"
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
            <h2>About Us</h2>
            <p>
                With decades of experience, Vaghjiyani Enterprises Ltd delivers
                excellence in construction, engineering, and infrastrucutre development.
                We pride ourselves on quality, safety, and innovation.
            </p>
            <Link to="/about" className="read-more">Read More</Link>
            </div>
            <div className="about-image">
                <img src={aboutImg} alt="About our Company" />
            </div>
        </section>

    );
};

export default About;