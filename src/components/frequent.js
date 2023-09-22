import React from 'react'

export default function Frequent({ title, display }) {
    return (
        <div className='flex desktop:gap-[13px] gap-[9px] flex-col'>
            <div className='flex desktop:gap-6 justify-between items-center'>
                <p className='desktop:text-[14px] text-[12px] desktop:w-[390px]'>{title}</p>
                <p className='text-[20px] text-secondary cursor-pointer'>+</p>
            </div>  
            <div className='bg-secondary [w-427px] h-[1px]'></div>  
        </div>
    )
}
