import React from 'react'

export default function FormInput( {label, placeholder, type, name, value, onChange, errorMessage} ) {
    return (
        <div className='w-full'>
            <label className='desktop:text-[14px] text-[13px]'>{label}</label>
            <input className='desktop:mt-[11px] mt-[5px] w-full px-[27px] desktop:py-[15px] py-[10px]' placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}/>
            {errorMessage && <p className="text-red-500 desktop:mt-2 mt-[2px]">This field is required</p>}
        </div>
    )
}