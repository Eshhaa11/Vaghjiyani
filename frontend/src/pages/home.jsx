import react from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/projects";
import Testimonials from "../components/testimonials";
import Contact from "../components/contacts";
import Footer from "../components/footer";


const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        </>
    );
};

export default Home;