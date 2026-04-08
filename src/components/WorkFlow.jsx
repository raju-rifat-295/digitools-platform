import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4'>
            <div className='max-w-7xl mx-auto text-center text-white space-y-4 py-30'>
                <h1 className='font-extrabold text-[40px]'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                <div className='flex justify-center gap-2 mt-10'>
                    <button className='w-50 py-3 px-4 bg-white text-violet-600 border-2 border-violet-600 rounded-full font-semibold'>Explore Products</button>
                    <button className='w-50 py-3 px-4 bg-transparent text-white border-2 border-white rounded-full font-semibold'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </div>
    );
};

export default WorkFlow;