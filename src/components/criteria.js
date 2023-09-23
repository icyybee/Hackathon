import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Attribute from '../assets/img/8046554 1.png'
import Star from '../assets/img/star pu.png'
import StarWhite from '../assets/img/star.png'
import StarOpaque from '../assets/img/star-opaque.png'
import Buttons from './button'

export default function Criteria() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);

    return (
        <div className='section border-bt'>
            <div className='flex w-full pl-[4.2%] desktop:pr-[7.7%] pr-[4.2%] desktop:pb-[120px] pb-[58.65px] desktop:pt-[75px] pt-[15px] flex-col desktop:flex-row'>
                <div className='desktop:w-[50%] w-full h-full flex flex-col'>
                    <div className='desktop:mb-14 mb-[42px] w-full desktop:justify-start justify-center flex'>
                        <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[13px] desktop:h-8 h-[17px] desktop:ml-[18%]'/>
                    </div>
                    <div className='criteria w-full'>
                        <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-3 desktop:h-8 h-[14px] desktop:ml-[25%] ml-[45%] desktop:mt-[20%] mt-[40%] absolute'/>
                        <img src={Attribute} alt='key' className='w-full h-full object-contain relative mt-[9%]' />
                    </div>
                    <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[26px] h-8 self-end hidden desktop:flex'/>
                </div>
                <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 desktop:ml-[53px]`}>
                    <h1 className='desktop:text-[32px] text-[20px] text-center desktop:text-start font-bold font-clash-display w-full desktop:w-[267px]'>Judging Criteria <br /><span className='text-secondary'>Key attributes</span></h1>
                    <div className='desktop:mt-[21px] mt-4 desktop:mb-[55px] mb-10 flex flex-col desktop:gap-[22px] gap-5'>
                        <p className='desktop:text-[14px] text-center desktop:text-start text-[12px]'><span className='font-bold desktop:text-[16px] text-[13px] text-tertiary'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.
                        </p>
                        <p className='desktop:text-[14px] text-center desktop:text-start text-[12px]'><span className='font-bold desktop:text-[16px] text-[13px] text-tertiary'>Functionality:</span> Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>
                        <p className='desktop:text-[14px] text-center desktop:text-start text-[12px] mt-[5px]'><span className='font-bold desktop:text-[16px] text-[13px] text-tertiary'>Impact and Relevance:</span> Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </p>
                        <p className='desktop:text-[14px] text-center desktop:text-start text-[12px] mt-[1px]'><span className='font-bold desktop:text-[16px] text-[13px] text-tertiary'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p className='desktop:text-[14px] text-center desktop:text-start text-[12px] mt-[6px]'><span className='font-bold desktop:text-[16px] text-[13px] text-tertiary'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                    </div>
                    <div className='w-full flex items-center'>
                        <div className='w-full flex justify-center desktop:justify-start'>
                            <Buttons padding={'13px 40px'} text={'Read More'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                        </div>
                        <div className='desktop:hidden'>
                            <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[10px] h-3 self-center '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
