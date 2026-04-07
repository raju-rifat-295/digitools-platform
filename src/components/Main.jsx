import React, { useState } from 'react';
import Products from './Products';

const Main = ({products}) => {
    const [activeBtn, setActiveBtn] = useState('products');
    return (
        <div className='flex flex-col items-center text-center space-y-4 py-30'>
            <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>

            <div className="tabs tabs-box rounded-full">
                <input onClick={()=>setActiveBtn('products')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn==='products'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Products" defaultChecked/>
                <input onClick={()=>setActiveBtn('cart')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn==='cart'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Cart"  />
            </div>
            <div className='max-w-7xl mx-auto'>
                <Products products={products}></Products>
            </div>
        </div>
    );
};

export default Main;