import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logoo from "../assets/logoo.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand" data-aos="fade-up">
          <h2>Vaghjiyani Enterprises Ltd</h2>
          <p>Excellence in construction, engineering, and infrastructure.</p>
          <img src={logoo} alt="Vaghjiyani Logo" className="footer-logo" />
        </div>

        {/* Quick Links */}
        <div className="footer-links" data-aos="fade-up" data-aos-delay="150">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="300">
          <h4>Contact Us</h4>
          <p>19th Floor, 4th Avenue Tower, < br /> 4th Avenue Ngong Upper Hill, < br /> Nairobi, Kenya</p>
          <p>Email: info@vaghjiyani.co.ke</p>
          <p>Phone:  +(254) 792-746-363 </p>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="450">
        <p>© {new Date().getFullYear()} Vaghjiyani Enterprises Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
