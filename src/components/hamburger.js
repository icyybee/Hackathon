import * as React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { createTheme, ThemeProvider } from '@mui/material';
import { ReactComponent as ExitBorder } from '../assets/svg/exit-border.svg';
import { ReactComponent as Exit } from '../assets/svg/exit.svg';
import Buttons from './button';

const theme = createTheme({
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(30px)'
          },
        },
      },
    },
});

export default function Hamburger({ menu, setMenu }) {
    const navigate = useNavigate();
    const location = useLocation()

    return (
        <ThemeProvider theme={theme}>
            <SwipeableDrawer
                anchor={'right'}
                open={menu}
                onClose={() => setMenu(false)}
                onOpen={() => setMenu(true)}
            >
                <div className='py-[39px] px-[51px]'>
                    <div className='flex justify-end' onClick={() => setMenu(false)}>
                        <ExitBorder className='mt-[6px] mr-[6px] cursor-pointer'/>
                        <Exit className='absolute' />
                    </div>
                    <div className='mt-[42px] flex flex-col gap-[26px]'>
                        <p 
                            className='cursor-pointer text-[18px] font-medium font-inter'
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
                            className='cursor-pointer text-[18px] font-medium font-inter'
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
                            className='cursor-pointer text-[18px] font-medium font-inter'
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
                            <p className='cursor-pointer text-[18px] font-medium font-inter nav__contact'>Contact</p> 
                        </Link>
                        <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                    </div>
                </div>
            </SwipeableDrawer>
        </ThemeProvider>
    );
}