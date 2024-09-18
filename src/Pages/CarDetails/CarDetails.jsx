import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataCars } from '../../Components/OurCarsDetails/OurCarsDetails';
import { Autoplay, EffectFade, Navigation, Pagination, Zoom } from 'swiper/modules';
import { useForm, ValidationError } from '@formspree/react';
import ourCarsHeader from '../../assets/our-cars-header.jpg'



import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Helmet } from 'react-helmet-async';


export default function CarDetails() {

    const [secPageForm, setSecPageForm] = useState(false)
    let params = useParams()
    // console.log(params);
    // console.log(dataCars);
    const [state, handleSubmit] = useForm("xnnarjoq");

    return (<>
        <Helmet>
            <meta name="description" content="Al Asayel For Luxury Tourist Transport" />
            <title>{params.content}</title>
        </Helmet>
        <section className={`py-1 pb-52 bg-[url(assets/main-bg.jpg)]`}>
            <div className='w-full mb-12 relative overflow-hidden'>
                <div className='w-full bg-slate-700 bg-opacity-50 absolute top-0 left-0 right-0 bottom-0'>
                    <motion.h2 initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='text-white text-3xl absolute top-1/2 -translate-y-1/2 left-3'>{params.content}</motion.h2>
                </div>
                <img className='h-[400px] object-cover w-full' src={ourCarsHeader} alt="" />
            </div>
            <div className='flex flex-wrap justify-center gap-5 mb-16 w-full lg:w-11/12 mx-auto border-b pb-10'>
                <div className='w-10/12 lg:w-1/3 h-full'>
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        zoom={true}
                        autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
                        loop
                        modules={[EffectFade, Navigation, Pagination, Autoplay, Zoom]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgOne} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgTwo} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgThree} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgFour} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgFive} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgSix} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-zoom-container">
                                <img className='object-fill' src={dataCars[params.undefined].sliderimg.imgSeven} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-full lg:w-1/3 mt-5 lg:mt-0'>
                    <form onSubmit={handleSubmit} className="w-10/12 lg:w-4/5 mx-auto border rounded-lg h-full p-3 bg-white">
                        <h2 className='mb-5 text-2xl font-bold'>Book this vehicle</h2>
                        <div className={`${secPageForm ? 'hidden' : ''}`}>
                            <div className="mb-10">
                                <input readOnly={true} value={params.content} type="text" id="carNames" name='carName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="نوع السيارة" />
                                <ValidationError
                                    prefix="carNames"
                                    field="carName"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10">
                                <input type="text" id="inputOne" name='locationOne' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Pick-up Location" />
                                <ValidationError
                                    prefix="inputOne"
                                    field="locationOne"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10">
                                <input type="text" id="inputTwo" name='locationTwo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Drop-off Location' />
                                <ValidationError
                                    prefix="inputTwo"
                                    field="locationTwo"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10 flex flex-col items-center">
                                <label className='text-lg' htmlFor="inputThree">Pick-up Date</label>
                                <input type="date" id="inputThree" name='dateOne' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Pick-up Date' />
                                <ValidationError
                                    prefix="inputThree"
                                    field="dateOne"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10 flex flex-col items-center">
                                <label className='text-lg' htmlFor="inputFour">Drop-off</label>
                                <input type="date" id="inputFour" name='dateTwo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Drop-off' />
                                <ValidationError
                                    prefix="inputFour"
                                    field="dateTwo"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className={`${secPageForm ? '' : 'hidden'}`}>
                            <div className="mb-10">
                                <input type="text" id="inputFive" name='Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" />
                                <ValidationError
                                    prefix="inputFive"
                                    field="Name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10">
                                <input type="email" id="inputSix" name='Email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Email' />
                                <ValidationError
                                    prefix="inputSix"
                                    field="Email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="mb-10">
                                <input type="tel" id="inputSeven" name='phone' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Phone Number' required />
                                <ValidationError
                                    prefix="inputSeven"
                                    field="phone"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div onClick={() => setSecPageForm(!secPageForm)} className={`${secPageForm ? 'hidden' : ''} text-white bg-[#ee4023] hover:bg-[#ed4d31] font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center cursor-pointer`}>Next</div>
                        <div className='flex gap-3'>
                            <div onClick={() => setSecPageForm(!secPageForm)} className={`${secPageForm ? '' : 'hidden'} text-white bg-[#ee4023] hover:bg-[#ed4d31] font-medium rounded-lg text-lg w-1/2 px-5 py-2.5 text-center cursor-pointer`}>Previous</div>
                            <button type="submit" disabled={state.submitting} className={`${secPageForm ? '' : 'hidden'} text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-lg w-1/2 px-5 py-2.5 text-center cursor-pointer`}>{state.submitting ? 'Submit...' : 'Submit'}</button>
                        </div>
                        <p className='w-full p-5 text-left tracking-wider text-2xl text-emerald-400'>{state.succeeded ? 'Submit Succeeded' : ''}</p>
                    </form>
                </div>
                <div className='w-3/5 mt-5'>
                    <ul className='flex flex-wrap justify-center items-center text-center gap-10 text-xl'>
                        <li className=''><i className="fa-brands fa-bluetooth text-2xl text-[#e64c43]"></i> Bluetooth</li>
                        <li className=''><i className="fa-regular fa-lightbulb text-2xl text-[#e64c43]"></i> LED headlight</li>
                        <li className=''><i className="fa-brands fa-usb text-2xl text-[#e64c43]"></i> USB Port</li>
                        <li className=''><i className="fa-solid fa-location-dot text-2xl text-[#e64c43]"></i> Navigation system</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center w-10/12 mx-auto'>
                <div className='w-full mx-auto lg:w-1/3'>
                    <h3 className='text-3xl py-3 border-t-2 border-[#e64c43] rounded-md w-16'>Video</h3>
                    <video className="wp-video-shortcode rounded-lg" id="video-25312-2" width={640} height={360} preload="metadata" controls="controls"><source type="video/mp4" src={dataCars[params.undefined].video} /></video>
                </div>
                <div className='w-full mx-auto lg:w-1/3 mt-5 lg:mt-0'>
                    <ul className='border p-3 flex flex-col gap-y-5 bg-white rounded-lg'>
                        <li className='text-2xl'>Specifications</li>
                        <ul className='flex gap-5 p-3'>
                            <li className='pr-5 border-r border-slate-950'>
                                <h3 className='text-lg'>Fleets Type</h3>
                                <p className='text-sm'>Mini-Bus</p>
                            </li>
                            <li className='pr-5 border-r border-slate-950'>
                                <h3 className='text-lg'>Brand</h3>
                                <p className='text-sm'>Mercedes</p>
                            </li>
                            <li className=''>
                                <h3 className='text-lg'>Seats</h3>
                                <p className='text-sm'>30</p>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    </>)
}

