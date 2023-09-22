import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import Hero from '../components/hero'
import Overview from '../components/overview'
import Guidelines from '../components/guidelines'
import Criteria from '../components/criteria'
import Faq from '../components/FAQ'
import Timeline from '../components/timeline'
import Prizes from '../components/prizes'
import Sponsors from '../components/sponsors'
import Privacy from '../components/privacy'
import Footer from '../components/footer'

export default function Home() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, [location]);

    return (
        <motion.div
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity:0, y: 0}}
            transition={{delay: 0.25, type: "spring"}}
            className='landing'
        >
            <Hero /> 
            <Overview /> 
            <Guidelines />
            <Criteria /> 
            <Faq />
            <Timeline />
            <Prizes />  
            <Sponsors />
            <Privacy />
            <Footer /> 
        </motion.div>
    )
}
