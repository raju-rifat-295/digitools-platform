import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-14 mx-auto py-3 border-b-2 border-[#F2F2F2]'>
            <div class="py-2 font-extrabold text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                DigiTools
            </div>
            <ul className='flex gap-8 font-semibold'>
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