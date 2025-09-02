import react from "react";
import "../styles/hero.css"

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <h1>Building the Future, Restoring the Past</h1>
                <p>Your trusted partner in construction excellence.</p>
                <button className="hero-btn">Get a Quote</button>
            </div>
        </section>
    );
};

export default Hero;

