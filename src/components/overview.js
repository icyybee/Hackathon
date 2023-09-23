import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Idea from '../assets/img/the big idea 1.png'
import Star from '../assets/img/sata gra.png'
import { useLocation } from 'react-router-dom';

export default function Overview() {
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
        <div className='section-plain border-bt' id='overview'>
            <div className='flex flex-col desktop:flex-row items-center w-full pl-[13.02%] pr-[10.84%] desktop:pt-[62px] pt-[29px] desktop:pb-[78px] pb-12'>
                <div className='desktop:w-[40%] w-full idea flex flex-col'>
                    <div className='flex desktop:gap-8 items-center '>
                        <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[21px] w-[11px] desktop:h-[25px] h-[13px]'/>
                        <img src={Idea} alt='big idea' className='desktop:w-[490px] w-full h-full object-contain' />
                    </div>
                </div>
                <div className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated desktop:flex-1 desktop:ml-[109px] w-full`} ref={ref}>
                    <div className='flex items-center desktop:gap-[97px] gap-[18px]'>
                        <h1 className='desktop:text-[32px] text-[20px] font-bold font-clash-display desktop:w-[420px] w-full text-center desktop:text-start'>Introduction to getlinked <br /><span className='text-secondary'>tech Hackathon 1.0</span></h1>
                        <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[21px] w-2 desktop:h-[25px] h-[10px] absolute right-[16%] mt-[5%]'/>
                    </div>
                    <div className='desktop:mt-4 mt-[9px]'>
                        <p className='desktop:text-[14px] text-[13px] text-center desktop:text-start leading-[27.5px]'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
