import react from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/testimonials.css";

const testimonials = [
    {
        name: "Alice Johnson",
        role: "CEO, BuildRight Ltd",
        feedback: 
        "Vaghjiyani Enterprises delivered exceptional quality and professionalism throughout our project. Highly recommended!"
    },
    {
        name: "Michael Lee",
        role: "Project Manager, UrbanWorks",
        feedback:
        "The team went above and beyond too meet deadlines while maintaining top standards. Truly reliable partners.",
    },
    {
        name: "Sophia Patel",
        role: "Architect, Skyline Designs",
        feedback: 
        "Collaborating with the was smooth and efficient. Their expertise bought our vision to life flawlessly.",
    },
];
 
    const Testimonials = () => {
        return (
           <section className="testimonials">
            <div className="testimonials-header">
                
            </div>
           </section> 
        )
    }