import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import './App.css';
import Home from './routes/home';
import Contact from './routes/contact';
import Registration from './routes/registration';
import Confirmation from './routes/confirmation';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </AnimatePresence>
  )
}