import react, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/projects.css";


const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({})
  })
}