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
import Countdown from './countdown'
import Typed from 'react-typed';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='section-hero desktop:min-h-[110vh] min-h-auto border-bt'>
            <Navigation />
            <Typed
                strings={[
                    'Igniting a Revolution in HR Innovation'
                ]}
                typeSpeed={50}
                backSpeed={50}
                cursorChar=''
                className="w-full flex justify-end typed-header text-right mt-[31px] desktop:text-[36px] text-[16px] italic font-bold"
            />
            <div className='flex desktop:flex-row flex-col-reverse'>
                <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3 ml-[182px] desktop:mt-0 mt-[18px]'/>
                <div className='w-full flex justify-end'>
                    <Vector className='desktop:mr-[55px] mr-[33px] desktop:w-fit w-[115px] desktop:h-fit h-[7px]'/>
                </div>
            </div>
            <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[6px] desktop:h-8 h-2 right-[45%] absolute'/>
            <div className='flex desktop:flex-row flex-col desktop:mt-[27px] mt-[30px] w-full desktop:items-start items-center'>
                <div className='desktop:ml-[8.4%] desktop:mt-10 mt-[14px] desktop:absolute'>
                    <h1 className='text-center desktop:text-start text-[32px] desktop:text-[80px] font-bold font-clash-display heading'>getlinked Te<span>c</span>h</h1>
                    <div className='flex items-center justify-center desktop:justify-start -mb-[5px]'>
                        <h1 className='text-[32px] desktop:text-[80px] font-bold font-clash-display'>Hackathon <span className='text-secondary'>1.0</span></h1>
                        <img src={Chain} alt='chain' className='mix-blend-lighten desktop:w-fit desktop:h-fit w-8 h-8'/>
                        <img src={Flames} alt='flames' className='desktop:w-[58px] w-[22.12px] desktop:h-[58px] h-[22.12px]'/>
                    </div>
                    <div className='desktop:w-[70%] w-full mt-2 '>
                        <h2 className='w-[264px] desktop:w-full text-center desktop:text-start desktop:text-[20px] text-[13px]'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h2>
                    </div>
                    <div className='desktop:mt-10 mt-6 flex justify-center desktop:justify-start'>
                        <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                    </div>
                    <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[6px] desktop:h-8 h-2 desktop:mt-[5%] desktop:ml-[35%] ml-[30%] absolute'/>
                    <Countdown />
                </div>
                <div className='w-full flex h-full desktop:justify-end justify-center right-0 relative desktop:static'>
                    <img src={HackathonGuy} alt='hackathon guy' className='relative desktop:w-[55%] w-full h-full object-cover mix-blend-luminosity' /> 
                    <img src={Light} alt='light' className='App-logo absolute desktop:right-0 desktop:w-[50%] w-full desktop:h-[641px] h-full mix-blend-hard-light object-contain -mt-[3%]' /> 
                </div>
            </div>
        </div>
    )
}
