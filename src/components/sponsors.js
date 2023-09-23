import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Star from '../assets/img/sata gra2.png'
import Star2 from '../assets/img/star.png'
import Liberty from '../assets/img/Liberty company logo white colour.png'
import Liberty2 from '../assets/img/Liberty company logo white.png'
import Winwise from '../assets/img/Winwise logo White colour 1.png'
import Whisper from '../assets/img/wisper logo white.png'
import Paybox from '../assets/img/Paybox.png'
import Vizual from '../assets/img/Vizual Plus.png'

export default function Sponsors() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);
    
    return (
        <div className='section border-bt desktop:pt-[114px] pt-[41px] desktop:pb-[128px] pb-[104.41px] desktop:px-[8.3%] px-[43px]'>
            <div className='flex flex-col items-center'>
                <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated w-full flex flex-col items-center`}>
                    <h1 className='font-clash-display desktop:text-[32px] text-[20px] font-bold'>Partners and Sponsors</h1>
                    <h2 className='desktop:w-[452px] w-full desktop:mt-[22px] mt-[5px] desktop:text-[14px] text-[12px] text-center'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</h2>
                </div>
                <div className='w-full desktop:mt-[65px] mt-[41px] desktop:h-[560px] h-[148.58px] sponsor rounded-[5px] border border-secondary'>
                    <div className='desktop:pt-[100px] py-[38.21px] desktop:pb-[77px] flex flex-col items-center'>
                        <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[7px] h-[7px] desktop:w-auto desktop:h-auto desktop:mb-[19px] absolute desktop:static'/>
                        <div className='flex flex-col desktop:gap-[31.16px] gap-[8.39px] w-full'>
                            <div className='flex desktop:h-[140px] px-[9%] h-10 justify-between w-full'>
                                <div className='part'>
                                    <img src={Liberty} alt='libertycolor' className='desktop:w-[120.562px] w-[31.9px] h-full object-contain' />
                                </div>
                                <div className='desktop:w-1 w-[2px] desktop:h-[112.476px] h-[29.84px] bg-secondary'></div>
                                <div className='part'>
                                    <img src={Liberty2} alt='libertycolor' className='desktop:w-[213.189px] w-[56.67px] h-full object-contain' />
                                </div>
                                <div className='desktop:w-1 w-[2px] desktop:h-[112.476px] h-[29.84px] bg-secondary'></div>
                                <div className='part'>
                                    <img src={Winwise} alt='libertycolor' className='desktop:w-[131.589px] w-[34.91px] h-full object-contain' />
                                </div>
                            </div>
                            <div className='flex desktop:h-[140px] px-[9%] h-10 justify-between w-full'>
                                <div className='parts'>
                                    <img src={Whisper} alt='libertycolor' className='desktop:w-[147.027px] w-[39.012px] h-full object-contain' />
                                </div>
                                <div className='desktop:w-1 w-[2px] desktop:h-[112.476px] h-[29.84px] bg-secondary'></div>
                                <div className='parts'>
                                    <img src={Paybox} alt='libertycolor' className='desktop:w-[204.368px] w-[70px] h-full object-contain' />
                                </div>
                                <div className='desktop:w-1 w-[2px] desktop:h-[112.476px] h-[29.84px] bg-secondary'></div>
                                <div className='parts'>
                                    <img src={Vizual} alt='libertycolor' className='desktop:w-[231px] w-[69px] h-full object-contain' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full desktop:mt-[34px] flex justify-end desktop:justify-center mr-[25%] desktop:mr-0'>
                            <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
