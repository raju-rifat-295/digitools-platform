import { X } from 'lucide-react';
import React from 'react';


const Cart = ({ cartArr }) => {
    return (
        <>
            {cartArr.map(
                (item) =>
                    <div className='flex justify-between items-center p-5 bg-[#F2F2F2] rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <div className='w-15 h-15 border-2 border-[#F2F2F2] rounded-full flex justify-center items-center'>
                                <img className='w-8 h-8' src={item.icon} alt="" />
                            </div>
                            <div className='w-[926px] text-left'>
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <p className='text-[16px] text-[#627382]'>${item.price}</p>
                            </div>
                        </div>

                        <button className='text-red-500 font-semibold'>Remove</button>
                    </div>
            )}
        </>

    );
};

export default Cart;