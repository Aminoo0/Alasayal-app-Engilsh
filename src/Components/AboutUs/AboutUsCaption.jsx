import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import AlAsaylFrontBus from '../../assets/Al-Asayl-front-bus.png'
import ourVision from '../../assets/our-vision.png'
import ourMission from '../../assets/our-mission.png'

export default function AboutUsCaption() {
    return (
        <section className={`bg-[url(assets/main-bg.jpg)]`}>
            <div className='flex flex-wrap items-center w-3/4 mx-auto'>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-2/5 flex justify-center lg:justify-start items-center mt-10'>
                    <img className='w-3/4' src={AlAsaylFrontBus} alt="" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-3/5 mt-10'>
                    <h3 className='text-3xl font-bold mb-5'>Company Establishment</h3>
                    {/* <h3 className='text-2xl font-semibold mt-10 mb-5'>من نحن</h3> */}
                    <p className=''>Al-asayel (Eitmar) transport Company is a company specializing in the field of VIP bus rental services locally and internationally. since the establishment if the company in 2015, it has been one of the leading companies in the field of transportation services, and daily and long-haul car and bus rental
                        The company has a long history of achievements and provides distinguished services in the field of transportation with high professionalism and strong empowerment stemming from accumulated experience, as our company includes an administrative and technical staff with a high level of experience and efficiency that allows them to provide the best services to our customers at competitive prices.
                    </p>
                    <Link to={'/aboutus'}> <button className='border-2 border-[#e64a41] text-[#e64a41] text-xl font-semibold p-3 px-7 rounded-md mt-10 hover:scale-110 duration-300'>Read More</button></Link>
                </motion.div>
            </div>
            <div className='flex flex-wrap w-3/4 mx-auto'>
                <div className='w-full md:w-2/4 mx-auto'>
                    <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mt-10'>
                        <img decoding="async" src={ourVision} title="Untitled design (32)" alt="Untitled design (32)" loading="lazy" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <h3 className='text-3xl my-5'>Our Vision</h3>
                        <p className='w-11/12 tracking-wide'>
                            The company’s vision is to strive to occupy a prominent and leading position among VIP transport and bus rental companies at the local and international levels. We strive to earn the trust and loyalty of our customers in the long term by providing high-quality and professional services with highly trained staff to find creative and innovative fleet management solutions. Also, by exploiting its technical and human resources and the supporting equipment available to it.
                        </p>
                        <Link to={'/aboutus'} className='flex items-center gap-5 mt-5 mb-10 text-[#e64a41]'>
                            <h5 className=''>read more</h5>
                            <i className="fa-solid fa-arrow-left text-sm"></i>
                        </Link>
                    </motion.div>
                </div>
                <div className='w-full md:w-2/4 mx-auto'>
                    <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='mt-10'>
                        <img decoding="async" src={ourMission} title="Untitled design (33)" alt="Untitled design (33)" loading="lazy" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <h3 className='text-3xl my-5'>Our mission</h3>
                        <p className='w-11/12 tracking-wide'>
                            It is to spread the true concept of quality in the field of transportation, bus rental and VIP cars through our diligent and advanced work and our knowledge of all the details of the services we provide to our customers.
                            Evolution and keeping pace with the times is one of the most important points on which the company is based to ensure a unique and distinguished experience for our customers.
                            Mastery of work and teamwork is a message rooted in the conscience of the company’s staff, which ensures the quality of service provided to business owners, individuals and various institutions and establishments.
                        </p>
                        <Link to={'/aboutus'} className='flex items-center gap-5 mt-5 mb-10 text-[#e64a41]'>
                            <h5 className=''>read more</h5>
                            <i className="fa-solid fa-arrow-left text-sm"></i>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
