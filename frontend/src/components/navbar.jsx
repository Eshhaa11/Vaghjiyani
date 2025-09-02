import react, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Vaghjiyani Enterprises Ltd</div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button className="quote-btn">Get a Quote</button></li>
            </ul>

            <div className="hamburger" onClick={() => setisOpen(!isOpen)}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;

