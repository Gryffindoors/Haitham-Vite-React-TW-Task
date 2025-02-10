import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";  // ✅ Import Link from react-router-dom
import Navbar from './Navbar';
import NavbarSticky from './NavbarSticky';

const HeaderOther = ({ title, link = [], image }) => {
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const homeSection = document.getElementById("Home");
            if (!homeSection) return;

            const homeHeight = homeSection.offsetHeight;
            const homeTop = homeSection.offsetTop;
            const scrollY = window.scrollY;

            setIsHidden(scrollY < homeTop + homeHeight * 0.5);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <NavbarSticky isHidden={isHidden} />

            <div id="Home" className="relative w-full h-fit flex justify-between items-center overflow-hidden">
                <img loading="lazy"  src={image} alt="header-background" className="absolute -z-10 -top-25 w-full h-fit object-cover opacity-100" />

                <div className="w-4/5 flex flex-2 flex-row items-end justify-between p-10 mt-56 bg-transparent">
                    <div className="px-20 flex flex-col gap-6">
                        <h1 className="text-black font-black text-6xl">{title}</h1>

                        {/* ✅ Updated: "Home" is now a clickable link */}
                        <p className="text-gray-400 text-2xl flex items-center gap-2">
                            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                            {link.length > 0 &&
                                link.map((item, index) => (
                                    <span key={index} className="flex items-center gap-2">
                                        <i className="fa-solid fa-chevron-right"></i> {item}
                                    </span>
                                ))
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderOther;
