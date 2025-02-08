import React from 'react'
import AppointmentButton, { ContactButton } from './Fragments/Buttons'

const aboutImage = "src/Images/about.jpg.webp"

export default function About() {
    return <>

        <div id='About' className='w-full flex flex-col md:flex-row justify-between items-center bg-white'>
            <div className='w-full md:w-2/5 flex content-center justify-center'>
                <div className='flex overflow-hidden h-full'>
                    <div className="min-w-[20%] "></div>
                    <div className='h-full overflow-hidden'>
                        <img src={aboutImage} alt="Doctors at Mediplus Clinic" className='-z-10 w-full' />
                    </div>
                    <div className="w-1/5"></div>
                </div>
            </div>


            <div className="w-full md:w-3/5 flex flex-col gap-10 py-10 text-center md:text-left">
                <div className='w-3/5 flex flex-col gap-10 '>
                    <h2 className='text-5xl text-black font-black'>We Are <span className='text-blue-700'>Mediplus</span> A<br /> Medical Clinic</h2>
                    <p className='text-gray-500 text-lg'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className='flex flex-wrap justify-center md:justify-start gap-5'>
                    <AppointmentButton />
                    <ContactButton />
                </div>

            </div>
        </div>

    </>
}
