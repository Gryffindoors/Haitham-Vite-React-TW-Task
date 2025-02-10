import React from 'react';
import About from '../Components/About';
import HeaderOther from '../Components/Fragments/HomeOther';
import { useLocation } from "react-router-dom";
import BlogDetails from '../Components/BlogDetails';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import SEO from '../Components/Fragments/SEO';

export default function SingleBlog() {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);
    const PageData = {
        image: '/images/bg_1.jpg.webp',
        title: 'Blog Details',
        link: pathNames,
    };

    return (
        <>

            <SEO title="Medi-Plus Blog" metaDescription="Medi-Plus Blog Posts" />
            <HeaderOther {...PageData} />
            <About />
            <BlogDetails />
            <Contact />
            <Footer />
        </>
    );
}
