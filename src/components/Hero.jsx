import React from 'react';
import groupImg from '../assets/Group 5.png';
import play from '../assets/play.png';
import bannerImg from '../assets/banner.png'

const Hero = () => {
    return (

        <div className='flex flex-col lg:flex-row max-w-7xl justify-between mx-auto items-center py-12 px-6 md:py-20 lg:py-24 gap-12'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:max-w-2xl'>
                <div className='flex gap-2 py-2 px-4 items-center bg-[#E1E7FF] rounded-full w-fit'>
                    <img className='w-4 h-4' src={groupImg} alt="" />
                    <p className='text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-medium text-sm md:text-base'>
                        New: AI-Powered Tools Available
                    </p>
                </div>

                <h1 className='font-extrabold text-4xl md:text-6xl lg:text-[72px] leading-tight'>
                    Supercharge Your<br className="hidden md:block" /> Digital Workflow
                </h1>

                <p className='text-[#627382] text-base md:text-lg max-w-lg'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
                    <button className='btn btn-ghost w-full sm:w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-8 text-white font-bold'>
                        Explore Products
                    </button>

                    <div className="p-0.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-flex items-center justify-center w-full sm:w-auto">
                        <button className="btn btn-ghost w-full sm:w-auto rounded-full bg-white hover:bg-gray-50 border-none flex items-center justify-center gap-2 px-8 py-3.5">
                            <img src={play} alt="Play icon" className="w-5" />
                            <span className="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center'>
                <div className='relative w-full max-w-md lg:max-w-none'>
                    <img src={bannerImg} alt="Banner" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Hero;