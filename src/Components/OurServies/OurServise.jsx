import { motion } from 'framer-motion'
import React from 'react'
import student from '../../assets/student.png'
import office from '../../assets/office-building-2.png'
import conference from '../../assets/conference.png'
import government from '../../assets/government.png'
import wadding from '../../assets/hall.png'
import stage from '../../assets/stage.png'
import player from '../../assets/soccer-player.png'
import makka from '../../assets/hajj.png'

export default function OurServise() {
    return (
        <section className={`bg-[url(assets/main-bg.jpg)]`}>
            <div className='bg-black bg-opacity-5 py-10 overflow-hidden'>
                <motion.h1 initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='text-center text-3xl font-semibold'>Our Services</motion.h1>
                <motion.div initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .5 }} className='flex gap-y-10 flex-wrap text-[#6b6b6b] w-4/5 mx-auto'>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300'>
                            <figure className="text-[#6b6b6b]"><img loading="lazy" decoding="async" src={student} className=" size-full w-32" alt='' srcSet={student} /></figure>
                            <h3>Student Transportation</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img decoding="async" src={office} className=" size-full w-32" alt='' srcSet={office} />
                            </figure>
                            <h3>office transportation
                            </h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={conference} className=" size-full w-32" alt='' srcSet={conference} /></figure>
                            <h3>Conferences</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={government} className=" size-full w-32" alt='' srcSet={government} /></figure>
                            <h3>Government Staff</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={wadding} className=" size-full w-32" alt='' srcSet={wadding} /></figure>
                            <h3>wedding parties</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={stage} className=" size-full w-32" alt='' srcSet={stage} /></figure>
                            <h3>Concerts and festivals</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={player} className=" size-full w-32" alt='' srcSet={player} /></figure>
                            <h3>Sports teams</h3>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/2 lg:w-1/4 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center rounded-xl hover:bg-white hover:scale-110 duration-300 px-3'>
                            <figure className=""><img loading="lazy" decoding="async" src={makka} className=" size-full w-32" alt='' srcSet={makka} /></figure>
                            <h3>Hajj and Umrah trips</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

