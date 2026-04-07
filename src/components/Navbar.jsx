import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex space-y-3 flex-col md:space-y-3 lg:flex-row justify-between items-center px-14 mx-auto py-3 border-b-2 border-[#F2F2F2]'>
            <div onClick={() => setOpen(!open)} className='md:hidden absolute left-5 top-15'>
                {
                    open ?
                        <X></X> :
                        <Menu ></Menu>
                }
                <ul className={`absolute ${open ? 'left-0 top-20' : '-left-100 top-20'}   md:hidden border-2 bg-amber-200 font-semibold border-t-0 duration-800`}>
                    <li className='hover:bg-amber-500 px-2.5 py-1'><a href="">Products</a></li>
                    <li className='hover:bg-amber-500 px-2.5 py-1'><a href="">Features</a></li>
                    <li className='hover:bg-amber-500 px-2.5 py-1'><a href="">Pricing</a></li>
                    <li className='hover:bg-amber-500 px-2.5 py-1'><a href="">Testimonials</a></li>
                    <li className='hover:bg-amber-500 px-2.5 py-1'><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="py-2 font-extrabold text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                DigiTools
            </div>
            <ul className='hidden md:flex gap-8 font-semibold'>
                <li><a href="">Products</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <div className='flex items-center gap-4 font-semibold'>
                <ShoppingCart></ShoppingCart>
                <p><a href="">Login</a></p>
                <button className='btn btn-ghost rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;