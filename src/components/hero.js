import React from 'react'
import Navigation from './navigation'
import HackathonGuy from '../assets/img/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Light from '../assets/img/vector.png'
import Star from '../assets/img/star.png'
import StarOpaque from '../assets/img/star-opaque.png'
import Chain from '../assets/img/chain-9365116-7621444.png'
import Flames from '../assets/img/1f4a5.png'
import { ReactComponent as Vector } from '../assets/svg/Vector 4.svg'
import Buttons from './button'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='section-hero min-h-[110vh] border-bt'>
            <Navigation />
            <h1 className='text-right mt-8 text-[36px] italic font-bold mr-[55px]'>Igniting a Revolution in HR Innovation</h1>
            <div className='flex'>
                <img src={Star} alt='star' className='w-[26px] h-8 ml-[182px]'/>
                <div className='w-full flex justify-end'>
                    <Vector className='mr-[55px]'/>
                </div>
            </div>
            <img src={StarOpaque} alt='star' className='w-[26px] h-8 right-[45%] absolute'/>
            <div className='flex mt-[27px] w-full'>
                <div className='ml-[128px] mt-10 absolute'>
                    <h1 className='text-[80px] font-bold font-clash-display heading'>getlinked Te<span>c</span>h</h1>
                    <div className='flex items-center'>
                        <h1 className='text-[80px] font-bold font-clash-display'>Hackathon <span className='text-secondary'>1.0</span></h1>
                        <img src={Chain} alt='chain' className='mix-blend-lighten'/>
                        <img src={Flames} alt='flames' className='w-[58px] h-[58px]'/>
                    </div>
                    <h2 className='w-[70%] mt-2 text-[20px]'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h2>
                    <div className='mt-10'>
                        <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                    </div>
                    <div className='mt-[77px] mb-[95px] text-[64px] font-unica-one'>
                        00<span className='text-[14px] font-montserrat'>H</span>   00<span className='text-[14px] font-montserrat'>M</span>   00<span className='text-[14px] font-montserrat'>S</span>
                    </div>
                </div>
                <div className='w-full flex h-full justify-end right-0'>
                    <img src={HackathonGuy} alt='hackathon guy' className='relative w-[55%] h-full object-cover mix-blend-luminosity' /> 
                    <img src={Light} alt='hackathon guy' className='absolute right-0 w-[667px] h-full mix-blend-hard-light object-contain' /> 
                </div>
            </div>
        </div>
    )
}
