import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
let totalCost;

const Main = ({ products }) => {
    const [activeBtn, setActiveBtn] = useState('products');
    const [cartArr,setCartArr]=useState([])

    const cartArrHandle = (item) => {
        totalCost = 0;
        setCartArr([...cartArr,item]);
        totalCost = cartArr.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price;
        }, 0);
    }


    return (
        <div className='flex flex-col items-center text-center space-y-4 py-30'>
            <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>

            <div className="tabs tabs-box rounded-full">
                <input onClick={() => setActiveBtn('products')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Products" defaultChecked />
                <input onClick={() => setActiveBtn('cart')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Cart" />
            </div>

            {
                activeBtn === 'products' ?
                    <div className='max-w-7xl mx-auto'>
                        <Products cartArrHandle={cartArrHandle} products={products}></Products>
                    </div> :

                    <div className='max-w-7xl border-2 border-[#F2F2F2] mx-auto p-10  rounded-2xl space-y-4'>
                        <h2 className='text-left font-bold text-2xl'>Your Cart</h2>
                        <div className='space-y-4 p-6'>
                            <Cart cartArr={cartArr}></Cart>
                        </div>

                        <div className='flex justify-between items-center'>
                            <p className='text-left text-[#627382] font-normal w-263.25'>Total:</p>
                            <p className='font-bold text-2xl'>${totalCost}</p>
                        </div>
                        <button onClick={()=>setCartArr([])} className='btn btn-ghost rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold w-full'>Proceed to Checkout</button>
                    </div>
            }


        </div>
    );
};

export default Main;