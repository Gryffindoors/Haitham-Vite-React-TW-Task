import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Fragments/Navbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import SEO from '../Components/Fragments/SEO';

export default function NotFound() {
  return <>
    <SEO title="Apologies" metaDescription="Page not found" />

    <div className="relative">
      <div className="w-full absolute z-10">
        <Navbar />
      </div>
      <div className=" h-screen flex flex-col items-center justify-center text-center bg-gray-100">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl text-gray-700 mt-2">Oops! Page Not Found.</p>
        <Link to="/" className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg">Go Home</Link>
      </div>
    </div>
    <Contact />
    <Footer />

  </>
}

