import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import aboutUs1 from '../../assets/about-us-1.jpg'
import aboutUs2 from '../../assets/about-us-2.jpg'
import aboutUsPerson from '../../assets/about-us-person.jpg'
import { useLocation } from 'react-router-dom'

export default function AboutUs() {

  let { pathname } = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <section className='pb-32 overflow-hidden'>
      <div className='w-full relative'>
        <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-5xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>About us</motion.h2>
        </div>
        <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
      </div>
      <div className='py-10 bg-[url(https://alasayeltours.com/wp-content/uploads/2023/11/Untitled-design-57.jpg)]'>
        <div className='flex flex-wrap w-3/4 mx-auto'>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 rounded-3xl'>
            <img className='w-3/4 rounded-3xl mx-auto' src={aboutUs1} alt="" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2'>
            <h2 className='my-5 text-2xl font-bold'>About us</h2>
            <h2 className='my-5 text-xl'>Who we are</h2>
            <p className='text-slate-700 text-lg'>
              Al-Asayel (Eitmar) Transport Company is a company specializing in the field of VIP bus rental services locally and internationally.
              Since the establishment of the company in 2015, it has been one of the leading companies in the field of transportation services, and daily and long-haul car and bus rental.
              The company has a long history of achievements and provides distinguished services in the field of transportation with high professionalism and strong empowerment stemming from accumulated experience, as our company includes an administrative and technical staff with a high level of experience and efficiency that allows them to provide the best services to our customers at competitive prices.
              We always strive at Al-Asayel (Eitmar) Transport Company to develop and provide distinguished services, whether for the individual user or government and commercial institutions, in addition to other entities related to the field of transportation and VIP bus rental.
              So…we provide our customers with comprehensive and distinguished services that are provided with high professionalism to keep pace with local and international standards and meet the needs and requirements of the customers.             </p>
          </motion.div>
        </div>
        <div className='flex flex-wrap mx-auto w-11/12 mt-32'>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2  rounded-3xl lg:order-1'>
            <img className='w-3/4 mx-auto lg:w-full rounded-3xl' src={aboutUs2} alt="" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 '>
            <div className='mx-auto'>
              <h2 className='my-5 text-2xl font-bold'>OUR VALUES</h2>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                At Al-Asayel (Eitmar) Transport Company, we adhere to a set of values and principles that we design and consider our way to success and excellence. These values and principles have contributed to the success of our company and the achievement of our goals, and these values are:
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Team dedication</span>
                Our company team does its best to provide superior service to gain the satisfaction of our customers
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Respect for our customers</span>
                We give our customers full respect and appreciation and always strive to meet their needs optimally.
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Quality Assurance</span>
                The application and commitment to quality standards ultimately leads to a high level of quality and efficiency.</p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Honesty and integrity</span>
                It is one of our most important values and basic principles in all our dealings.</p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Commitment</span>
                It is the most important value through which we can gain the trust of customers and make our company the best choice for them.</p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Innovation and creativity</span>
                in providing solutions that suit all tastes of our customers and contribute to the development of services provided by the company.</p>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-wrap mx-auto w-full mt-32 bg-slate-300 bg-opacity-40 p-3 '>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2  rounded-3xl'>
            <img className='w-3/4 mx-auto lg:w-2/3 rounded-3xl lg:mt-32' src={aboutUsPerson} alt="" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 '>
            <div className='mx-auto'>
              <h2 className='my-5 text-2xl font-bold'>Chairman's Message</h2>
              <p className='text-slate-700 text-lg tracking-wider my-8 w-5/6 mx-auto'>
                As a Chairman, I always focus on excellence and en- hancing the credibility of the company and building a bridge of trust between the company and its customers.</p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Leadership is our motto</span>
                So…we have strived to support the company and provide it with all our material and human energies, and make it one of the famous brands in the field of Vip bus rental services according to the best local and international standards.              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'></span>
                The company has been keen on continuous long-term development, which contributes to strengthening its position in the Saudi labor market.
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'></span>
                by providing first-class services to achieve our motto, which is leadership in everything we do.
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'></span>
                The company aspires to establish a sustainable.
              </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'></span>
                relationship between it and its customers by carrying out the work assigned to it with quality, professionalism, and competitive prices, making it the first choice for its customers.                </p>
              <p className='text-slate-700 tracking-wider my-8 w-5/6 mx-auto'><span className='block text-lg mb-3'>Al-Asayel (Elbmar) Transport Company</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
