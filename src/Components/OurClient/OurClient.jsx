import React from 'react'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'
import logo9 from '../../assets/logo9.png'

export default function OurClient() {
    return (
        <section className={`bg-[url(assets/main-bg.jpg)]`}>
            <div className='bg-black bg-opacity-5 pt-10 pb-32'>
                <h1 className='text-center text-3xl font-semibold'>Our clients</h1>
                <div className='flex  justify-center gap-y-10 flex-wrap w-4/5 md:w-2/4 mx-auto'>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo1} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo2} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo3} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo4} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo5} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo6} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo7} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo8} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center w-1/3 lg:w-1/5 p-3 '>
                        <div className='flex gap-y-5 flex-wrap flex-col justify-center items-center hover:scale-110 duration-300'>
                            <img loading="lazy" decoding="async" width={130} height={130} src={logo9} className="attachment-full size-full wp-image-23813" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
