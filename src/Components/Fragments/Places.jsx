import React from 'react'


export default function Places() {
    const bgImage = "/images/bg_2.jpg.webp"
    return <>
        <div className="w-full h-fit relative overflow-hidden">
            <img loading="lazy"  src={bgImage} alt="Our Staff" className='absolute -z-10 w-full -top-50 opacity-80' />
            <div className="px-5 py-35 mx-auto flex flex-col items-center gap-10">
                <h3 className='text-white font-extrabold text-4xl drop-shadow-md'>Your Health is Our Priority</h3>
                <p className='text-white font-medium text-2xl drop-shadow-md'>We can manage your dream building A small river named Duden flows by their place</p>
                <button className='bg-white text-black font-semibold py-5 px-8 rounded-full hover:bg-blue-600 transition duration-300'>
                    Search Places
                </button>
            </div>
        </div>

    </>
}
