import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Buttons from './button'
import { ReactComponent as Hamburgers } from '../assets/svg/Vector (10).svg';
import Hamburger from './hamburger';

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleScroll = () => {
        const scrollHeight = window.scrollY;
        const threshold = 100;
      
        if (scrollHeight > threshold) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };
      
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      
    return (
        <>
            <div className={`nav px-[8.4%] pt-[63px] pb-[25px] ${scrolled ? 'nav-fixed' : ''}`}>
                <div className='desktop:w-[47%]'> 
                    <h1 onClick={() => navigate('/')} className='font-clash-display cursor-pointer text-[15px] mid:text-[36px] font-bold'>get<span className='text-secondary'>linked</span></h1>
                </div>
                <div className='hidden flex-1 desktop:flex gap-[121px] items-center'>
                    <div className='flex gap-[56px]'>
                        <p 
                            className='cursor-pointer text-[16px] nav-link'
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
                            className='cursor-pointer text-[16px] nav-link'
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
                            className='cursor-pointer text-[16px] nav-link'
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
                            <p className='cursor-pointer text-[16px] nav-link nav__contact'>Contact</p> 
                        </Link>
                    </div>
                    <Buttons functions={() => navigate('/registration')} text={'Register'} width={'100%'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                </div>
                <Hamburgers className='cursor-pointer desktop:hidden' onClick={() => setMenu(!menu)}/>
            </div>
            <Hamburger menu={menu} setMenu={setMenu} />
        </>
    )
}
