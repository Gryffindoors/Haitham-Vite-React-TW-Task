import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";



export default function NavbarSticky({ isHidden }) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen && !event.target.closest('.menu-container')) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <>
            <nav className={`bg-white shadow-md z-50 dark:bg-gray-900 w-full fixed top-0 transition-all duration-700 ease-out ${isHidden ? "-translate-y-full opacity-0 h-0" : "translate-y-0 opacity-100 h-16"}`}>
                <div className='flex justify-around items-center'>
                    <div className="w-full flex items-center justify-between px-4 py-3">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-4xl font-extrabold whitespace-nowrap mx-20 dark:text-white">Mediplus</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="md:hidden p-2 w-10 h-10 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`menu-container absolute top-0 end-0 w-64 bg-gray-100 dark:bg-gray-800 shadow-lg transition-transform duration-300 md:relative md:w-auto md:flex md:bg-transparent md:shadow-none ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 hidden md:block"}`}>

                        {/* Close Button (X) - Only shown in mobile view */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-400 dark:text-gray-400 md:hidden text-2xl"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>


                        <ul className="font-medium flex flex-col md:flex-row items-center p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 rtl:space-x-reverse bg-transparent me-5">
                            <li>
                                <Link to="/#Home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/#About" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">About</Link>
                            </li>
                            <li>
                                <Link to="/#Departments" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Department</Link>
                            </li>
                            <li>
                                <Link to="/#Doctors" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Doctors</Link>
                            </li>
                            <li>
                                <Link to="/#Blog" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Blog</Link>
                            </li>
                            <li>
                                <Link to="/#Contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Contact</Link>
                            </li>
                            <li>
                                <button type="button" className="focus:outline-none text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700">
                                    <Link to="/appointment#Services">Appointment</Link>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
