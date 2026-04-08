import React from 'react';
import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className=' bg-[#F9FAFC] py-30 px-4'>
            <div className='max-w-7xl mx-auto text-center'>
                <div className='space-y-4'>
                    <h1 className='font-extrabold text-5xl'>Get Started in 3 Steps</h1>
                    <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10'>
                    <div className='bg-white px-6 py-22 flex flex-col justify-center items-center space-y-4 relative border-2 border-[#F1F1F1] shadow-xl rounded-2xl'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 w-11 rounded-full text-white font-bold absolute top-3 right-3'>01</div>
                        <div className='size-25 rounded-full bg-[#E1E7FF] flex justify-center items-center'><img className='size-15' src={User} alt="" /></div>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white px-6 py-22 flex flex-col justify-center items-center space-y-4 relative border-2 border-[#F1F1F1] shadow-xl rounded-2xl'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 w-11 rounded-full text-white font-bold absolute top-3 right-3'>02</div>
                        <div className='size-25 rounded-full bg-[#E1E7FF] flex justify-center items-center'><img className='size-15' src={Package} alt="" /></div>
                        <h3 className='text-2xl font-bold'>Choose Products</h3>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-white px-6 py-22 flex flex-col justify-center items-center space-y-4 relative border-2 border-[#F1F1F1] shadow-xl rounded-2xl'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-2.5 w-11 rounded-full text-white font-bold absolute top-3 right-3'>03</div>
                        <div className='size-25 rounded-full bg-[#E1E7FF] flex justify-center items-center'><img className='size-15' src={Rocket} alt="" /></div>
                        <h3 className='text-2xl font-bold'>Start Creating</h3>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Steps;