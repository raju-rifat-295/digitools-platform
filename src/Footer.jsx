import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#101727] px-4'>
            <div className='max-w-7xl mx-auto  pt-30 pb-7.5 text-[#627382]'>
                <div className='items-start grid grid-cols-1 lg:grid-cols-3 text-[16px] text-center lg:text-left lg:gap-60'>
                    <div className='flex items-center justify-center'>
                        <div className='w-88 '>
                            <h1 className='text-white font-extrabold text-[40px]'>DigiTools</h1>
                            <p className='mt-1 md:mt-0'>Premium digital tools for creators,professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-3 mt-10 lg:mt-0 md:gap-30'>
                        <ul className='space-y-3'>
                            <li className='text-[20px] font-medium text-white'>Product</li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Templates</a></li>
                            <li><a href="">Integrations</a></li>
                        </ul>
                        <ul className='space-y-3'>
                            <li className='text-[20px] font-medium text-white'>Company</li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                        </ul>
                        <ul className='space-y-3'>
                            <li className='text-[20px] font-medium text-white'>Resources</li>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Community</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className='mt-20 lg:mt-0'>
                        <p className='text-[20px] font-medium text-white'>Social Links</p>
                        <div className='flex gap-10 md:gap-20 lg:gap-3 justify-center items-center mt-5 lg:justify-start lg:items-start'>
                            <div className='p-2.5 bg-white rounded-full size-10 flex justify-center items-center'><RiInstagramFill className='size-5' style={{ color: 'black' }} /></div>
                            <div className='p-2.5 bg-white rounded-full size-10 flex justify-center items-center'><FaSquareFacebook className='size-5' style={{ color: 'black' }} /></div>
                            <div className='p-2.5 bg-white rounded-full size-10 flex justify-center items-center'><FaXTwitter className='size-5' style={{ color: 'black' }} /></div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 divider h-[0.5px] before:bg-white after:bg-white"></div>

                <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                    <p className='mt-3 md:mt-0'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms of Service</a></p>
                        <p><a href="">Cookies</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;