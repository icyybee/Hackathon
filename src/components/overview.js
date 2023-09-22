import React, { useEffect } from 'react'
import Idea from '../assets/img/the big idea 1.png'
import Star from '../assets/img/sata gra.png'
import { useLocation } from 'react-router-dom';

export default function Overview() {
    const location = useLocation()
    
    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className='section-plain border-bt'  id='overview'>
            <div className='flex items-center w-full pl-[181px] pr-[167px] pt-[62px] pb-[78px]'>
                <div className='w-[40%] idea flex flex-col'>
                    <div className='flex gap-8 items-center '>
                        <img src={Star} alt='star' className='w-[21px] h-[25px]'/>
                        <img src={Idea} alt='big idea' className='w-[490px] h-full object-contain' />
                    </div>
                </div>
                <div className='flex-1 ml-[109px]'>
                    <div className='flex items-center gap-[97px]'>
                        <h1 className='text-[32px] font-bold font-clash-display w-[420px]'>Introduction to getlinked <span className='text-secondary'>tech Hackathon 1.0</span></h1>
                        <img src={Star} alt='star' className='w-[21px] h-[25px]'/>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[14px] leading-[27.5px]'>
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
