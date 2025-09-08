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
             <h2 data-aos="fade-up">What Our Clients Say</h2>   
             <p data-aos="fade-up" data-aos-delay="200">
            Trusted by leading companies and professionals in construction and engineering.  
            </p>
            </div>

            <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{clickable: true}}
            autoplay={{delay: 5000, disableOnInteraction: false}}
            loop={true}
            >
                {testimonials.map((t, index) => (
                   <SwiperSlide key={index}>
                    <div className="testimonial-card" data-aos="fade-up">
                    <p className="testimonial-feedback">"{t.feedback}"</p>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                    </div>
                   </SwiperSlide> 
                ))}



        
            </Swiper>
           </section> 
        )
    }