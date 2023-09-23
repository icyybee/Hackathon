import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Star from '../assets/img/star pu.png'
import Star2 from '../assets/img/star.png'
import Star3 from '../assets/img/star-opaque.png'
import { useLocation } from 'react-router-dom';

export default function Timeline() {
    const location = useLocation()

    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className='section-plain'>
            <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated pt-[72px] w-full desktop:px-[8.96%] px-[49px] desktop:pb-[109px] pb-[34px]`} id='timeline'>
                <div className='text-center w-full items-center flex flex-col'>
                    <h1 className='text-[20px] desktop:text-[32px] font-bold font-clash-display desktop:mb-3 mb-[21px]'>Timeline</h1>
                    <h2 className='text-[14px] w-[346px]'>Here is the breakdown of the time we anticipate using for the upcoming event.</h2>
                </div>
                <div className='desktop:mt-[91px] mt-6 w-full'>
                    <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[14px] desktop:h-8 h-4 mb-4 desktop:mb-0'/>
                    <div className='flex flex-col desktop:gap-2 gap-[27px] desktop:mt-[60px]'>
                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>1</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center w-full flex-col desktop:flex-row'>
                                <div className='flex flex-col desktop:gap-3 desktop:w-[35%] desktop:mr-[86px] w-full'>
                                    <h2 className='desktop:text-right text-secondary desktop:text-[24px] text-[12px] font-bold'>Hackathon Announcement</h2>
                                    <p className='desktop:text-right desktop:text-[14px] text-[12px]'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center -mt-[90px] flex-1'>
                                    <div className='h-[137px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>1</p>
                                    </div>
                                </div>
                                <div className='flex desktop:ml-[98px] desktop:w-[35%] w-full h-full desktop:h-auto items-end'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>2</p>
                                </div>
                            </div>

                            <div className='flex desktop:items-center justify-center w-full flex-col-reverse desktop:flex-row'>
                                <div className='flex desktop:mr-[86px] desktop:w-[35%] desktop:justify-end'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center flex-1'>
                                    <div className='h-[86px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>2</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 desktop:w-[35%] desktop:ml-[98px]'>
                                    <h2 className='text-left text-secondary desktop:text-[24px] text-[12px] font-bold'>Teams Registration begins</h2>
                                    <p className='text-left desktop:text-[16px] text-[12px]'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>3</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center w-full flex-col desktop:flex-row'>
                                <div className='flex flex-col desktop:gap-3 desktop:w-[35%] desktop:mr-[86px] w-full'>
                                    <h2 className='desktop:text-right text-secondary desktop:text-[24px] text-[12px] font-bold'>Teams Registration ends</h2>
                                    <p className='desktop:text-right desktop:text-[14px] text-[12px]'>Interested Participants are no longer Allowed to register</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center flex-1'>
                                    <div className='h-[86px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>3</p>
                                    </div>
                                </div>
                                <div className='flex desktop:ml-[98px] desktop:w-[35%] w-full h-full desktop:h-auto items-end justify-between'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                    <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3'/>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>4</p>
                                </div>
                            </div>

                            <div className='flex desktop:items-center justify-center w-full flex-col-reverse desktop:flex-row'>
                                <div className='flex desktop:mr-[86px] desktop:w-[35%] desktop:justify-end'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center flex-1'>
                                    <div className='h-[86px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>4</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 desktop:w-[35%] desktop:ml-[98px]'>
                                    <h2 className='text-left text-secondary desktop:text-[24px] text-[12px] font-bold'>Announcement of the accepted teams and ideas</h2>
                                    <p className='text-left desktop:text-[16px] text-[12px]'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>5</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center w-full flex-col desktop:flex-row'>
                                <div className='flex flex-col desktop:gap-3 desktop:w-[35%] desktop:mr-[86px] w-full'>
                                    <h2 className='desktop:text-right text-secondary desktop:text-[24px] text-[12px] font-bold'>Getlinked Hackathon 1.0 Offically Begins</h2>
                                    <p className='desktop:text-right desktop:text-[14px] text-[12px]'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center flex-1'>
                                    <div className='h-[86px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>5</p>
                                    </div>
                                </div>
                                <div className='flex desktop:ml-[98px] desktop:w-[35%] w-full h-full desktop:h-auto items-end'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 justify-between'>
                            <div className='desktop:hidden flex flex-col gap-[4.68px] items-center flex-1'>
                                <div className='h-[77px] w-[2px] bg-secondary'></div>
                                <div className='h-[19px] w-[19px] circle bg-secondary flex justify-center items-center'>
                                    <p className='text-[12px] font-bold'>6</p>
                                </div>
                            </div>

                            <div className='flex desktop:items-center justify-center w-full flex-col-reverse desktop:flex-row'>
                                <div className='flex desktop:mr-[86px] desktop:w-[35%] desktop:justify-end'>
                                    <p className='text-secondary desktop:text-[24px] text-[12px] font-bold'>November 18, 2023</p>
                                </div>
                                <div className='desktop:flex hidden flex-col gap-[11px] items-center flex-1'>
                                    <div className='h-[86px] w-1 bg-secondary'></div>
                                    <div className='h-[53px] w-[53px] circle bg-secondary flex justify-center items-center'>
                                        <p className='text-[24px] font-bold'>6</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 desktop:w-[35%] desktop:ml-[98px]'>
                                    <h2 className='text-left text-secondary desktop:text-[24px] text-[12px] font-bold'>Demo Day</h2>
                                    <p className='text-left desktop:text-[16px] text-[12px]'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                                </div>
                            </div>
                        </div>
                        <img src={Star3} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
