import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Manual from '../assets/img/cwok_casual_21 1.png'
import Star from '../assets/img/star pu.png'
import StarWhite from '../assets/img/star-opaque.png'
import Star2 from '../assets/img/star.png'
import Question from '../assets/img/question.png'
import Frequent from './frequent'
import { useLocation } from 'react-router-dom'

export default function Faq() {
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

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    
    return (
        <div className='section-one border-bt'>
            <div className='flex flex-col desktop:flex-row w-full items-center desktop:pl-[13.54%] px-[47px] desktop:pr-[6.51%] desktop:pt-8 pt-[47px] pb-16' id='faq'>
                <div className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 mt-10`} ref={ref}>
                    <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[18px] desktop:h-8 h-[22px] desktop:-ml-6 desktop:mb-5'/>
                    <h1 className='desktop:text-[32px] text-[20px] font-bold font-clash-display desktop:w-[253px] text-center desktop:text-start'>Frequently Ask <br /><span className='text-secondary'>Question</span></h1>
                    <h2 className='desktop:mt-4 mt-[6px] desktop:w-[342px] desktop:text-[14px] text-[12px] w-full text-center desktop:text-start'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></h2>
                    <div className='flex flex-col desktop:flex-row desktop:gap-12'>
                        <div className='desktop:mt-[68px] mt-[45.69px] flex flex-col gap-[13.39px] desktop:gap-[25px] desktop:w-[427px] w-full'>
                            <Frequent title={'Can I work on a project I started before the hackathon?'}/>
                            <Frequent title={'What happens if I need help during the hackathon?'}/>
                            <Frequent title={"What happens if I don't have an idea for a project?"}/>
                            <Frequent title={'Can I join a team or do I have to come with one?'}/>
                            <Frequent title={'What happens after the hackathon ends'}/>
                            <Frequent title={'Can I work on a project I started before the hackathon?'}/>
                        </div>
                        <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:block hidden w-[26px] h-8 ml-[10%] mt-[27%]'/>
                    </div>
                </div>
                <div className='desktop:w-[60%] w-full flex flex-col h-full mt-[63px] desktop:mt-0 items-center desktop:items-start'>
                    <div className='flex justify-between w-[70%] -mb-[25px]'>
                        <div className='mt-12 desktop:w-[114px] w-[50px] desktop:h-[71px] h-8 relative faq -ml-10 desktop:ml-0'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                        <div className='desktop:w-[114px] w-[60px] desktop:h-[71px] h-[60px]'>
                            <img src={Question} alt='question' className='w-full h-full object-contain'/>
                        </div>
                        <div className='mt-12 desktop:w-[114px] w-[50px] desktop:h-[71px] h-8 relative faq-two flex mr-[30px] desktop:mr-0'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <div className='flex flex-col desktop:gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain' />
                        <div className='desktop:hidden block absolute mt-[50%]'>
                            <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[10px] h-3'/>
                        </div>
                        <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-4 desktop:h-8 h-5 self-end mr-[17%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
