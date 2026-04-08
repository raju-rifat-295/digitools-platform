import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import { Caravan, ForwardIcon, Frown } from 'lucide-react';

const Main = ({ products, setCartTip }) => {
    const [activeBtn, setActiveBtn] = useState('products');
    const [cartArr, setCartArr] = useState([])

    const cartArrHandle = (item) => {
        if (cartArr.find(p => p.id === item.id)) {
            return;
        }
        setCartArr([...cartArr, item]);
    }

    setCartTip(cartArr.length);
    const totalCost = cartArr.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
    }, 0);

    return (
        <div className='flex flex-col items-center text-center space-y-4 py-30'>
            <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>

            <div className="tabs tabs-box rounded-full">
                <input onClick={() => setActiveBtn('products')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Products" defaultChecked />

                <input onClick={() => setActiveBtn('cart')} type="radio" name="my_tabs_1" className={`tab rounded-full font-bold ${activeBtn === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label={`Cart(${cartArr.length})`} />
            </div>

            {
                activeBtn === 'products' ?
                    <div className='max-w-7xl mx-auto px-4'>
                        <Products cartArrHandle={cartArrHandle} products={products}></Products>
                    </div> :

                    <div className='w-full max-w-7xl border-2 border-[#F2F2F2] mx-auto p-4 md:p-10 rounded-2xl'>
                        {
                            cartArr.length ?
                                <div className='space-y-6'>
                                    <h2 className='text-left font-bold text-2xl'>Your Cart</h2>
                                    <div className='space-y-4 py-4'>
                                        <Cart setCartArr={setCartArr} cartArr={cartArr}></Cart>
                                    </div>

                                    <div className='flex justify-between items-center border-t border-[#F2F2F2] pt-4'>
                                        <p className='text-left text-[#627382] font-normal'>Total:</p>
                                        <p className='font-bold text-3xl'>${totalCost}</p>
                                    </div>
                                    <button onClick={() => setCartArr([])} className='btn btn-ghost rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold w-full'>Proceed to Checkout</button>
                                </div> :

                                <div className='w-full min-h-75 text-[#627382] flex flex-col items-center justify-center gap-4 font-bold p-10 bg-[#F2F2F2] rounded-lg'>
                                    <Frown size={64} strokeWidth={2} />
                                    <h2 className='text-xl'>Cart is Empty</h2>
                                </div>
                        }
                    </div>
            }


        </div>
    );
};

export default Main;