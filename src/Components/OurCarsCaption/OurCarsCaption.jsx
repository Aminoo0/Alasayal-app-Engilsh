import React from 'react'
import { Link } from 'react-router-dom'
import car1 from '../../assets/car-one.png'
import car2 from '../../assets/car-two.png'
import car3 from '../../assets/car-three.png'
import car4 from '../../assets/car-four.png'

export default function OurCarsCaption() {
    return (
        <section className={`py-10 bg-[url(assets/main-bg.jpg)]`}>
            <h1 className='text-center text-3xl font-semibold'>Our Fleets</h1>
            <div className='flex gap-y-10 flex-wrap w-4/5 mx-auto'>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <Link to={'/ourcars'} >
                        <div className='flex cursor-pointer gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <figure className="text-[#6b6b6b]"><img loading="lazy" decoding="async" src={car1} className=" size-full w-full lg:w-32" alt='' srcSet={car1} /></figure>
                            <h3>Car</h3>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <Link to={'/ourcars'} >
                        <div className='flex cursor-pointer gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                            <figure className=""><img decoding="async" src={car2} className=" size-full w-full lg:w-32" alt='' srcSet={car2} />
                            </figure>
                            <h3>Van</h3>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <Link to={'/ourcars'} >
                        <div className='flex cursor-pointer gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={car3} className=" size-full w-full lg:w-32" alt='' srcSet={car3} /></figure>
                            <h3>Mini Bus</h3>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-wrap justify-center w-full md:w-1/2 lg:w-1/4 p-3 '>
                    <Link to={'/ourcars'} >
                        <div className='flex cursor-pointer gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={car4} className=" size-full w-full lg:w-32" alt='' srcSet={car4} /></figure>
                            <h3>Bus</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to={'/ourcars'} > <button className='p-3 px-7 text-white text-sm font-bold bg-[#e64a41] rounded-md hover:bg-[#d1514d] hover:scale-105 duration-300'>View all</button></Link>
            </div>
        </section>
    )
}
