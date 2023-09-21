import React from 'react'
import Attribute from '../assets/img/8046554 1.png'
import Star from '../assets/img/star pu.png'
import StarWhite from '../assets/img/star.png'
import StarOpaque from '../assets/img/star-opaque.png'
import Buttons from './button'

export default function Criteria() {
    return (
        <div className='section border-bt'>
            <div className='flex w-full pl-[110px] pr-[102px] pb-[120px] pt-[75px]'>
                <div className='w-[50%] h-full flex flex-col'>
                    <div className='mb-14 w-full'>
                        <img src={Star} alt='star' className='w-[26px] h-8 ml-[18%]'/>
                    </div>
                    <div className='criteria w-full'>
                        <img src={StarOpaque} alt='star' className='w-[26px] h-8 ml-[25%] mt-[20%] absolute'/>
                        <img src={Attribute} alt='key' className='w-full h-full object-contain relative mt-[9%]' />
                    </div>
                    <img src={StarWhite} alt='star' className='w-[26px] h-8 self-end'/>
                </div>
                <div className='flex-1 ml-[53px]'>
                    <h1 className='text-[32px] font-bold font-clash-display w-[267px]'>Judging Criteria <span className='text-secondary'>Key attributes</span></h1>
                    <div className='mt-[21px] mb-[55px] flex flex-col gap-[22px]'>
                        <p className='text-[14px]'><span className='font-bold text-[16px] text-tertiary'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.
                        </p>
                        <p className='text-[14px]'><span className='font-bold text-[16px] text-tertiary'>Functionality:</span> Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>
                        <p className='text-[14px] mt-[5px]'><span className='font-bold text-[16px] text-tertiary'>Impact and Relevance:</span> Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </p>
                        <p className='text-[14px] mt-[1px]'><span className='font-bold text-[16px] text-tertiary'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p className='text-[14px] mt-[6px]'><span className='font-bold text-[16px] text-tertiary'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                    </div>
                    <Buttons padding={'13px 40px'} text={'Read More'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                </div>
            </div>
        </div>
    )
}
