import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function AppointmentButton() {
    return (
        <button className='bg-blue-500 text-white px-5 p-4 w-50 rounded-4xl'>
            <Link to="/appointment#Services">Make an appointment</Link>
        </button>
    );
}

function BookButton() {
    return (
        <button className='bg-blue-500 text-white py-2 px-3 rounded-full w-fit'>
            <Link to="/appointment#Services">Book Now</Link>
        </button>
    );
}

function ContactButton() {
    return (
        <button className='bg-red-400 text-white px-5 p-4 w-fit rounded-4xl'>
            <Link to="/#contact">Contact us</Link>
        </button>
    );
}

export { ContactButton, BookButton };
