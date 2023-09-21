import React from 'react'

export default function Frequent({ title, display }) {
    return (
        <div className='flex gap-[13px] flex-col'>
            <div className='flex gap-6 items-center'>
                <p className='text-[14px] w-[390px]'>{title}</p>
                <p className='text-[20px] text-secondary cursor-pointer'>+</p>
            </div>  
            <div className='bg-secondary [w-427px] h-[1px]'></div>  
        </div>
    )
}
