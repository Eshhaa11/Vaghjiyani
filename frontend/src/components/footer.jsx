import react from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
       <footer className="footer">
        <p>© {new Date().getFullYear()} Vaghjiyani Enterprises Ltd. All rights reserved.</p>
       </footer>
    );
};

export default Footer;

