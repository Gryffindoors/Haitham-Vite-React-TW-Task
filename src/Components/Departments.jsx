import React from 'react'
import { ServiceFragVert } from './Fragments/ServiceFrag';

const DepartmentItems = [
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Neurology',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Surgical',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Dental',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Ophtalmology',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Cardiology',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Traumatology',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Neclear Magnetic',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'X-Ray',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
    {
        Icon: <i className="fa-solid fa-stethoscope"></i>,
        ServiceName: 'Cardiology',
        ServiceDesc: 'Far far away, behind the word mountains.'
    },
];

const deparmtentImage = "/images/dept-1.jpg.webp"

export default function Departments() {
    return <>
        <div className="w-full">
            <div className="flex">
                <div className="hidden md:block w-2/5 relative overflow-hidden">
                    <img
                        src={deparmtentImage}
                        alt="we welcome you"
                        className="object-cover h-[120%] absolute -top-28 w-full"
                    />
                </div>
                {/* populate Departments */}
                <div className="grid grid-cols-3 w-3/5">
                    {DepartmentItems.map((service, index) => (
                        <ServiceFragVert key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>

    </>
}
