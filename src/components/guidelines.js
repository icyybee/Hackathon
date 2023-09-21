import React from 'react'
import Manual from '../assets/img/7450159 1.png'
import Star from '../assets/img/star-opaque.png'
import Star2 from '../assets/img/star.png'

export default function Guidelines() {
    return (
        <div className='section border-bt'>
            <div className='flex items-center w-full pl-[181px] pr-[102px] py-1'>
                <div className='flex-1'>
                    <div className='flex gap-[88px]'>
                        <h1 className='text-[32px] font-bold font-clash-display w-[170px]'>Rules and <span className='text-secondary'>Guidelines</span></h1>
                        <img src={Star} alt='star' className='w-[26px] h-8'/>
                    </div>
                    <div className='mt-4 flex gap-[22px]'>
                        <p className='text-[14px] leading-[27.5px]'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                        <img src={Star2} alt='star' className='w-[26px] h-8 flex self-end'/>
                    </div>
                </div>
                <div className='w-[45%] flex h-full'>
                    <div className='flex gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}
