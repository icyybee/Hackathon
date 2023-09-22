import React from 'react'
import StarOpaque from '../assets/img/star-opaque.png'
import Star from '../assets/img/sata gra2.png'
import Congratulation from '../assets/img/congratulation.png'
import Smiley from '../assets/img/1531010992wink-emoji-woman-png 1.png'
import Buttons from './button'

export default function Success({ setSuccess }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex gap-[22px] items-center'>
                <img src={StarOpaque} alt='star' className='w-[26px] h-8' />
                <img src={Congratulation} alt='congrats' className='w-[403px] h-[297px]'/>
            </div>
            <h1 className='text-center text-[32px] font-semibold mb-[10px]'>Congratulations <br />you have successfully Registered!</h1>
            <div className='flex items-end gap-1 mb-4'>
                <h2 className='text-[14px] font-semibold text-center'>Yes, it was easy and you did it! <br />check your mail box for next step</h2>
                <img src={Smiley} alt='wink' className='w-5 h-5' />
            </div>
            <Buttons functions={() => setSuccess(false)} text={'Back'} width={'100%'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
            <div className='mt-2 flex justify-end w-full'>
                <img src={Star} alt='star' />
            </div>
        </div>
    )
}
