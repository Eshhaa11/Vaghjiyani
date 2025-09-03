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
                    <p>
                        We build custom homes, apartments, and housing developments with 
                        modern design and durable materials.
                    </p>
                </div>

                <div className="services-card">
                    <h3>🏢 Commercial Projects</h3>
                    <p>Our team delivers reliable commerical spaces - from offices and 
                       retail shops to large-scale business complexes .
                    </p>
                </div>

                <div className="services-card">
                    <h3>🔨 Renovations & Remodeling</h3>
                    <p>
                        Transform your existing spaces with our professional renovation
                        and remodeling solutions.
                    </p>
                </div>
            </section>
        </main>
        </>
    )
}