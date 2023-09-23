import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Star from '../assets/img/star.png'
import Star2 from '../assets/img/star pu.png'
import StarOpaque from '../assets/img/star-opaque.png'
import Champion from '../assets/img/9486889 1.png'
import Silver from '../assets/img/silver_medal 1.png'
import Gold from '../assets/img/gold_medal 1.png'
import Bronze from '../assets/img/bronze_medal 1.png'

export default function Prizes() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);
    const [scrollX, setScrollX] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);
    
    useEffect(() => {
        if (inView2) {
          setScrollX(true);
        }
    }, [inView2]);

    return (
        <div className='section desktop:pt-[74px] pt-[46px] desktop:pb-[149px] pb-[31px] px-[8%]'>
            <div className='flex flex-col desktop:flex-row w-full gap-[37px]'>
                <div className='flex-1 h-full flex flex-col desktop:gap-[150px] gap-[17px]'>
                    <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[7px] desktop:h-8 h-[9px]'/>
                    <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex flex-col w-full items-center desktop:hidden text-center`}>
                        <div className='flex'>
                            <div className='w-full'>
                                <h1 className='text-[20px] font-bold font-clash-display'>Prizes and</h1> 
                                <span className='text-secondary text-[20px] font-bold font-clash-display mb-[3px]'>Rewards</span>
                            </div>
                            <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[7px] desktop:h-8 h-[9px] absolute right-[25%] mt-[5%]'/>
                        </div>
                        <h2 className='text-[12px] w-full mb-[23px]'>Highlight of the prizes or rewards for winners and for participants.</h2>
                    </div>
                    <img src={Champion} alt='champion' className='w-full h-full object-contain' />
                </div>
                <div className='desktop:w-[55%] w-full'>
                    <div className='w-full'>
                        <div ref={ref2} className={`${scrollX ? 'animate__slideInUp' : ''} animate__animated desktop:flex flex-col w-full items-center hidden`}>
                            <div className='w-[401px]'>
                                <h1 className='text-[32px] font-bold font-clash-display'>Prizes and</h1> 
                                <span className='text-secondary text-[32px] font-bold font-clash-display mb-5'>Rewards</span>
                            </div>
                            <h2 className='text-[16px] w-[401px] mb-[83px]'>Highlight of the prizes or rewards for winners and for participants.</h2>
                        </div>
                        <div className='flex desktop:mt-0 -mt-8'>
                            <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3'/>
                            <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:block hidden w-[26px] h-8 ml-[45%]'/>
                        </div>
                        <div className='flex desktop:gap-[30px] gap-[12.99px] justify-center mt-[120px]'>
                            <div className='border border-secondary rounded-lg bg-gradient-100 desktop:pb-[33px] pb-[22.5px] desktop:h-[296px] h-[125.6px] desktop:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute desktop:-mt-[75px] -mt-[30px] desktop:w-[170px] w-[75.9px] desktop:h-[171px] h-[76.4px]'>
                                    <img src={Silver} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='desktop:text-[36px] text-[12px] font-bold'>2nd</p>
                                    <p className='desktop:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 desktop:text-[32px] text-[14px] font-bold text-secondary desktop:-mt-2 mt-0'>N300,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary relative rounded-lg bg-gradient-100 desktop:h-[345px] h-[147.3px] -mt-[23px] desktop:pb-[33px] pb-[22.5px] desktop:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute desktop:-mt-[120px] -mt-[60px] desktop:w-[256px] w-[125.6px] desktop:h-[256px] h-[125.6px]'>
                                    <img src={Gold} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='desktop:text-[36px] text-[12px] font-bold'>1st</p>
                                    <p className='desktop:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 desktop:text-[32px] text-[14px] font-bold text-secondary desktop:-mt-2 mt-0'>N400,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary rounded-lg bg-gradient-100 desktop:h-[296px] h-[125.6px] desktop:pb-[33px] pb-[22.5px] desktop:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute desktop:-mt-[75px] -mt-[30px] desktop:w-[170px] w-[75.9px] desktop:h-[171px] h-[76.4px]'>
                                    <img src={Bronze} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='desktop:text-[36px] text-[12px] font-bold'>3rd</p>
                                    <p className='desktop:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 desktop:text-[32px] text-[14px] font-bold text-secondary desktop:-mt-2 mt-0'>N150,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[77%] justify-between desktop:mt-[10px] mt-[53px]'>
                <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[15px] w-[10px] desktop:h-[18px] h-3 absolute desktop:static -mt-[70%] desktop:mt-0 right-[20%]'/>
                <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3'/>
            </div>
        </div>
    )
}
