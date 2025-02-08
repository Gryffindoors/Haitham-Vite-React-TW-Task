import React from 'react';
import ServiceFrag, { IconTablerClock24 } from './Fragments/ServiceFrag';
import AppointmentForm from './Fragments/AppointmentForm';

const ServiceItems = [
    {
        Icon: <i className="fa-solid fa-truck-medical"></i>,
        ServiceName: 'Emergency Services',
        ServiceDesc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        Icon: <i className="fa-solid fa-user-doctor"></i>,
        ServiceName: 'Qualified Doctors',
        ServiceDesc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Outdoors Checkup',
        ServiceDesc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        Icon: <IconTablerClock24 />,
        ServiceName: '24 Hours Service',
        ServiceDesc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
];

export default function ServiceList() {
    return (
        <div id='Services' className='w-full flex flex-col md:flex-row justify-center  bg-gray-200 py-5 px-10'>
            {/* Services Section */}
            <div className='w-full md:w-[60%] flex ps-10 flex-col gap-5 py-5 text-center md:text-left'>
                <h2 className='text-black font-black text-5xl'>Our Services</h2>
                <div className='w-full md:w-[90%] mt-0 px-15  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 py-10 bg-transparent'>
                    {ServiceItems.map((service, index) => (
                        <ServiceFrag key={index} {...service} />
                    ))}
                </div>
            </div>

            {/* Appointment Form Section */}
            <div className='w-full md:w-[40%] flex flex-col gap-10 py-5 text-center md:text-left bg-white min-h-[1px]'>
                <AppointmentForm />
            </div>
        </div>
    );
}