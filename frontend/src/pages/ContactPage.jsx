import react from "react";
import "../styles/contact.css";


const ContactPage  = () => {
    return (
        <section className="contact-page">
            <div className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Let's discuss your next project.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p><strong>📍 Address:</strong> 4th Ngong Avenue, Nairobi, Kenya</p>
                    <p><strong>📞 Phone:</strong>+254 123456789</p>
                    <p><strong>✉️ Email:</strong>abcd@gmail.com</p>
                </div>


                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    
                </form>
            </div>
        </section>
    )
}