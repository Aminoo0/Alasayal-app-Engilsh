import React from 'react'
import ContactUsCaption from '../ContactUsCaption/ContactUsCaption'
import footerLogo from '../../assets/main-logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<>
    <footer className='bg-[#1f1d0d] pt-52 pb-5 relative'>
      <ContactUsCaption />
      <div className='w-11/12 mx-auto flex items-center lg:gap-x-20 gap-y-5 flex-wrap lg:flex-nowrap border-b-2 border-opacity-25 border-white'>
        <div className='w-full lg:w-1/4'>
          <div className='w-4/5 mx-auto lg:w-full'>
            <Link to={'https://en.alasayeltours.com/'}>
              <img loading="lazy" src={footerLogo} className="attachment-full w-full size-full wp-image-25148" srcSet={footerLogo} /></Link>
          </div>
          <p className='text-white my-8'>
            Al-Asayel (Eitmar) Transport Company is a company specializing in the field of VIP bus rental services locally and internationally.
            Since the establishment of the company in 2015, it has been one of the leading companies in the field of transportation services, and daily and
            long-haul car and bus rental.
          </p>
        </div>
        <div className='my-5 w-full md:w-1/2 lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>Main Links</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <Link to={'/'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i> Home</li></Link>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i> Our Fleets</li></Link>
              <Link to={'/aboutus'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i> About Us</li></Link>
              <Link to={'/contactus'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i> Contact Us</li></Link>
            </ul>
          </ul>
        </div>
        <div className='my-5 w-full md:w-1/2 lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>Fleets</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i>Car</li></Link>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i>Van</li></Link>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i>Mini Bus</li></Link>
              <Link to={'/ourcars'}><li className='hover:text-[#e64a41] hover:ml-3 cursor-pointer duration-300'> <i className="fa-solid fa-caret-right mr-3 text-[#e64a41]"></i>Bus</li></Link>
            </ul>
          </ul>
        </div>
        <div className='my-5 w-full lg:w-1/4'>
          <ul className='flex flex-col gap-y-5'>
            <li className='text-[#e64a41]'>Contacts</li>
            <ul className='text-white mr-5 flex flex-col gap-y-3'>
              <li className=''><i className="fa-solid fa-location-dot mr-3 text-[#e64a41]"></i>Kingdom of Saudi Arabia - Riyadh - Rawabi - Prince Saad Road - Ibn Abdul Rahman Al Awal - Al Azizia - Public Transport Center</li>
              <li className='cursor-pointer'> <i className="fa-solid fa-phone mr-3 text-[#e64a41]"></i><a href="tel:+966535877758" className="">Buses: +966 53 587 7758
              </a>
              </li>
              <li className='cursor-pointer'> <i className="fa-solid fa-phone mr-3 text-[#e64a41]"></i><a href="tel:966534929551+" className="">
                Cars: +966 53 492 9551
              </a></li>
              <li className='cursor-pointer'> <i className="fa-regular fa-envelope mr-3 text-[#e64a41]"></i><a href="mailto:asayel.bus@gmail.com" className="">asayel.bus@gmail.com</a></li>
            </ul>
          </ul>
        </div>
        {/* <p className='lg:hidden text-center w-full text-[#e64a41] cursor-pointer my-10 text-2xl hover:text-[#842722] duration-300'>Engilsh</p> */}
      </div>
      <p className='text-center mt-8 text-white'>Copyright © 2023 . All Rights Reserved To <Link to={'https://en.alasayeltours.com/'} className='text-[#e64a41] cursor-pointer'>Alasayel</Link></p>
    </footer>
  </>)
}
