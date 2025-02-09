import React from 'react';
import About from '../Components/About';
import Services from '../Components/Services';
import HeaderOther from '../Components/Fragments/HomeOther';
import { useLocation } from "react-router-dom";

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
            <HeaderOther {...PageData} />
            <About />
            <Services />
        </>
    );
}
