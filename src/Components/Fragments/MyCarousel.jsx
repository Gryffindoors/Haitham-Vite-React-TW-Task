import React from 'react'

export default function MyCarousel({ name, image, message, type }) {
    return (
        <div className="flex flex-col items-center text-center bg-transparent border-0">
            <div className='relative'>
                <img src={image} alt={name} className="w-20 h-20 rounded-full mb-3" />
                <span className='text-white text-sm bg-red-400 h-5 w-5 rounded-full absolute bottom-5 -end-0'><i className="fas fa-quote-left"></i></span>
            </div>
            <p className="text-white/50 text-lg font-medium mb-2">{message}</p>
            <h5 className="text-white text-xl font-semibold">{name}</h5>
            <p className="text-white text-lg mb-10">{type}</p>
        </div>
    );
}





