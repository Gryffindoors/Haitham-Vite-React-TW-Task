import React from 'react'
import { AppointmentButtonRed } from './Fragments/Buttons'

const bgImage = "/images/bg_3.jpg.webp"

export default function FunFacts() {
    return <>

        <div className="relative w-full overflow-hidden">
            <img src={bgImage} alt="Fun Facts" className='absolute -z-10 w-full -top-[80px] opacity-80' />
            <div className="flex bg-blue-500/50 w-full gap-10">
                <div className="flex flex-col items-start justify-center gap-10 ps-35 py-20">
                    <p className="uppercase text-white font-bold text-lg">fun facts</p>
                    <h3 className='text-white font-black text-5xl'>Over 5,100 patients <br />trust us</h3>
                    <AppointmentButtonRed />
                </div>
                <div className="grid grid-cols-2 p-10 m-auto">
                    <div className='flex flex-col items-center justify-center gap-5 border border-white/30 border-b-0.5 border-e-0.5 border-t-0 border-s-0 p-15'>
                        <h4 className='text-center font-extrabold text-white text-5xl'>30</h4>
                        <p className='capitalize text-white font-bold text-lg'>years of experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 border border-white/30 border-b-0.5 border-s-0.5 border-t-0 border-e-0 p-15'>
                        <h4 className='text-center font-extrabold text-white text-5xl'>4,500</h4>
                        <p className='capitalize text-white font-bold text-lg'>Happy Patients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 border border-white/30 border-t-0.5 border-e-0.5 border-b-0 border-s-0 p-15'>
                        <h4 className='text-center font-extrabold text-white text-5xl'>84</h4>
                        <p className='capitalize text-white font-bold text-lg'>number of doctors</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 border border-white/30 border-t-0.5 border-s-0.5 border-b-0 border-e-0 p-15'>
                        <h4 className='text-center font-extrabold text-white text-5xl'>300</h4>
                        <p className='capitalize text-white font-bold text-lg'>members of staff</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
