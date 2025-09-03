import react from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ServicesPage = () => {
    return (
        <>
        <Navbar />
        <main className="services-pages">
            <header className="page-header">
                <h1>Our Services</h1>
                <p>
                    From resedential homes to commercial developments, we provide
                    high-quality construction services tailored to your needs.
                </p>
            </header>

            <section className="services-grid">
                <div className="service-card">
                    <h3>🏠 Resedential Construction</h3>
                </div>
            </section>
        </main>
        </>
    )
}