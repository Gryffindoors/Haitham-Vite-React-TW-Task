import React from 'react';
import About from '../Components/About';
import Services from '../Components/Services';
import HeaderOther from '../Components/Fragments/HomeOther';
import { useLocation } from "react-router-dom";
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import SEO from '../Components/Fragments/SEO';

export default function Appoint() {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    const PageData = {
        image: '/images/bg_1.jpg.webp',
        title: 'Appointment',
        link: pathNames, 
    };

    return (
        <>
            
            <SEO title="Medi-Plus Appointment" metaDescription="Medi-Plus Appointment Reservation Page" />

            <HeaderOther {...PageData} />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}
