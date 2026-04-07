import React from 'react';

const Status = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#4F39F6_0%,#9514FA_100%)] text-white py-15'>
            <div className='grid grid-cols-1 md:grid-cols-5 items-center max-w-7xl mx-auto text-center'>

                <div className='space-y-2'>
                    <h2 className='font-extrabold text-[40px] lg:text-[60px]'>50K+</h2>
                    <p className="text-lg">Active Users</p>
                </div>


                <div className='flex justify-center items-center w-full py-3 px-12 md:px-0 md:h-24'>
                    <div className="divider md:divider-horizontal before:bg-white after:bg-white m-0 w-full md:w-auto"></div>
                </div>

                <div className='space-y-2'>
                    <h2 className='font-extrabold text-[40px] lg:text-[60px]'>200+</h2>
                    <p className="text-lg">Premium Tools</p>
                </div>

                <div className='flex justify-center items-center w-full py-3 px-12 md:px-0 md:h-24'>
                    <div className="divider md:divider-horizontal before:bg-white after:bg-white m-0 w-full md:w-auto"></div>
                </div>

                <div className='space-y-2'>
                    <h2 className='font-extrabold text-[40px] lg:text-[60px]'>4.9</h2>
                    <p className="text-lg">Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Status;