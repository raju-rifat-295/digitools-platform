import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='py-30 px-4'>
            <div className='max-w-7xl mx-auto text-center'>
                <div className='space-y-4'>
                    <h1 className='font-extrabold text-5xl'>Simple, Transparent Pricing</h1>
                    <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10'>
                    <div className='flex flex-col bg-[#F9FAFC] p-6 space-y-5 relative border-2 border-[#F1F1F1] shadow-xl rounded-2xl text-left'>
                        <div className='space-y-2'>
                            <h3 className='font-bold text-2xl'>Starter</h3>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <p className='font-bold text-[40px]'>$0<span className='font-normal text-[#627382] text-[20px]'>/Month</span></p>
                        <ul className='space-y-1 flex-1'>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Access to 10 free tools</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Basic templates</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Community support</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>1 project per month</li>
                        </ul>
                        <button className='btn btn-ghost rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold'>Get Started Free</button>
                    </div>

                    <div className='flex flex-col bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-6 space-y-5 relative text-white border-2 border-[#F1F1F1] shadow-xl rounded-2xl text-left'>
                        <div className='absolute text-[#BB4D00] bg-[#FEF3C6] px-3 py-1.5 -top-5 left-35 rounded-full font-semibold'>Most Popular</div>
                        <div className='space-y-2'>
                            <h3 className='font-bold text-2xl'>Pro</h3>
                            <p className=''>Best for professionals</p>
                        </div>
                        <p className='font-bold text-[40px]'>$29<span className='font-normal text-[20px]'>/Month</span></p>
                        <ul className='space-y-1 flex-1'>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Access to all premium tools</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Unlimited templates</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Priority support</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Unlimited projects</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Cloud sync</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Advanced analytics</li>
                        </ul>
                        <button className='btn border-none rounded-full w-full bg-white py-4 px-5 font-bold shadow-sm hover:bg-gray-50'>
                            <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                                Start Pro Trial
                            </span>
                        </button>
                    </div>

                    <div className='flex flex-col bg-[#F9FAFC] p-6 space-y-5 relative border-2 border-[#F1F1F1] shadow-xl rounded-2xl text-left'>
                        <div className='space-y-2'>
                            <h3 className='font-bold text-2xl'>Enterprise</h3>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <p className='font-bold text-[40px]'>$99<span className='font-normal text-[#627382] text-[20px]'>/Month</span></p>
                        <ul className='space-y-1 flex-1'>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Everything in Pro</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Team collaboration</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Custom integrations</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Dedicated support</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>SLA guarantee</li>
                            <li className='flex gap-3'><Check className="text-green-500"></Check>Custom branding</li>
                        </ul>
                        <button className='btn btn-ghost rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold'>Get Started Free</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;