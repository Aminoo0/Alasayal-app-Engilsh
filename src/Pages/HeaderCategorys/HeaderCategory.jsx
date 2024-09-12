import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { dataCars } from '../../Components/OurCarsDetails/OurCarsDetails';
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import car1 from '../../assets/car-one.png'
import car2 from '../../assets/car-two.png'
import car3 from '../../assets/car-three.png'
import car4 from '../../assets/car-four.png'


export default function HeaderCaregory() {


    let { pathname } = useLocation()
    console.log(pathname);

    const [category, setCategory] = useState(dataCars)
    let params = useParams()
    console.log(params);
    let oneCategory = category.filter((car, index) => car.category == params.undefined)

    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    return (
        <section className='py-1 pb-52 bg-[url(assets/main-bg.jpg)]'>
            <div className='w-full relative overflow-hidden'>
                <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-3xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>Our Fleets</motion.h2>
                </div>
                <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
            </div>

            <div className='bg-[url(assets/main-bg.jpg)]'>
                <div className='bg-black bg-opacity-5'>
                    <h2 className='text-center text-2xl pt-5 font-semibold italic text-slate-600'>Search By Category</h2>
                    <div className='flex gap-y-10 flex-wrap items-center justify-center w-full py-10 mx-auto'>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10'>
                            <Link to={'/ourcars/car'} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car1} className=" size-full w-full lg:w-32" alt='' srcSet={car1} /></figure>
                                    <h3>Car</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link to={'/ourcars/van'} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car2} className=" size-full w-full lg:w-32" alt='' srcSet={car2} /></figure>
                                    <h3>Van</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link to={'/ourcars/minibus'} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car3} className=" size-full w-full lg:w-32" alt='' srcSet={car3} /></figure>
                                    <h3>Mini Bus</h3>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-10 '>
                            <Link to={'/ourcars/bus'} >
                                <div className='flex cursor-pointer hover:bg-white rounded-lg p-5 gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                                    <figure className=""><img loading="lazy" decoding="async" src={car4} className=" size-full w-full lg:w-32" alt='' srcSet={car4} /></figure>
                                    <h3>Bus</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-y-7 p-5'>
                {oneCategory?.map((car, index) =>
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
    )
}

