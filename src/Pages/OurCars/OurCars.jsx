import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { dataCars } from '../../Components/OurCarsDetails/OurCarsDetails'
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import car1 from '../../assets/car-one.png'
import car2 from '../../assets/car-two.png'
import car3 from '../../assets/car-three.png'
import car4 from '../../assets/car-four.png'
import { category } from '../../Context/CategoryContext'
import { Helmet } from 'react-helmet-async'

export default function OurCars() {

    let { pathname } = useLocation()
    // const [ourCarss, setOurCars] = useState(dataCars)
    const [term, setTerm] = useState('')
    const [newFilter, setNewFilter] = useState('')
    let { filterByPhoto, ourCars, setOurCars } = useContext(category)
    // console.log(dataCars);

    let filterCars = (e) => {
        setTerm(e.target.value)
        setNewFilter(ourCars.filter((car) => car.content.toLowerCase().includes(term.toLowerCase())))
        // setOurCars(newFilter)
    }

    useEffect(() => {
        if (term == '') {
            setOurCars(dataCars)
        } else {
            setOurCars(newFilter)
        }
    }, [term])

    // let filterBy = (term) => {
    //     filterByPhoto(term)
    // }

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (<>

        <Helmet>
            <meta name="description" content="Our Cars" />
            <title>Our Cars</title>
        </Helmet>
        <section className='pb-36 bg-[url(assets/main-bg.jpg)]'>
            <div className='w-full relative'>
                <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-5xl font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap'>Our Fleets</motion.h2>
                </div>
                <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
            </div>

            <div className='bg-[url(assets/main-bg.jpg)]'>
                <div className='bg-black bg-opacity-5'>
                    <h2 className='text-center text-2xl pt-5 font-semibold italic text-slate-600'>Search By Category</h2>
                    <div className='flex gap-y-10 flex-wrap items-center justify-center w-full py-10 mx-auto'>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10'>
                            <Link onClick={() => filterByPhoto('car')} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car1} className=" size-full w-full lg:w-32" alt='' srcSet={car1} /></figure>
                                    <h3>Car</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link onClick={() => filterByPhoto('van')} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car2} className=" size-full w-full lg:w-32" alt='' srcSet={car2} /></figure>
                                    <h3>Van</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link onClick={() => filterByPhoto('minibus')} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car3} className=" size-full w-full lg:w-32" alt='' srcSet={car3} /></figure>
                                    <h3>Mini Bus</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link onClick={() => filterByPhoto('bus')} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car4} className=" size-full w-full lg:w-32" alt='' srcSet={car4} /></figure>
                                    <h3>Bus</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div initial={{ opacity: .5, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative w-3/4 md:w-1/4 mx-auto my-5">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={filterCars} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search For Cars..." />
            </motion.div>

            <div className='flex flex-wrap gap-y-7 p-5'>
                {ourCars?.map((car, index) =>
                    <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: .5, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} key={index} className='w-full lg:w-1/4 p-3'>
                        <Link to={`/ourcars/${car.id}/${car.content}`} target='_blank'><div className='flex flex-col justify-center border rounded-xl hover:border-[#ee4023] cursor-pointer'>
                            <div className='overflow-hidden rounded-t-xl'>
                                <img className='w-full rounded-t-xl hover:scale-110 duration-700' src={car.mainImage} alt="" />
                            </div>
                            <div className='p-2'>
                                <p className='text-slate-500'>{car.content}</p>
                                <h2 className='text-xl font-semibold'>{car.title}</h2>
                            </div>
                        </div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    </>)
}
