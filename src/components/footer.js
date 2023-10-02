import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleNavigation } from '../library/helperFunction'
import { ReactComponent as Phone } from '../assets/svg/Group.svg'
import { ReactComponent as Map } from '../assets/svg/Vector (7).svg'
import { ReactComponent as Twitter } from '../assets/svg/Vector (5).svg'
import { ReactComponent as Facebook } from '../assets/svg/Vector (6).svg'
import { ReactComponent as Instagram } from '../assets/svg/mdi_instagram.svg'
import { ReactComponent as Linkedin } from '../assets/svg/ri_linkedin-fill.svg'
import Star from '../assets/img/sata gra2.png';
import Star2 from '../assets/img/star.png';
import Star3 from '../assets/img/star-opaque.png';

export default function Footer() {
    const navigate = useNavigate()
    const location = useLocation()
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);

    return (
        <div className='section-plain desktop:pt-[70px] desktop:pb-[54px] pb-5 px-[15%]'>
            <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated w-full flex flex-col desktop:flex-row`}>
                <img src={Star2} className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[15px] w-[9px] desktop:h-[18px] h-[10px] desktop:mt-[3%] mt-[10%] -ml-[5%] absolute'/>
                <div className='desktop:w-[60%] w-full'>
                    <div className='desktop:w-[80%] w-full'>
                        <h1 onClick={() => navigate('/')} className='font-clash-display cursor-pointer text-[20px] mid:text-[30px] font-bold'>get<span className='text-secondary'>linked</span></h1>
                        <p className='desktop:mt-1 mt-3 text-[12px]'>
                            Getlinked Tech Hackathon is a technology innovation program 
                            established by a group of organizations with the aim of showcasing 
                            young and talented individuals in the field of technology
                        </p>
                    </div>
                </div>
                <div className='desktop:hidden mt-[39px] mb-8'>
                    <p className='flex text-[12px]'>Terms of Use<span className='mx-[10px] w-[2px] h-[17px] bg-secondary inline-block'></span>Privacy Policy</p>
                </div>
                <div className='flex-1 flex flex-col desktop:flex-row justify-between'>
                    <div>
                        <h2 className='text-[14px] font-semibold text-secondary mb-[6px]'>Useful Links</h2>
                        <div className='flex flex-col gap-[11px]'>
                            <p className='text-[12px] cursor-pointer' 
                                onClick={() => {
                                    if (location.pathname ==='/'){
                                        const element = document.querySelector('#overview')
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    } else{
                                        navigate('/#overview')
                                    }
                                }}
                            >Overview</p>
                            <p className='text-[12px] cursor-pointer' 
                                onClick={() => {
                                    if (location.pathname ==='/'){
                                        const element = document.querySelector('#timeline')
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    } else{
                                        navigate('/#timeline')
                                    }
                                }}
                            >Timeline</p>
                            <p className='text-[12px] cursor-pointer' 
                                onClick={() => {
                                    if (location.pathname ==='/'){
                                        const element = document.querySelector('#faq')
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    } else{
                                        navigate('/#faq')
                                    }
                                }}
                            >FAQs</p>
                            <p className='text-[12px] cursor-pointer' onClick={() => navigate('/registration')}>Register</p>
                        </div>
                    </div>
                    <div className='flex gap-4 flex-1 items-center desktop:hidden mt-[18px]'>
                        <p className='text-[12px] text-secondary'>Follow us</p>
                        <div className='flex gap-[19px] items-center cursor-pointer'>
                            <Instagram onClick={() => handleNavigation('https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA==')} />
                            <Twitter onClick={() => handleNavigation('https://x.com/getlinkedai?s=11&t=O7i9Vbkwj72Q_kAExuGNoA')}/>
                            <Facebook onClick={() => handleNavigation('https://www.facebook.com/getLinkedai?mibextid=LQQJ4d')}/>
                            <Linkedin onClick={() => handleNavigation('https://www.linkedin.com/company/getlinked-ai/')}/>
                        </div>
                    </div>
                    <div className='mt-16 desktop:mt-0'>
                        <h2 className='text-[14px] font-semibold text-secondary desktop:mb-[19px] mb-2'>Contact Us</h2>
                        <img src={Star3} className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[15px] w-[7px] desktop:h-[18px] h-2 absolute desktop:-ml-[5%] ml-[30%]' />
                        <div className='flex flex-col gap-[22px]'>
                            <div className='flex gap-4'>
                                <Phone />
                                <p className='text-[12px]'>+234 679 81819</p>
                            </div>
                            <div className='flex gap-4'>
                                <Map />
                                <p className='text-[12px] w-[89px]'>27,Alara Street
                                    Yaba 100012
                                    Lagos State
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop:flex mt-[18px] hidden'>
                <div className='w-[60%]'>
                    <p className='flex text-[12px]'>Terms of Use<span className='mx-[10px] w-[2px] h-[17px] bg-secondary inline-block'></span>Privacy Policy</p>
                </div>
                <div className='flex gap-4 flex-1 items-center'>
                    <p className='text-[12px] text-secondary'>Follow us</p>
                    <div className='flex gap-[19px] items-center cursor-pointer'>
                        <Instagram onClick={() => handleNavigation('https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA==')} />
                        <Twitter onClick={() => handleNavigation('https://x.com/getlinkedai?s=11&t=O7i9Vbkwj72Q_kAExuGNoA')}/>
                        <Facebook onClick={() => handleNavigation('https://www.facebook.com/getLinkedai?mibextid=LQQJ4d')}/>
                        <Linkedin onClick={() => handleNavigation('https://www.linkedin.com/company/getlinked-ai/')}/>
                    </div>
                </div>
                <img src={Star2} className='animate__animated animate__flash animate__infinite animate__slower w-[15px] h-[18px]' />
            </div>
            <div className='mt-[67px] w-full flex flex-col items-center'>
                <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[7px] h-2 desktop:w-auto desktop:h-auto' />
                <p className='mt-6 text-[12px]'>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
    )
}
