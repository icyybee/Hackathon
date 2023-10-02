import React, { useState } from 'react'

export default function Frequent({ title, content }) {
    const [showContent, setShowContent] = useState(false)

    return (
        <div className='flex desktop:gap-[13px] gap-[9px] flex-col'>
            <div className='flex desktop:gap-6 justify-between items-center'>
                <p className='desktop:text-[14px] text-[12px] desktop:w-[390px]'>{title}</p>
                {!showContent && <p className='text-[20px] text-secondary cursor-pointer' onClick={() => setShowContent(val => !val)}>+</p>}
                {showContent && <p className='text-[20px] text-secondary cursor-pointer' onClick={() => setShowContent(false)}>-</p>}
            </div>  
            {showContent && <p className="animate__animated animate__fadeInDown desktop:text-[13px] text-[12px] text-white mt-3 w-[95%]" style={{lineHeight:'150%'}}>{content}</p>}
            <div className='bg-secondary [w-427px] h-[1px]'></div>  
        </div>
    )
}
