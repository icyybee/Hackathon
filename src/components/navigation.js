import React from 'react'
import Logo from '../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import Buttons from './button'

export default function Navigation() {
    const navigate = useNavigate();
    
    return (
        <div className='nav'>
            <div className='w-[47%]'>
                <img src={Logo} alt='getlinked logo' className='w-[171px] h-11 object-contain cursor-pointer' onClick={() => navigate('/')}/>
            </div>
            <div className='flex-1 flex gap-[121px] items-center'>
                <div className='flex gap-[56px]'>
                    <Scroll to='timeline'>
                        <p className='cursor-pointer text-[16px]'>Timeline</p> 
                    </Scroll>
                    <Scroll to='overview'>
                        <p className='cursor-pointer text-[16px]'>Overview</p> 
                    </Scroll>
                    <Scroll to='faq'>
                        <p className='cursor-pointer text-[16px]'>FAQs</p> 
                    </Scroll>
                    <Link to='/contact-us'>
                        <p className='cursor-pointer text-[16px] nav__contact'>Contact</p> 
                    </Link>
                </div>
                <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
            </div>
        </div>
    )
}
