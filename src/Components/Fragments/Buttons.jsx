import React from 'react'

export default function AppointmentButton() {
    return <>
        <button className='bg-blue-500 text-white px-5 p-4 w-50 rounded-4xl'>
            <a href="#">Make an appointment</a>
        </button>
    </>
}

function ContactButton() {
    return <>
        <button className='bg-red-400 text-white px-5 p-4 w-fit rounded-4xl'>
            <a href="#">Contact us</a>
        </button>
    </>
}

export { ContactButton }    