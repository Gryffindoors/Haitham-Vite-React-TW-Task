import React from 'react';
import { Navigation, Pagination,  A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MyCarousel from './Fragments/MyCarousel';

// Background image
const bgImage = "/images/bg_3.jpg.webp";

// Testimonials Data
const testimonials = [
    {
        image: '/images/patient1.webp',
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Jeff Freshman',
        type: 'Patient'
    },
    {
        image: '/images/patient1.webp',
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Jeff Freshman',
        type: 'Patient'
    },
    {
        image: '/images/patient2.webp',
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Jeff Freshman',
        type: 'Patient'
    },
    {
        image: '/images/patient3.webp',
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Jeff Freshman',
        type: 'Patient'
    },
    {
        image: '/images/patient4.webp',
        message: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Jeff Freshman',
        type: 'Patient'
    },
];

// Swiper Component
const SwiperFull = () => {
    return (
        <div className="w-full max-w-4xl  p-10">
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ hidden, draggable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <MyCarousel {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


// Main Testimonial Page Component
export default function TestimonialPage() {
    return <>

        
        <div className="relative w-full bg-blue-500/50 pt-10">
            {/* Background Image */}
            <img
                loading="lazy"
                src={bgImage}
                alt="testimonials"
                className="absolute inset-0 -z-10 w-full h-full object-cover opacity-80"
            />
            <p className="uppercase text-white text-center">testimonials</p>
            <h2 className='capitalize text-white font-bold text-center text-2xl'>our patients say</h2>
            {/* Content */}
            <div className="flex  w-full gap-10">
                <div className="flex w-full items-center justify-center gap-10 py-5 bg-transparent m-auto">
                    <SwiperFull />
                </div>
            </div>
        </div>
    </>;
}
