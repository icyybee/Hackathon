import React from 'react'
import Manual from '../assets/img/7450159 1.png'
import Star from '../assets/img/star-opaque.png'
import Star2 from '../assets/img/star.png'

export default function Guidelines() {
    return (
        <div className='section border-bt'>
            <div className='flex flex-col-reverse desktop:flex-row items-center w-full px-12 desktop:pl-[11.6%] desktop:pr-[6.58%] desktop:py-1 pb-[19px]'>
                <div className='flex-1 mt-[10px] desktop:mt-0'>
                    <div className='flex flex-col desktop:flex-row desktop:gap-[88px]'>
                        <h1 className='text-center desktop:text-start desktop:text-[32px] text-[20px] font-bold font-clash-display desktop:w-[170px]'>Rules and <br /><span className='text-secondary'>Guidelines</span></h1>
                        <div className='w-full flex justify-end desktop:block'>
                            <img src={Star} alt='star' className='desktop:w-[26px] w-3 desktop:h-8 h-[14px]'/>
                        </div>
                    </div>
                    <div className='desktop:mt-4 mt-[9px] flex flex-col desktop:flex-row desktop:gap-[22px] gap-[15px]'>
                        <p className='desktop:text-[14px] text-[13px] text-center desktop:text-start leading-[27.5px]'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                        <div className='flex desktop:self-end w-full justify-center -ml-[17%] desktop:ml-0'>
                            <img src={Star2} alt='star' className='desktop:w-[26px] w-[10px] desktop:h-8 h-3 object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='desktop:w-[45%] w-full flex h-full'>
                    <div className='desktop:hidden flex items-center'>
                        <img src={Star2} alt='star' className='desktop:w-[26px] w-[10px] desktop:h-8 h-3 object-contain'/>
                    </div>
                    <div className='flex gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}
