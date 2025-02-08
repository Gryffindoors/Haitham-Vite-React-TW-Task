import React from 'react'

export default function Bluebar() {
    return <>

        <div className="bg-blue-500 flex flex-3 items-center justify-around p-1">
            <div>
                <a href="#" className='text-white'><i className="fa-solid fa-phone text-white fa-sm"></i>+ 1235 2355 98</a>
            </div>
            <div>
                <a href="#" className='text-white'><i className="fa-solid fa-paper-plane text-white fa-sm"></i>youremail@email.com</a>
            </div>
            <div>
                <a href="#" className='text-white uppercase'>Sign in | Sign Up</a>
            </div>
        </div>
    </>
}
