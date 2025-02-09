import React, { useState, useEffect } from 'react'
import AppointmentButton from './Fragments/Buttons'
import Navbar from './Fragments/Navbar'
import NavbarSticky from './Fragments/NavbarSticky'
const bgImage = '/images/bg_3.jpg.webp'


export default function Header() {
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const homeSection = document.getElementById("Home");
            if (!homeSection) return;

            const homeHeight = homeSection.offsetHeight;
            const homeTop = homeSection.offsetTop;
            const scrollY = window.scrollY;

            // ✅ Set state based on scroll position
            setIsHidden(scrollY < homeTop + homeHeight * 0.5);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>
        <Navbar />
         {/* Pass the scroll state to NavbarSticky */}
         <NavbarSticky isHidden={isHidden} />
        <div id='Home' className='w-full flex justify-between items-center'>
            <img loading="lazy"  src={bgImage} alt="doctors" className='absolute -z-10 top-0 w-full opacity-50' />
            <div className="w-4/5 flex flex-2 flex-row items-center justify-between p-10 bg-transparent">
                <div className='px-20 flex flex-col gap-10 '>
                    <p className="uppercase font-bold text-blue-700">welcome to mediplus</p>
                    <h1 className='text-black font-black text-6xl'>We are here <br />for your Care</h1>
                    <p className='text-gray-400 text-2xl'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    <AppointmentButton />
                </div>
                <div className='flex opacity-100 w-full'>
                </div>
            </div>
        </div>
    </>
}
