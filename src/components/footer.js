import React from 'react'
import Logo from '../assets/img/logo.png'
import { ReactComponent as Phone } from '../assets/svg/Group.svg'
import { ReactComponent as Map } from '../assets/svg/Vector (7).svg'
import { ReactComponent as Twitter } from '../assets/svg/Vector (5).svg'
import { ReactComponent as Facebook } from '../assets/svg/Vector (6).svg'
import { ReactComponent as Instagram } from '../assets/svg/mdi_instagram.svg'
import { ReactComponent as Linkedin } from '../assets/svg/ri_linkedin-fill.svg'
import Star from '../assets/img/sata gra2.png';

export default function Footer() {
    return (
        <div className='section-plain pt-[70px] py-[54px] px-[230px]'>
            <div className='w-full flex'>
                <div className='w-[60%]'>
                    <div className='w-[80%]'>
                        <img src={Logo} alt='getlinked logo' className='w-[143px] h-[37px] object-contain cursor-pointer' />
                        <p className='mt-1 text-[12px]'>
                            Getlinked Tech Hackathon is a technology innovation program 
                            established by a group of organizations with the aim of showcasing 
                            young and talented individuals in the field of technology
                        </p>
                    </div>
                </div>
                <div className='flex-1 flex justify-between'>
                    <div>
                        <h2 className='text-[14px] font-semibold text-secondary mb-[6px]'>Useful Links</h2>
                        <div className='flex flex-col gap-[11px]'>
                            <p className='text-[12px]'>Overview</p>
                            <p className='text-[12px]'>Timeline</p>
                            <p className='text-[12px]'>FAQs</p>
                            <p className='text-[12px]'>Register</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[14px] font-semibold text-secondary mb-[19px]'>Contact Us</h2>
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
            <div className='flex mt-[18px]'>
                <div className='w-[60%]'>
                    <p className='flex text-[12px]'>Terms of Use<span className='mx-[10px] w-[2px] h-[17px] bg-secondary inline-block'></span>Privacy Policy</p>
                </div>
                <div className='flex gap-4 flex-1 items-center'>
                    <p className='text-[12px] text-secondary'>Follow us</p>
                    <div className='flex gap-[19px] items-center cursor-pointer'>
                        <Instagram />
                        <Twitter />
                        <Facebook />
                        <Linkedin />
                    </div>
                </div>
            </div>
            <div className='mt-[67px] w-full flex flex-col items-center'>
                <img src={Star} alt='star' />
                <p className='mt-6 text-[12px]'>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
    )
}
