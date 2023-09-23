import React from 'react'
import { useNavigate } from 'react-router-dom'
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
import { ReactComponent as Group } from '../assets/svg/Group 1.svg'
import { handleNavigation } from '../library/helperFunction'

export default function Contact() {
    const navigate = useNavigate()
    
    return (
        <motion.div
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 0}}
            transition={{delay: 0.25, type: "spring"}}
            className='section min-h-auto contact'
        >
            <Navigation />
            <div className='desktop:hidden w-full pt-[47px] px-[13%]' onClick={() => navigate('/')}>
                <Group />
                <div className='desktop:hidden flex justify-center w-full'>
                    <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[11px] h-[13px]'/>
                </div>
            </div>
            <div className='desktop:mt-[51px] mt-[31px] desktop:pb-[11.7%] pb-[36.44px] px-[8%] flex w-full'>
                <img src={StarOutline} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:block hidden mr-11 w-[23px] h-7 mt-[16%]'/>
                <div className='flex flex-col flex-1'>
                    <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower absolute desktop:static desktop:w-[26px] w-4 desktop:h-8 h-5 flex self-end mr-[5%]'/>
                    <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:block hidden mt-1 w-[21px] h-[25px]'/>
                    <div className='desktop:mt-8 flex w-full justify-between'>
                        <div className='mt-[5%] desktop:block hidden'>
                            <div className='w-[272px]'>
                                <h1 className='text-[32px] font-bold font-clash-display text-secondary'>Get in touch</h1>
                                <p className='mt-[17px] text-[16px] w-[96px]'>Contact Information</p>
                                <p className='mt-[17px] text-[16px] w-[119px]'>27,Alara Street Yaba 100012 Lagos State</p>
                                <p className='mt-[21px] text-[16px]'>Call Us : 07067981819</p>
                                <p className='mt-[22px] text-[16px]'>we are open from Monday-Friday 08:00am - 05:00pm</p>
                                <p className='mt-[35px] text-[16px] text-secondary'>Share on</p>
                                <div className='mt-[14px] flex gap-[19px] items-center cursor-pointer'>
                                    <Instagram onClick={() => handleNavigation('https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA==')} />
                                    <Twitter onClick={() => handleNavigation('https://x.com/getlinkedai?s=11&t=O7i9Vbkwj72Q_kAExuGNoA')}/>
                                    <Facebook onClick={() => handleNavigation('https://www.facebook.com/getLinkedai?mibextid=LQQJ4d')}/>
                                    <Linkedin onClick={() => handleNavigation('https://www.linkedin.com/company/getlinked-ai/')}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex desktop:w-[60%] w-full'>
                            <div className='absolute -ml-[15px] flex items-center h-full'>
                                <img src={StarPu} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[30px] w-[12px] desktop:h-9 h-[15px]'/>
                            </div>
                            <div className='rounded-[12px] contact-box desktop:w-[90%] w-full'>
                                <h1 className='text-[20px] font-semibold text-secondary'>Questions or need assistance?</h1>
                                <h1 className='desktop:mt-[7px] text-[20px] font-semibold text-secondary'>Let us know  about it!</h1>
                                <p className='desktop:hidden text-[12px] mt-6'>Email us below to any question related to our event</p>
                                <ContactForm />
                            </div>
                            <div className='h-full flex items-end desktop:ml-[54px] '>
                                <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[12px] desktop:h-8 h-[15px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[41px] desktop:hidden w-full items-center flex flex-col'>
                        <p className='text-[12px] text-secondary'>Share on</p>
                        <div className='flex gap-[13.11px] items-center cursor-pointer'>
                            <Instagram onClick={() => handleNavigation('https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA==')} />
                            <Twitter onClick={() => handleNavigation('https://x.com/getlinkedai?s=11&t=O7i9Vbkwj72Q_kAExuGNoA')}/>
                            <Facebook onClick={() => handleNavigation('https://www.facebook.com/getLinkedai?mibextid=LQQJ4d')}/>
                            <Linkedin onClick={() => handleNavigation('https://www.linkedin.com/company/getlinked-ai/')}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
