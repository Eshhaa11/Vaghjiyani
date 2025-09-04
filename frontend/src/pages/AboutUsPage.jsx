import react, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-hero">
        <h1 data-aos="fade-down">About Our Company</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          We empower businesses and individuals with innovative solutions that
          drive growth and success.
        </p>
      </section>

      <section className="mission-vision">
        <div data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional solutions that help businesses thrive while
            maintaining integrity, quality and innovation at the core of
            everything we do
          </p>
        </div>

        <div data-aos="fade-left">
          <h2>Our Vision</h2>
          <p>
            To be a trusted partner globally, recognized for excellence in
            delivering solutions that transform businesses and inspire growth.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up">Meet Our Team</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            A group of passionate professionals dedicated to bringing the best
            solutions to our clients.
          </p>
        </div>

        <div className="team-cards">
            {["Alice", "Bob", "Charlie"].map((member, index) => (
                <div
                key={member}
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                
                
                
                >
                </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
