import React from 'react'
import Manual from '../assets/img/cwok_casual_21 1.png'
import Star from '../assets/img/star pu.png'
import StarWhite from '../assets/img/star-opaque.png'
import Star2 from '../assets/img/star.png'
import Question from '../assets/img/question.png'
import Frequent from './frequent'

export default function Faq() {
    return (
        <div className='section-one border-bt' id='faq'>
            <div className='flex w-full items-center pl-[219px] pr-[101px] pt-8 pb-16'>
                <div className='flex-1 mt-10'>
                    <img src={Star} alt='star' className='w-[26px] h-8 -ml-6 mb-5'/>
                    <h1 className='text-[32px] font-bold font-clash-display w-[253px]'>Frequently Ask <span className='text-secondary'>Question</span></h1>
                    <h2 className='mt-4 w-[342px] text-[14px]'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></h2>
                    <div className='flex gap-12'>
                        <div className='mt-[68px] flex flex-col gap-[25px] w-[427px]'>
                            <Frequent title={'Can I work on a project I started before the hackathon?'}/>
                            <Frequent title={'What happens if I need help during the hackathon?'}/>
                            <Frequent title={"What happens if I don't have an idea for a project?"}/>
                            <Frequent title={'Can I join a team or do I have to come with one?'}/>
                            <Frequent title={'What happens after the hackathon ends'}/>
                            <Frequent title={'Can I work on a project I started before the hackathon?'}/>
                        </div>
                        <img src={StarWhite} alt='star' className='w-[26px] h-8 ml-[10%] mt-[30%]'/>
                    </div>
                </div>
                <div className='w-[60%] flex flex-col h-full'>
                    <div className='flex justify-between w-[70%]'>
                        <div className='mt-12 w-[114px] h-[71px] relative faq'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                        <div className='w-[114px] h-[71px]'>
                            <img src={Question} alt='question' className='w-full h-full object-contain'/>
                        </div>
                        <div className='mt-12 w-[114px] h-[71px] relative faq-two flex'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain' />
                        <img src={Star2} alt='star' className='w-[26px] h-8 self-end mr-[17%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
