import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import aboutImg from "../assets/about.jpg"; // ✅ Import hero image

const teamMembers = [
  { name: "Mr. Ramesh Vaghjiyani", role: "Managing Director", img: null },
  {
    name: "Mr. Hiten Vagjiyani",
    role: "Administration & Finance Director",
    img: null,
  },
];

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      <Navbar />

      <main className="about-page" aria-labelledby="about-hero-title">
        {/* ✅ Hero with imported background */}
        <header
          className="about-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(60,59,110,0.92), rgba(60,59,110,0.92)), url(${aboutImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="hero-inner" data-aos="fade-up">
              <h1 id="about-hero-title">About Vaghjiyani Enterprises</h1>
              <p className="hero-lead">
                Delivering durable, on-time construction solutions with
                engineering rigor, transparent communication, and a client-first
                approach.
              </p>
            </div>
          </div>
        </header>

        {/* Mission & Vision */}
        <section
          className="container mission-vision"
          aria-labelledby="mv-title"
        >
          <div className="mv-left" data-aos="fade-right">
            <h2 id="mv-title">Our Mission</h2>
            <p>
              To deliver high-quality, safe and sustainable construction
              solutions that create long-term value for our clients and
              communities.
            </p>
            <ul className="mv-list">
              <li>
                <strong>Safety-first:</strong> We prioritize people and
                processes.
              </li>
              <li>
                <strong>On-time delivery:</strong> Clear timelines, reliable
                execution.
              </li>
              <li>
                <strong>Quality & durability:</strong> Built to last — no
                shortcuts.
              </li>
            </ul>
          </div>

          <div className="mv-right" data-aos="fade-left">
            <h2>Our Vision</h2>
            <p>
              To be recognized as a trusted construction partner known for
              technical excellence, sustainable practices, and respectful client
              relationships.
            </p>

            <div className="mv-stats">
              <div className="stat">
                <div className="stat-num">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-num">200+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-num">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section
          className="container team-section"
          aria-labelledby="team-title"
        >
          <div className="section-head" data-aos="fade-up">
            <h2 id="team-title">Meet Our Team</h2>
            <p className="section-sub">
              Skilled professionals bringing design, engineering and field
              expertise together.
            </p>
          </div>

          <div className="team-cards" role="list">
            {teamMembers.map((m, i) => (
              <article
                className="team-card"
                key={m.name}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                role="listitem"
              >
                <div className="avatar" aria-hidden="true">
                  {m.img ? (
                    <img src={m.img} alt={m.name} />
                  ) : (
                    <svg
                      className="avatar-placeholder"
                      viewBox="0 0 64 64"
                      width="96"
                      height="96"
                      aria-hidden="true"
                    >
                      <rect width="64" height="64" rx="8" fill="#E9EDF7" />
                      <circle cx="32" cy="24" r="12" fill="#D1D9F0" />
                      <rect
                        x="14"
                        y="42"
                        width="36"
                        height="10"
                        rx="3"
                        fill="#D1D9F0"
                      />
                    </svg>
                  )}
                </div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
              </article>
            ))}
          </div>

          <div className="section-head" data-aos="fade-up">
            <h2 id="team-title">Statements</h2>
            <p className="section-statement">
              "Our greatest strength lies in the happiness of our employees and
              appreciation of our clients! <br />
              As one of the most important driving forces in developing modern
              society, real estate corporations have <br />
              become the backbone of communities. To build a happy and
              harmonious society, it is a worthwhile attempt for us <br />
              to build a happy business. We strive to fully undertake our social
              responsibility, building a green and sustainable business,
              <br />
              leading as an example of a happy business, and ultimately
              achieving the shared vision of security for our respective clients
              <br />
              We take pride in being one of the pioneer real estate firms in
              Kenya having achieved remarkable growth over the last two
              <br />
              decades and contributing significantly to the development of
              Kenya. The company has attained prominence as a leader in <br />
              the field of construction through competence, competiteveness and
              timely delivery with highest quality standards and <br />
              recognized safety perfomance. We have a long tradition of serving
              our valued stakeholders to their complete satisfaction <br />
              through efficient management and excellent workmanship, which we
              continue to maintain with our untiring efforts. In an era <br />
              of advanced technologies and new techniques, we continuously
              strive for innovation and enhanced efficiency. We are a family{" "}
              <br />
              business with a deep rooted pioneering spirit and a wealth of
              highly relevant experience. Our goal is to continue to create
              value <br />
              for our stakeholders, surrounding communities and the wider
              economy. We are proud of our past, and passionate about the future
              <br />
              moreover looking forward continuing our success alongside each of
              our partners. As we look to they years ahead, we renew our <br />
              pledge to remain commited to excellence, keep abreast of changes
              and innovations, adopt better management and construction <br />
              techniques and successfully overcome all challenges before us."

                     <p>~ Mr. Ramesh Vaghjiyani</p>

              
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUsPage;
