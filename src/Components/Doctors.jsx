import React from 'react'
import { StaffFrag } from './Fragments/ServiceFrag'

const DoctorStaff = [
    {
        name: 'Dr. Lloyd Wilson',
        speciality: 'Neurologist',
        Message: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
        image: '/images/doc-1.jpg.webp',
        twitter: '#',
        facebook: '#',
        google: '#',
        instagram: '#',
    },
    {
        name: 'Dr. Rachel Parker',
        speciality: 'Ophthalmologist',
        Message: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
        image: '/images/doc-2.jpg.webp',
        twitter: '#',
        facebook: '#',
        google: '#',
        instagram: '#',
    },
    {
        name: 'Dr. Ian Smith',
        speciality: 'Dentist',
        Message: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
        image: '/images/doc-3.jpg.webp',
        twitter: '#',
        facebook: '#',
        google: '#',
        instagram: '#',
    },
    {
        name: 'Dr. Alicia Henderson',
        speciality: 'Pediatrician',
        Message: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
        image: '/images/doc-4.jpg.webp',
        twitter: '#',
        facebook: '#',
        google: '#',
        instagram: '#',
    },
]

export default function Doctors() {
  return <>

    <div className="w-full py-20 px-20 flex flex-col items-center gap-10 bg-white">
        <h2 className='text-black font-black text-5xl'>Our Qualified Doctors</h2>
        <p className='text-gray-400 w-1/2 text-center text-lg'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
        <div className='grid grid-cols-4 gap-5'>
            {DoctorStaff.map((doctor, index) => (
                <StaffFrag key={index} {...doctor} />
            ))}
        </div>

    </div>
  
  </>
}
