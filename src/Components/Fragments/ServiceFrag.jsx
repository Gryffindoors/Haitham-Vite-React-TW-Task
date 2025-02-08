import React from "react";
import { BookButton } from "./Buttons";

// Clock Icon Component (Converted from TypeScript to Regular React)
const IconTablerClock24 = ({ height = "1.5em", strokeWidth = "2", fill = "none", ...props }) => (
    <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={height}
        {...props}
    >
        <path
            fill={fill}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            d="M3 12a9 9 0 0 0 5.998 8.485M21 12a9 9 0 1 0-18 0m9-5v5m0 3h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m3-6v2a1 1 0 0 0 1 1h1m1-3v6"
        />
    </svg>
);

// Service Component with Icon Support
const ServiceFrag = ({ Icon, ServiceName, ServiceDesc }) => {
    return (
        <div className="flex min-w-[40%] gap-3">
            {/* Icon Box */}
            <div className="p-5 rounded-full text-red-500 bg-rose-200 flex items-center justify-center h-fit w-1/5">
                {Icon}
            </div>
            {/* Service Details */}
            <div className="flex flex-col gap-2 w-4/5">
                <h4 className="text-2xl font-bold">{ServiceName}</h4>
                <p className="text-gray-400 text-lg leading-8">{ServiceDesc}</p>
            </div>
        </div>
    );
};

const ServiceFragVert = ({ Icon, ServiceName, ServiceDesc }) => {
    return <>
        <div className="group flex flex-col bg-white gap-3 w-full md:w-auto border border-gray-200 p-5 hover:bg-blue-600 transition duration-700 items-center rounded-lg shadow-md hover:text-white text-blue-500">
            {/* Icon with spacing */}
            <div className="mt-4 text-4xl group-hover:text-white">
                {Icon}
            </div>

            {/* Service Name */}
            <h2 className="text-2xl font-bold text-center group-hover:text-white">{ServiceName}</h2>

            {/* Service Description with spacing */}
            <p className="text-lg text-gray-400 text-center mb-4 group-hover:text-white">
                {ServiceDesc}
            </p>
        </div>
    </>
};

const StaffFrag = ({ name, speciality, Message, image, twitter, facebook, google, instagram }) => {
    return <>
        <div className="group flex flex-col items-center gap-5">
            <div className="overflow-hidden w-full h-full relative">
                {/* Image */}
                <img src={image} alt={name} className="w-full transition-all duration-300 group-hover:translate-y-[-25px] group-hover:opacity-50"
                />

                {/* Social Media Icons */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around bg-white py-3 px-24 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <a href={twitter}><i className="fa-brands fa-twitter text-red-400 fa-md"></i></a>
                    <a href={facebook}><i className="fa-brands fa-facebook-f text-red-400 fa-md"></i></a>
                    <a href={google}><i className="fa-brands fa-google-plus-g text-red-400 fa-md"></i></a>
                    <a href={instagram}><i className="fa-brands fa-instagram text-red-400 fa-md"></i></a>
                </div>
            </div>

            {/* Name & Details */}
            <div className="flex flex-col items-center gap-3">
                <h4 className="text-black font-bold text-2xl group-hover:text-blue-700">{name}</h4>
                <p className="uppercase text-blue-700 text-lg">{speciality}</p>
                <p className="text-gray-400 text-center">{Message}</p>
            </div>
            <BookButton />
        </div>

    </>
    
};

// Export Components
export default ServiceFrag;
export { IconTablerClock24, ServiceFragVert, StaffFrag };


