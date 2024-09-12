import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import navLogo from '../../assets/main-logo.png'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='z-50'>
            <nav className="hidden md:block bg-[#e64c43] text-[#ffffff] border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3">
                    <div className="flex items-center gap-x-3">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+966535877758" className="">+966535877758</a>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:asayel.bus@gmail.com" className="">asayel.bus@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <a href="https://www.youtube.com/@eitmartours2266" target='_blank'><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://wa.me/966535877758" target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </nav>


            <nav className="bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-end gap-10 lg:gap-0 lg:justify-between mx-auto p-2">
                    <Link to={'https://en.alasayeltours.com/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={navLogo} className="w-52" alt="Al-Asayle Logo" />
                    </Link>
                    <div className="flex gap-5 items-center md:order-2">
                        <Link to={'https://alasayeltours.com'} target='_blank' className='hidden lg:block p-3 px-7 font-bold bg-[#e64c43] rounded-lg text-white order-1'>عربي</Link>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open main menu</span>
                            <i className="fa-solid fa-bars text-2xl text-[#e64c43]"></i>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden lg:flex md:order-1">
                        <ul className="flex gap-x-10 p-4 font-bold">
                            <li>
                                <NavLink to={''} className="block py-2 px-3 text-gray-900 md:hover:text-[#e64c43]">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ourcars'} className="block py-2 px-3 text-gray-900 md:hover:text-[#e64c43]">Our Fleets</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/aboutus'} className="block py-2 px-3 text-gray-900 md:hover:text-[#e64c43]">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contactus'} className="block py-2 px-3 text-gray-900 md:hover:text-[#e64c43]">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* moblie screen */}
                    <AnimatePresence>
                        {isOpen && <div className="lg:hidden z-50 fixed top-0 right-0 bottom-0 left-0 bg-slate-600 bg-opacity-75 md:order-1">
                            <motion.ul initial={{ x: -200 }} whileInView={{ x: 0 }} exit={{ x: -200, opacity: 0 }} transition={{ duration: .5 }} className="fixed top-0 left-0 bottom-0 bg-[#0f141e] text-white flex flex-col justify-start text-start font-bold overflow-y-scroll">
                                <li className='border-b-2 p-4 text-end bg-[#242830]'>
                                    <i onClick={() => setIsOpen(false)} className="fa-solid fa-x text-[#ee4023] text-3xl cursor-pointer hover:scale-125 duration-300"></i>
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 pr-56'>
                                    <NavLink to={''} className="block w-32 py-2 px-3 md:hover:text-[#e64c43] hover:scale-110 duration-300">Home</NavLink>
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 pr-56'>
                                    <NavLink to={'/ourcars'} className="block py-2 px-3 md:hover:text-[#e64c43] hover:scale-110 duration-300">Our Fleets</NavLink>
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 pr-56'>
                                    <NavLink to={'/aboutus'} className="block py-2 px-3 md:hover:text-[#e64c43] hover:scale-110 duration-300">About Us</NavLink>
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 pr-56'>
                                    <NavLink to={'/contactus'} className="block py-2 px-3 md:hover:text-[#e64c43] hover:scale-110 duration-300">Contact Us</NavLink>
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 pr-56'>
                                    <Link to={'https://alasayeltours.com'}target='_blank' className="block py-2 px-3 md:hover:text-[#e64c43] hover:scale-110 duration-300">عربي</Link>
                                </li>
                                <div className='text-[#99a1b2] p-3'>
                                    <div className="flex items-center gap-x-5 space-x-6 rtl:space-x-reverse mt-10 mr-5">
                                        <i className="fa-solid fa-phone text-[#ee4023]"></i>
                                        <Link to={'tel:+966535877758'} className="">+966535877758</Link>
                                    </div>
                                    <div className="flex items-center gap-x-5 space-x-6 rtl:space-x-reverse mt-5 mr-5">
                                        <i className="fa-regular fa-envelope text-[#ee4023]"></i>
                                        <Link to={'mailto:asayel.bus@gmail.com'} className="">asayel.bus@gmail.com</Link>
                                    </div>
                                </div>
                            </motion.ul>
                        </div>
                        }
                    </AnimatePresence>
                </div>
            </nav>

        </section>
    )
}
