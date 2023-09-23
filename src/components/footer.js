import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleNavigation } from '../library/helperFunction'
import { ReactComponent as Phone } from '../assets/svg/Group.svg'
import { ReactComponent as Map } from '../assets/svg/Vector (7).svg'
import { ReactComponent as Twitter } from '../assets/svg/Vector (5).svg'
import { ReactComponent as Facebook } from '../assets/svg/Vector (6).svg'
import { ReactComponent as Instagram } from '../assets/svg/mdi_instagram.svg'
import { ReactComponent as Linkedin } from '../assets/svg/ri_linkedin-fill.svg'
import Star from '../assets/img/sata gra2.png';

export default function Footer() {
    const navigate = useNavigate()

    return (
        <div className='section-plain desktop:pt-[70px] pt-[51px] py-[54px] px-[14.19%]'>
            <div className='w-full flex flex-col desktop:flex-row'>
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
                            <p className='text-[12px]'>Overview</p>
                            <p className='text-[12px]'>Timeline</p>
                            <p className='text-[12px]'>FAQs</p>
                            <p className='text-[12px]'>Register</p>
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
            <div className='desktop:flex mt-[18px] hidden '>
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
            </div>
            <div className='mt-[67px] w-full flex flex-col items-center'>
                <img src={Star} alt='star' className='w-[7px] h-2 desktop:w-auto desktop:h-auto' />
                <p className='mt-6 text-[12px]'>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
    )
}
