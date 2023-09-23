import React from 'react'
import { ReactComponent as Vector } from '../assets/svg/Vector (4).svg'
import { ReactComponent as List } from '../assets/svg/list terms.svg'
import Security from '../assets/img/08 1.png'
import StarOpaque from '../assets/img/star-opaque.png'
import StarPu from '../assets/img/star pu2.png'
import Buttons from './button'

export default function Privacy() {
    return (
        <div className='section privacy desktop:pt-[93px] pt-[43px] pb-[167px] px-[10.77%]'>
            <div className='w-full desktop:hidden flex justify-center'>
                <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-2 h-8 object-contain'/>
            </div>
            <div className='flex desktop:gap-[60px] gap-12 flex-col desktop:flex-row hi'>
                <div className='flex-1 desktop:mt-[60px] mt-5'>
                    <div className='flex desktop:gap-[27px] text-center justify-center desktop:text-start desktop:justify-start'>
                        <h1 className='desktop:text-[32px] text-[20px] font-bold font-clash-display desktop:w-[300px]'>Privacy Policy and <br /><span className='text-secondary'>Terms</span></h1>
                        <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[26px] h-8 hidden desktop:block'/>
                    </div>
                    <div className='flex justify-between flex-col desktop:flex-row items-center desktop:items-start'>
                        <h2 className='desktop:mt-[17px] desktop:text-[14px] text-[12px] text-gradient-300'>Last updated on September 12, 2023</h2>
                        <div className='desktop:flex justify-end hidden'>
                            <img src={StarPu} alt='star' className='animate__animated animate__flash animate__infinite animate__slower ' />
                        </div>
                    </div>
                    <p className='desktop:text-[14px] text-center desktop:text-start text-[12px] desktop:w-[95%] desktop:mt-[30px] mt-7'>
                        Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                    </p>
                    <div className='desktop:hidden justify-end flex'>
                        <img src={StarPu} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[17px] h-5' />
                    </div>
                    <div className='desktop:mt-[69px] mt-[30px] rounded-[5px] border border-secondary bg-gradient-400 desktop:pt-[59px] py-[45px] desktop:pb-[55px] w-full'>
                        <p className='desktop:text-[14px] text-[12px] text-center desktop:text-start desktop:px-[72px] px-[15px] leading-[216.4%]'>
                            At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.
                        </p>
                        <div className='desktop:pl-[73px] desktop:pr-[39px] px-[22px]'>
                            <h2 className='desktop:mt-6 mt-[21px] desktop:text-[16px] text-[13px] font-bold text-secondary'>Licensing Policy</h2>
                            <p className='desktop:text-[14px] text-[12px] font-bold'>Here are terms of our Standard License:</p>
                            <div className='desktop:mt-[18px] mt-[21px]'>
                                <div className='flex gap-[14px]'>
                                    <div>
                                        <List />
                                    </div>
                                    <p className='leading-[216.4%] desktop:text-[14px] text-[12px]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                                </div>
                                <div className='flex gap-[14px] desktop:mt-[18px] mt-6'>
                                    <div>
                                        <List />
                                    </div>
                                    <p className='leading-[216.4%] desktop:text-[14px] text-[12px]'>You are licensed to use the item available at any free source sites, for your project developement</p>
                                </div>
                            </div>
                            <div className='mt-[19px] flex justify-center w-full'>
                                <Buttons padding={'13px 40px'} text={'Read More'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='desktop:w-[43%] w-full h-full flex'>
                    <Vector className='relative w-full h-full'/>
                    <img src={Security} alt='security' className='absolute desktop:w-[559px] desktop:h-[749px] w-[70%] h-[70%] desktop:mt-[15%] mt-[30%] object-contain' />
                </div>
            </div>
        </div>
    )
}
