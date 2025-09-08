import react from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css"

const ContactSection = () => {
    return (
        <section className="contact-section">
           <div className="contact-container" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>
                Have a project in mind? Let's connect and bring your vision to life.
            </p>
            <Link to="/contact" className="contact-btn">
            Get in Touch →
            </Link>
           </div> 
        </section>
    );
};

export default ContactSection;