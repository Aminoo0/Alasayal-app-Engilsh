import React, { useEffect, useState } from 'react'
import ourCarsHeader from '../../assets/our-cars-header.jpg'
import { useLocation, useParams } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';


export default function ContactUs() {

  let { pathname } = useLocation()
  const [state, handleSubmit] = useForm("xnnarjoq");
  let params = useParams()


  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (<>
    <Helmet>
      <meta name="description" content="Al Asayel For Luxury Tourist Transport" />
      <title>Contact Us</title>
    </Helmet>
    <section className={`pb-32 bg-[url(assets/main-bg.jpg)]`}>
      <div className='w-full mb-10 relative'>
        <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-white text-5xl font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-nowrap'>Contact Us</motion.h2>
        </div>
        <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
      </div>
      <h2 className='w-full text-center my-5 text-5xl font-semibold'>Contact Us</h2>
      <div className='flex flex-wrap justify-center text-center gap-y-5 my-5 text-lg'>
        <div className='w-full lg:w-1/2'>
          <p className='w-4/5 lg:w-1/2 mx-auto'> <i className="fa-solid fa-location-dot ml-3 text-[#e64c43]"></i> Kingdom of Saudi Arabia - Riyadh - Rawabi - Prince Saad Road - Ibn Abdul Rahman Al Awal - Al Azizia - Public Transport Center </p>
        </div>
        <a className='w-full lg:w-1/2' href="mailto:asayel.bus@gmail.com"> <i className="fa-solid fa-envelope ml-3 text-[#e64c43]"></i> asayel.bus@gmail.com</a>
        <a className='w-full lg:w-1/2' href="tel:+966535877758"> <i className="fa-solid fa-phone ml-3 text-[#e64c43]"></i> Buses: +966 53 587 7758</a>
        <a className='w-full lg:w-1/2' href="tel:+966534929551"> <i className="fa-solid fa-phone ml-3 text-[#e64c43]"></i> Cars: +966 53 492 9551</a>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center gap-10'>
        <div className="w-full lg:w-1/2 flex justify-start order-2">
          <iframe className='w-11/12 mx-auto lg:mx-0 lg:w-2/3 h-[600px] rounded-lg' loading="lazy" src="https://maps.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D8%B9%D8%AA%D9%85%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A7%D8%B5%D8%A7%D9%8A%D9%84%20%D9%84%D9%84%D9%86%D9%82%D9%84%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%8C%20Riyadh%20Saudi%20Arabia&t=m&z=15&output=embed&iwloc=near" title="شركة اعتمار الاصايل للنقل السياحي، Riyadh Saudi Arabia" aria-label="شركة اعتمار الاصايل للنقل السياحي، Riyadh Saudi Arabia" />
        </div>
        <div className='w-full lg:w-1/2 flex justify-end order-1'>
          <form onSubmit={handleSubmit} className="w-11/12 mx-auto lg:mx-0 lg:w-4/5 lg:h-[600px] border rounded-lg p-3 bg-white">
            <h2 className='mb-5 text-2xl font-bold text-center'>Send Message</h2>
            <div className='flex flex-wrap lg:flex-nowrap lg:gap-5'>
              <div className="mb-10 w-full lg:w-1/2">
                <input type="text" id="nameInput" name='nameInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" />
                <ValidationError
                  prefix="nameInput"
                  field="nameInput"
                  errors={state.errors}
                />
              </div>
              <div className="mb-10 w-full lg:w-1/2">
                <input type="email" id="emailInput" name='emailInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Your Email' />
                <ValidationError
                  prefix="emailInput"
                  field="emailInput"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap lg:gap-5'>
              <div className="mb-10 w-full lg:w-1/2">
                <input type="tel" id="telInput" name='telInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Your Phone' required />
                <ValidationError
                  prefix="telInput"
                  field="telInput"
                  errors={state.errors}
                />
              </div>
              <div className="mb-10 w-full lg:w-1/2">
                <input type="text" id="contentInput" name='contentInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Your Subject' />
                <ValidationError
                  prefix="contentInput"
                  field="contentInput"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mb-10">
              <textarea type="text" id="yourMessageInput" name='yourMessageInput' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[150px]" placeholder="Your Message" />
              <ValidationError
                prefix="yourMessageInput"
                field="yourMessageInput"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting} className='text-white bg-[#e64c43] hover:bg-[#e3251b] duration-300 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center cursor-pointer tracking-wider'>{state.submitting ? 'Send Message....' : 'Send Message'}</button>
            <p className='w-full p-5 text-left tracking-wider text-2xl text-emerald-400'>{state.succeeded ? 'Send Succeeded' : ''}</p>
          </form>
        </div>
      </div>
    </section>
  </>)
}
