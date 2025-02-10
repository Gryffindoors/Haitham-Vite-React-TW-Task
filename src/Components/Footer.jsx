import React from 'react'
import { Link } from 'react-router-dom';

const linkLists = [
    { title: "Departments", links: ["Neurology", "Opthalmology", "Nuclear Magnetic", "Surgical", "Cardiology", "Dental"] },
    { title: "Links", links: ["Home", "About", "Departments", "Doctors", "Blog", "Pricing", "Contact"] },
    { title: "Services", links: ["Emergency Services", "Qualified Doctors", "Outdoors Checkup", "24 Hours Services"] }
];

const bgImage = '/images/footer.webp'

export default function Footer() {
    return <>

        <div className="grid grid-cols-5 relative gap-5 h-fit overflow-hidden py-25">
            <img src={bgImage} alt="Our Links" className="absolute -z-10 -top-52 w-full opacity-50" />
            <div className="flex flex-col gap-5 content-around h-full p-3">
                <h3 className='text-black text-2xl'>Mediplus</h3>
                <p className='text-black  text-sm'>Far far away, behind the word mountains, far from the countries.</p>
                <div className="flex content-between justify-start w-full">
                    <div className='p-3'><i className="fa-brands text-center fa-twitter w-10 p-3 rounded-full text-white bg-blue-600"></i></div>
                    <div className='p-3'><i className="fa-brands text-center fa-facebook-f w-10 p-3 rounded-full text-white bg-blue-600"></i></div>
                    <div className='p-3'><i className="fa-brands text-center fa-instagram w-10 p-3 rounded-full text-white bg-blue-600"></i></div>
                </div>
            </div>

            {linkLists.map((list, index) =>(
                <>
                            <div key={index} className="flex flex-col gap-5 h-full p-3">
                            <h3 className="text-black text-2xl">{list.title}</h3>
                            <div>
                                <ul className="list-none">
                                    {list.links.map((item, subIndex) => (
                                        <li key={subIndex} className='leading-10 text-sm'><i className="fa-solid fa-right-long w-7 text-blue-500"></i>
                                        <Link to="#">{item}</Link>
                                        </li>

                                    ))}

                                </ul>
                            </div>

                            </div>

                </>
            ))}

            <div className="flex flex-col gap-5 h-full p-3">
                <h3 className="text-black text-2xl">Have a Questions?</h3>

                {/* Contact Details Row */}
                <div className="flex items-center">
                    <div className="w-1/5 text-center">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                    </div>
                    <div className="w-4/5">
                        <p className="text-black text-sm">203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-1/5 text-center">
                        <i className="fa-solid fa-phone text-lg"></i>
                    </div>
                    <div className="w-4/5">
                        <p className="text-black text-sm">+2392929210</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-1/5 text-center">
                        <i className="fa-solid fa-envelope text-lg"></i>
                    </div>
                    <div className="w-4/5">
                        <p className="text-black text-sm">info@yourdomain.com</p>
                    </div>
                </div>
            </div>




        </div >

    </>

}
