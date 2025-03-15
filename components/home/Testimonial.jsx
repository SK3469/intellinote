import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Software Engineer",
        feedback: "This AI-powered PDF Note Maker has completely transformed how I organize my notes. The accuracy and speed are amazing!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Ananya Verma",
        role: "Content Creator",
        feedback: "I love how intuitive and user-friendly this tool is. It saves me so much time and helps me stay productive!",
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "Vikram Singh",
        role: "Marketing Specialist",
        feedback: "A game-changer for professionals! The AI summarization feature is spot on. Highly recommended.",
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
        name: "Meera Nair",
        role: "Research Scholar",
        feedback: "I use this tool daily for my research papers. AI-driven summaries save hours of work. Fantastic experience!",
        image: "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
        name: "Arjun Patel",
        role: "Startup Founder",
        feedback: "Perfect for entrepreneurs. I can quickly generate, summarize, and organize business notes. It's a must-have tool.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

const Testimonial = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white">What Our Users Say</h2>
                <p className="mt-2 text-lg text-gray-200">Trusted by thousands of professionals worldwide.</p>
            </div>

            {/* Swiper Carousel */}
            <div className="mt-12 p-5 max-w-5xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="p-4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-700 italic">"{testimonial.feedback}"</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
