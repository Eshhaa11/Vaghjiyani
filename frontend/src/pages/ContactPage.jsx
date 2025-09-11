import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contactus.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      <Navbar />

      <section className="contact-page">
        {/* Hero Section */}
        <div className="contact-hero" data-aos="zoom-in">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Let’s discuss your next project.</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info" data-aos="fade-right">
            <h3>Get in Touch</h3>
            <p>
              <strong>📍 Address:</strong>
              <br />
              19th Floor, 4th Avenue Tower,
              <br />
              4th Avenue Ngong Upper Hill,
              <br />
              Nairobi, Kenya
            </p>
            <p>
              <strong>📞 Phone:</strong> +254 792 746 363
            </p>
            <p>
              Mon to Fri 8:00am – 4:30pm
              <br />
              Sat 8:00am – 12:30pm
              <br />
              Sun – Closed
            </p>
            <p>
              <strong>✉️ Email:</strong> info@vaghjiyani.co.ke
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" data-aos="fade-left">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container" data-aos="fade-up">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8019455112144!2d36.80572717448297!3d-1.2932939356327926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c182873fdb%3A0x6ae05cdc54a08dd8!2s4th%20Ngong%20Avenue%20Towers!5e0!3m2!1sen!2ske!4v1757584659245!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
