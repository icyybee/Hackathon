import React from 'react'

export default function FormInput( {label, placeholder, type, name, value, onChange, errorMessage} ) {
    return (
        <div className='w-full'>
            <label className='text-[14px]'>{label}</label>
            <input className='mt-[11px] w-full px-[27px] py-[15px]' placeholder={placeholder} type={type} name={name} value={value} onChange={onChange}/>
            {errorMessage && <p className="text-red-500 mt-2">This field is required</p>}
        </div>
    )
}