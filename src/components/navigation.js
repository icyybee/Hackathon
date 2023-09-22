import React from 'react'
import Logo from '../assets/img/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Buttons from './button'

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation()
    
    return (
        <div className='nav'>
            <div className='w-[47%]'>
                <img src={Logo} alt='getlinked logo' className='w-[171px] h-11 object-contain cursor-pointer' onClick={() => navigate('/')}/>
            </div>
            <div className='flex-1 flex gap-[121px] items-center'>
                <div className='flex gap-[56px]'>
                    <p 
                        className='cursor-pointer text-[16px]'
                        onClick={() => {
                            if (location.pathname ==='/'){
                                const element = document.querySelector('#timeline')
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else{
                                navigate('/#timeline')
                            }
                        }}
                    >Timeline</p>                     
                    <p 
                        className='cursor-pointer text-[16px]'
                        onClick={() => {
                            if (location.pathname ==='/'){
                                const element = document.querySelector('#overview')
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else{
                                navigate('/#overview')
                            }
                        }} 
                    >Overview</p> 
                    <p 
                        className='cursor-pointer text-[16px]'
                        onClick={() => {
                            if (location.pathname ==='/'){
                                const element = document.querySelector('#faq')
                                element.scrollIntoView({ behavior: 'smooth' });
                            } else{
                                navigate('/#faq')
                            }
                        }}    
                    >FAQs</p> 
                    <Link to='/contact-us'>
                        <p className='cursor-pointer text-[16px] nav__contact'>Contact</p> 
                    </Link>
                </div>
                <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
            </div>
        </div>
    )
}
