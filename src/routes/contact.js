import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/navigation'
import StarOpaque from '../assets/img/star-opaque.png'
import Star from '../assets/img/sata gra.png'
import StarPu from '../assets/img/star pu.png'
import StarWhite from '../assets/img/star.png'
import StarOutline from '../assets/img/star outlin.png'
import { ReactComponent as Twitter } from '../assets/svg/Vector (5).svg'
import { ReactComponent as Facebook } from '../assets/svg/Vector (6).svg'
import { ReactComponent as Instagram } from '../assets/svg/mdi_instagram.svg'
import { ReactComponent as Linkedin } from '../assets/svg/ri_linkedin-fill.svg'
import ContactForm from '../components/forms/contactForm'

export default function Contact() {
    return (
        <motion.div
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 0}}
            transition={{delay: 0.25, type: "spring"}}
            className='section min-h-screen contact'
        >
            <Navigation />
            <div className='mt-[51px] pb-[11.7%] px-[8%] flex w-full'>
                <img src={StarOutline} alt='star' className='mr-11 w-[23px] h-7 mt-[16%]'/>
                <div className='flex flex-col flex-1'>
                    <img src={StarOpaque} alt='star' className='w-[26px] h-8 flex self-end mr-[5%]'/>
                    <img src={Star} alt='star' className='mt-1 w-[21px] h-[25px]'/>
                    <div className='mt-8 flex w-full justify-between'>
                        <div className='mt-[5%]'>
                            <div className='w-[272px]'>
                                <h1 className='text-[32px] font-bold font-clash-display text-secondary'>Get in touch</h1>
                                <p className='mt-[17px] text-[16px] w-[96px]'>Contact Information</p>
                                <p className='mt-[17px] text-[16px] w-[119px]'>27,Alara Street Yaba 100012 Lagos State</p>
                                <p className='mt-[21px] text-[16px]'>Call Us : 07067981819</p>
                                <p className='mt-[22px] text-[16px]'>we are open from Monday-Friday 08:00am - 05:00pm</p>
                                <p className='mt-[35px] text-[16px] text-secondary'>Share on</p>
                                <div className='mt-[14px] flex gap-[19px] items-center cursor-pointer'>
                                    <Instagram />
                                    <Twitter />
                                    <Facebook />
                                    <Linkedin />
                                </div>
                            </div>
                        </div>
                        <div className='flex w-[60%]'>
                            <div className='absolute -ml-[15px] flex items-center h-full'>
                                <img src={StarPu} alt='star' className='w-[30px] h-9'/>
                            </div>
                            <div className='rounded-[12px] contact-box w-[90%]'>
                                <h1 className='text-[20px] font-semibold text-secondary'>Questions or need assistance?</h1>
                                <h1 className='mt-[7px] text-[20px] font-semibold text-secondary'>Let us know  about it!</h1>
                                <ContactForm />
                            </div>
                            <div className='h-full flex items-end ml-[54px] '>
                                <img src={StarWhite} alt='star' className='w-[26px] h-8'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
