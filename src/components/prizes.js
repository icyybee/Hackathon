import React from 'react'
import Star from '../assets/img/star.png'
import Star2 from '../assets/img/star pu.png'
import StarOpaque from '../assets/img/star-opaque.png'
import Champion from '../assets/img/9486889 1.png'
import Silver from '../assets/img/silver_medal 1.png'
import Gold from '../assets/img/gold_medal 1.png'
import Bronze from '../assets/img/bronze_medal 1.png'

export default function Prizes() {
    return (
        <div className='section pt-[74px] pb-[149px] px-[124px]'>
            <div className='flex w-full gap-[37px]'>
                <div className='flex-1 h-full flex flex-col gap-[150px]'>
                    <img src={Star2} alt='star' className='w-[26px] h-8'/>
                    <img src={Champion} alt='champion' className='w-[full] h-full object-contain' />
                </div>
                <div className='w-[55%]'>
                    <div className='w-full'>
                        <div className='flex flex-col w-full items-center'>
                            <div className='w-[401px]'>
                                <h1 className='text-[32px] font-bold font-clash-display'>Prizes and</h1> 
                                <span className='text-secondary text-[32px] font-bold font-clash-display mb-5'>Rewards</span>
                            </div>
                            <h2 className='text-[16px] w-[401px] mb-[83px]'>Highlight of the prizes or rewards for winners and for participants.</h2>
                        </div>
                        <div className='flex'>
                            <img src={Star} alt='star' className='w-[26px] h-8'/>
                            <img src={StarOpaque} alt='star' className='w-[26px] h-8 ml-[45%]'/>
                        </div>
                        <div className='flex gap-[30px] mt-[120px]'>
                            <div className='border border-secondary rounded-lg bg-gradient-100 pb-[33px] h-[296px] w-[212px] flex flex-col items-center'>
                                <div className='absolute -mt-[75px] w-[170px] h-[171px]'>
                                    <img src={Silver} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='text-[36px] font-bold'>2nd</p>
                                    <p className='text-[24px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 text-[32px] font-bold text-secondary -mt-2'>N300,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary relative rounded-lg bg-gradient-100 h-[345px] -mt-[23px] pb-[33px] w-[212px] flex flex-col items-center'>
                                <div className='absolute -mt-[120px] w-[256px] h-[256px]'>
                                    <img src={Gold} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='text-[36px] font-bold'>1st</p>
                                    <p className='text-[24px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 text-[32px] font-bold text-secondary -mt-2'>N400,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary rounded-lg bg-gradient-100 h-[296px] pb-[33px] w-[212px] flex flex-col items-center'>
                                <div className='absolute -mt-[75px] w-[170px] h-[171px]'>
                                    <img src={Bronze} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='text-[36px] font-bold'>3rd</p>
                                    <p className='text-[24px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 text-[32px] font-bold text-secondary -mt-2'>N150,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
