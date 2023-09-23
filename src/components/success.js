import React from 'react'
import StarOpaque from '../assets/img/star-opaque.png'
import Star from '../assets/img/sata gra2.png'
import Congratulation from '../assets/img/congratulation.png'
import Smiley from '../assets/img/1531010992wink-emoji-woman-png 1.png'
import Buttons from './button'

export default function Success({ setSuccess }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex tab:gap-[22px] items-center'>
                <img src={StarOpaque} alt='star' className='absolute tab:w-[26px] w-[14px] tab:h-8 h-[18px]' />
                <img src={Congratulation} alt='congrats' className='tab:w-[403px] w-[258px] tab:h-[297px] h-full'/>
            </div>
            <h1 className='text-center desktop:text-[32px] text-[16px] mt-[10px] desktop:mt-0 font-semibold mb-[10px]'>Congratulations <br />you have successfully Registered!</h1>
            <div className='flex items-end desktop:gap-1 desktop:mb-4 mb-[19px]'>
                <h2 className='desktop:text-[14px] text-[12px] desktop:font-semibold font-medium text-center'>Yes, it was easy and you did it! <br />check your mail box for next step</h2>
                <img src={Smiley} alt='wink' className='desktop:w-5 w-[14px] desktop:h-5 h-[14px]' />
            </div>
            <Buttons functions={() => setSuccess(false)} text={'Back'} width={'100%'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
            <div className='desktop:mt-2 flex justify-end w-full desktop:absolute desktop:bottom-[10%]'>
                <img src={Star} alt='star' className='absolute desktop:w-[21px] desktop:h-[25px] w-[11px] h-[13px] object-contain'/>
            </div>
        </div>
    )
}
