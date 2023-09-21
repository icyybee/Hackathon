import React from 'react'
import { ReactComponent as Vector } from '../assets/svg/Vector (4).svg'
import { ReactComponent as List } from '../assets/svg/list terms.svg'
import Security from '../assets/img/08 1.png'
import StarOpaque from '../assets/img/star-opaque.png'
import StarPu from '../assets/img/star pu2.png'
import Buttons from './button'

export default function Privacy() {
    return (
        <div className='section privacy pt-[93px] pb-[167px] px-[123px]'>
            <div className='flex gap-[60px] hi'>
                <div className='flex-1 mt-[60px]'>
                    <div className='flex gap-[27px]'>
                        <h1 className='text-[32px] font-bold font-clash-display w-[300px]'>Privacy Policy and <span className='text-secondary'>Terms</span></h1>
                        <img src={StarOpaque} alt='star' className='w-[26px] h-8'/>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='mt-[17px] text-[14px] text-gradient-300'>Last updated on September 12, 2023</h2>
                        <div className='flex justify-end'>
                            <img src={StarPu} alt='star' />
                        </div>
                    </div>
                    <p className='text-[14px] w-[95%] mt-[30px]'>
                        Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                    </p>
                    <div className='mt-[69px] rounded-[5px] border border-secondary bg-gradient-400 pt-[59px] pb-[55px] w-full'>
                        <p className='text-[14px] px-[72px] leading-[216.4%]'>
                            At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.
                        </p>
                        <div className='pl-[73px] pr-[39px]'>
                            <h2 className='mt-6 text-[16px] font-bold text-secondary'>Licensing Policy</h2>
                            <p className='text-[14px] font-bold'>Here are terms of our Standard License:</p>
                            <div className='mt-[18px]'>
                                <div className='flex gap-[14px]'>
                                    <div>
                                        <List />
                                    </div>
                                    <p className='leading-[216.4%] text-[14px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                                </div>
                                <div className='flex gap-[14px] mt-[18px]'>
                                    <div>
                                        <List />
                                    </div>
                                    <p className='leading-[216.4%] text-[14px]'>You are licensed to use the item available at any free source sites, for your project developement</p>
                                </div>
                            </div>
                            <div className='mt-[19px] flex justify-center w-full'>
                                <Buttons padding={'13px 40px'} text={'Read More'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[43%] h-full flex'>
                    <Vector className='relative'/>
                    <img src={Security} alt='security' className='absolute w-[559px] h-[749px] mt-[15%]' />
                </div>
            </div>
        </div>
    )
}
