import React from 'react'
import Star from '../assets/img/sata gra2.png'
import Star2 from '../assets/img/star.png'
import Liberty from '../assets/img/Liberty company logo white colour.png'
import Liberty2 from '../assets/img/Liberty company logo white.png'
import Winwise from '../assets/img/Winwise logo White colour 1.png'
import Whisper from '../assets/img/wisper logo white.png'
import Paybox from '../assets/img/Paybox.png'
import Vizual from '../assets/img/Vizual Plus.png'

export default function Sponsors() {
    return (
        <div className='section border-bt pt-[114px] pb-[128px] px-[129px] '>
            <div className='flex flex-col items-center'>
                <h1 className='font-clash-display text-[32px] font-bold'>Partners and Sponsors</h1>
                <h2 className='w-[452px] mt-[22px] text-[14px] text-center'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</h2>
                <div className='w-full mt-[65px] h-[560px] sponsor rounded-[5px] border border-secondary'>
                    <div className='pt-[100px] pb-[77px] flex flex-col items-center'>
                        <img src={Star} alt='star' className='mb-[19px]'/>
                        <div className='flex flex-col gap-[31.16px]'>
                            <div className='flex h-[140px] gap-[31.16px]'>
                                <div className='part'>
                                    <img src={Liberty} alt='libertycolor' className='w-[120.562px] h-full object-contain' />
                                </div>
                                <div className='w-1 h-[112.476px] bg-secondary'></div>
                                <div className='part'>
                                    <img src={Liberty2} alt='libertycolor' className='w-[213.189px] h-full object-contain' />
                                </div>
                                <div className='w-1 h-[112.476px] bg-secondary'></div>
                                <div className='part'>
                                    <img src={Winwise} alt='libertycolor' className='w-[131.589px] h-full object-contain' />
                                </div>
                            </div>
                            <div className='flex h-[140px] gap-[31.16px]'>
                                <div className='parts'>
                                    <img src={Whisper} alt='libertycolor' className='w-[147.027px] h-full object-contain' />
                                </div>
                                <div className='w-1 h-[112.476px] bg-secondary'></div>
                                <div className='parts'>
                                    <img src={Paybox} alt='libertycolor' className='w-[204.368px] h-full object-contain' />
                                </div>
                                <div className='w-1 h-[112.476px] bg-secondary'></div>
                                <div className='parts'>
                                    <img src={Vizual} alt='libertycolor' className='w-[231px] h-full object-contain' />
                                </div>
                            </div>
                        </div>
                        <img src={Star2} alt='star' className='mt-[34px] w-[26px] h-8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
