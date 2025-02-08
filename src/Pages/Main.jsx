import React from 'react'
import About from '../Components/About'
import Services from '../Components/Services'
import Places from '../Components/Fragments/Places'
import Departments from '../Components/Departments'
import Doctors from '../Components/Doctors'
import Header from '../Components/Home'

export default function Main() {
    return <>
        <Header />
        <About />
        <Services />
        <Places />
        <Departments />
        <Doctors />
    </>
}
