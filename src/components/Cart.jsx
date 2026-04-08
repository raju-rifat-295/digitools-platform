import { X } from 'lucide-react';
import React from 'react';


const Cart = ({ cartArr, setCartArr }) => {
    const removeItem = (item) => {
        const filteredArr = cartArr.filter(p => p.id !== item.id);
        setCartArr(filteredArr);
    }
    return (
        <>
            {cartArr.map(
                (item) =>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center p-6 bg-[#F2F2F2] rounded-xl gap-4'>
                        <div className='flex flex-row items-center gap-6 text-left w-full flex-1'>
                            <div className='w-16 h-16 bg-white rounded-2xl flex shrink-0 justify-center items-center shadow-sm'>
                                <img className='w-10 h-10' src={item.icon} alt="" />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl font-bold text-[#1A1A1A]'>{item.name}</p>
                                <p className='text-lg text-[#627382]'>${item.price}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => removeItem(item)}
                            className='text-red-500 font-semibold hover:text-red-700 transition-colors px-4 py-2'
                        >
                            Remove
                        </button>
                    </div>
            )}
        </>

    );
};

export default Cart;