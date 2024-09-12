import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import AboutUsCaption from '../../Components/AboutUs/AboutUsCaption'
import OurServise from '../../Components/OurServies/OurServise'
import OurCarsCaption from '../../Components/OurCarsCaption/OurCarsCaption'
import OurClient from '../../Components/OurClient/OurClient'
import { useLocation } from 'react-router-dom'

export default function Home() {

    let { pathname } = useLocation()
    console.log(pathname);

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])


    return (
        <div className='overflow-hidden'>
            <Header />
            <AboutUsCaption />
            <OurServise />
            <OurCarsCaption />
            <OurClient />
        </div>
    )
}
