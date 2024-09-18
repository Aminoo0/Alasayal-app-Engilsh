import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import AboutUsCaption from '../../Components/AboutUs/AboutUsCaption'
import OurServise from '../../Components/OurServies/OurServise'
import OurCarsCaption from '../../Components/OurCarsCaption/OurCarsCaption'
import OurClient from '../../Components/OurClient/OurClient'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {

    let { pathname } = useLocation()
    console.log(pathname);

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])


    return (<>
        <Helmet>
            <meta name="description" content="Al Asayel For Luxury Tourist Transport" />
            <title>Al Asayel For Luxury Tourist Transport</title>
        </Helmet>
        <div className='overflow-hidden'>
            <Header />
            <AboutUsCaption />
            <OurServise />
            <OurCarsCaption />
            <OurClient />
        </div>
    </>)
}
