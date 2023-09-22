import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/navigation'
import StarOpaque from '../assets/img/star-opaque.png'
import Star from '../assets/img/sata gra.png'
import Guy from '../assets/img/3d-graphic-designer-showing-thumbs-up-png 1.png'
import Girl from '../assets/img/1f6b6-2640.png'
import GuyWalk from '../assets/img/image_processing20200511-10310-13mnlsx.png'
import RegistrationForm from '../components/forms/registrationForm'
import Confirmation from '../components/confirmation'

export default function Registration() {
    const [success, setSuccess] = useState(false);
    
    return (
        <motion.div
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 0}}
            transition={{delay: 0.25, type: "spring"}}
            className='section min-h-screen registration'
        >
            <Navigation />
            <div className='mt-[68px] px-[104px] flex pb-[57px] gap-[30px]'>
                <div className='flex-1'>
                    <img src={Guy} alt='3d' className='w-full h-full object-cover' />
                </div>

                <div className='w-[55%]'>
                    <div className='rounded-[12px] contact-box w-full'>
                        <div className='flex justify-end w-full -ml-[15%]'>
                            <img src={StarOpaque} alt='star' className='w-[26px] h-8'/>
                        </div>
                        <h1 className='mt-[15px] text-[32px] font-semibold text-secondary'>Register</h1>
                        <div className='mt-[33px] flex gap-[7px] items-center'>
                            <h2 className='text-[14px]'>Be part of this movement!</h2>
                            <div className='flex walk -mt-5'>
                                <img src={Girl} alt='walkingirl' className='w-[26px] h-[26px]' />
                                <img src={GuyWalk} alt='walkinguy' className='w-[30px] h-[30px]'/>
                            </div>
                        </div>
                        <h1 className='mt-[19px] text-[24px]'>CREATE YOUR ACCOUNT</h1>
                        <RegistrationForm setSuccess={setSuccess} success={success}/>
                    </div>
                </div>
            </div>
            {success && <Confirmation success={success} setSuccess={setSuccess}/>}
        </motion.div>
    )
}
