import react from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";


const Footer = () => {
   return (
    <footer className="footer">
        <div className="footer-container">
          <div className="footer-band">
            <h2>Vaghjiyani Enterprises Ltd</h2>
            <p>Excellence in construction, engineering, and infrastructure.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                
            </ul>
          </div>


        </div>
    </footer>
   ) 
}