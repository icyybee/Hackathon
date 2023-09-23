import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/navigation'
import StarOpaque from '../assets/img/star-opaque.png'
import { ReactComponent as Group } from '../assets/svg/Group 1.svg'
import Star from '../assets/img/sata gra.png'
import Star2 from '../assets/img/star pu.png'
import Guy from '../assets/img/3d-graphic-designer-showing-thumbs-up-png 1.png'
import Girl from '../assets/img/1f6b6-2640.png'
import GuyWalk from '../assets/img/image_processing20200511-10310-13mnlsx.png'
import RegistrationForm from '../components/forms/registrationForm'
import Confirmation from '../components/confirmation'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);
    
    return (
        <motion.div
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 0}}
            transition={{delay: 0.25, type: "spring"}}
            className='section min-h-auto registration'
        >
            <Navigation />
            <div className='desktop:hidden w-full pt-[47px] px-[13%]' onClick={() => navigate('/')}>
                <Group />
            </div>
            <h1 className='desktop:hidden px-[17.1%] pt-6 text-[15px] font-bold text-secondary'>Register</h1>
            <div className='desktop:mt-[68px] mt-[31px] px-[6.7%] flex flex-col desktop:flex-row desktop:pb-[57px] pb-6 desktop:gap-[30px] gap-[11.73px]'>
                <div className='flex-1 flex px-[10%] desktop:px-0'>
                    <img src={Guy} alt='3d' className='w-full h-full object-cover' />
                    <div className='absolute right-[15%] mt-[40%] desktop:hidden'>
                        <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[14px] desktop:h-8 h-[13px]'/>
                    </div>
                </div>

                <div className='desktop:w-[55%] w-full'>
                    <div className='desktop:rounded-[12px] flex desktop:flex-col contact-box w-full gap-[17px] desktop:gap-0'>
                        <div className='flex justify-end desktop:w-full desktop:-ml-[15%] mt-[30%] desktop:mt-0'>
                            <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[14px] desktop:h-8 h-[18px] object-contain'/>
                        </div>
                        <div className='w-full desktop:w-auto'>
                            <h1 className='mt-[15px] text-[32px] font-semibold text-secondary hidden desktop:block'>Register</h1>
                            <div className='desktop:mt-[33px] flex gap-[7px] items-center'>
                                <h2 className='desktop:text-[14px] text-[12px]'>Be part of this movement!</h2>
                                <div className='flex walk -mt-5'>
                                    <img src={Girl} alt='walkingirl' className='desktop:w-[26px] w-[22.94px] desktop:h-[26px] h-[22.94px]' />
                                    <img src={GuyWalk} alt='walkinguy' className='desktop:w-[30px] w-[26.47px] desktop:h-[30px] h-[26.47px]'/>
                                </div>
                            </div>
                            <h1 className='desktop:mt-[19px] desktop:text-[24px] text-[20px]'>CREATE YOUR ACCOUNT</h1>
                            <RegistrationForm setSuccess={setSuccess} success={success}/>
                        </div>
                        <div className='flex items-end mb-[17%] desktop:hidden'>
                            <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[14px] desktop:h-8 h-[13px]'/>
                        </div>
                    </div>
                </div>
            </div>
            {success && <Confirmation success={success} setSuccess={setSuccess}/>}
        </motion.div>
    )
}
