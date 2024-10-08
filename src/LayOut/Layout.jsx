import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function Layout() {
    return (
        <div className=''>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}
