import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './Fragments/ContatForm'

export default function Contact() {
    return <>

        <div className="bg-gray-100 w-full py-20 px-25 mb-20" id="Contact">
            <div className="w-1/2 bg-transparent text-center mb-5 m-auto">
                <h2 className='text-black text-4xl font-black'>Contact Us</h2>
                <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="w-4/5 grid grid-cols-4 gap-5 bg-transparent m-auto">
                <div className="bg-gray-100 rounded-2xl text-center py-10 px-3 flex flex-col gap-5">
                    <div className="w-fit flex m-auto rounded-full overflow-hidden">
                        <i className="fa-solid fa-signs-post text-blue-600 text-lg fa-flip-horizontal bg-white p-5 rounded full"></i>
                    </div>
                    <h4 className='uppercase font-medium text-lg '>Address</h4>
                    <p className='text-gray-500'><a rel="stylesheet" to="https://www.google.com/maps?q=198+W+21st+St+%23721,+New+York,+NY+10011,+USA">198 West 21th Street, Suite 721 New York NY 10016</a></p>
                </div>
                <div className="bg-gray-100 rounded-2xl text-center py-10 px-3 flex flex-col gap-5">
                    <div className="w-fit flex m-auto rounded-full overflow-hidden">
                        <i className="fa-solid fa-phone text-blue-600 text-lg fa-flip-horizontal bg-white p-5 rounded full"></i>
                    </div>
                    <h4 className='uppercase font-medium text-lg '>contact number</h4>
                    <p className='text-gray-500'><a rel="stylesheet" to="tel://+ 1235 2355 98">+1235235598</a></p>
                </div>
                <div className="bg-gray-100 rounded-2xl text-center py-10 px-3 flex flex-col gap-5">
                    <div className="w-fit flex m-auto rounded-full overflow-hidden">
                        <i className="fa-solid fa-paper-plane text-blue-600 text-lg fa-flip-horizontal bg-white p-5 rounded full"></i>
                    </div>
                    <h4 className='uppercase font-medium text-lg '>email address</h4>
                    <p className='text-gray-500'><a rel="stylesheet" to="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                <div className="bg-gray-100 rounded-2xl text-center py-10 px-3 flex flex-col gap-5">
                    <div className="w-fit flex m-auto rounded-full overflow-hidden">
                        <i className="fa-solid fa-earth-africa text-blue-600 text-lg fa-flip-horizontal bg-white p-5 rounded full"></i>
                    </div>
                    <h4 className='uppercase font-medium text-lg '>website</h4>
                    <p className='text-gray-500'><a rel="stylesheet" to="https://elkhan-eg.com">yoursite.com</a></p>
                </div>

            </div>
            <div className="w-4/5 grid grid-cols-2 gap-0 m-auto my-10">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8795338635723!2d-73.99646249999999!3d40.742676200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2s198%20W%2021st%20St%20%23721%2C%20New%20York%2C%20NY%2010011%2C%20USA!5e0!3m2!1sen!2seg!4v1739196309908!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full m-0 border-0'></iframe>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>

    </>
}
