import React from 'react'
import bus1 from '../../assets/bus1.svg'
import bus2 from '../../assets/bus2.svg'
import bus3 from '../../assets/bus3.svg'
import bus4 from '../../assets/bus4.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className='w-full'>
            <div className='relative'>
                <video className="object-cover md:w-full md:h-svh w-[1037.16px] h-[583.4px]" autoPlay muted playsInline loop src="https://files.vehica.com/video/vehica-video.mp4" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-slate-900 bg-opacity-50'>
                    <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='text-white text-3xl md:text-6xl mb-5'>Find Your <span className='text-[#e64c43] font-bold'>Perfect</span> Car</motion.h1>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 2, type: 'spring', bounce: .5, damping: 5, delay: 1, }} className='flex justify-center items-center flex-wrap md:gap-10 gap-y-10 md:gap-y-0 mt-5 text-white text-nowrap'>
                        <Link to={'/ourcars/bus'} className='order-4 flex flex-col gap-y-10 justify-between items-center md:w-20 w-1/2 group/changeColor'>
                            <img className='border-2 cursor-pointer p-3 rounded-full group-hover/changeColor:border-[#e64c43] group-hover/changeColor:scale-[1.2] duration-300' src={bus1} alt="" />
                            <h3 className='font-bold cursor-pointer'>Bus</h3>
                        </Link>

                        <Link to={'/ourcars/minibus'} className='order-3 flex flex-col gap-y-10 justify-between items-center md:w-20 w-1/2 group/changeColor'>
                            <img className='border-2 cursor-pointer p-3 rounded-full group-hover/changeColor:border-[#e64c43] group-hover/changeColor:scale-[1.2] duration-300' src={bus2} alt="" />
                            <h3 className='font-bold cursor-pointer'>Mini Bus</h3>
                        </Link>

                        <Link to={'/ourcars/van'} className='order-2 flex flex-col gap-y-10 justify-between items-center md:w-20 w-1/2 group/changeColor'>
                            <img className='border-2 cursor-pointer p-3 rounded-full group-hover/changeColor:border-[#e64c43] group-hover/changeColor:scale-[1.2] duration-300' src={bus3} alt="" />
                            <h3 className='font-bold cursor-pointer'>Van</h3>
                        </Link>

                        <Link to={'/ourcars/car'} className='order-1 flex flex-col gap-y-10 justify-between items-center md:w-20 w-1/2 group/changeColor'>
                            <img className='border-2 cursor-pointer p-3 rounded-full group-hover/changeColor:border-[#e64a41] group-hover/changeColor:scale-[1.2] duration-300' src={bus4} alt="" />
                            <h3 className='font-bold cursor-pointer'>Car</h3>
                        </Link>

                    </motion.div >
                </div >
            </div >
            <div className='w-full p-3 bg-[#e64c43] flex flex-wrap md:flex-nowrap justify-center items-center gap-5 text-white'>
                <h3 className='text-xl font-semibold text-nowrap text-center'>Looking for a luxury fleet?</h3>
                <Link to={'/contactus'}><motion.button initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='w-full bg-white p-3 rounded-md text-[#e64c43] text-xl font-bold text-nowrap'>BOOK NOW</motion.button></Link>
            </div>
        </header >
    )
}
