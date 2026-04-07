import { Check } from 'lucide-react';
import React, { use } from 'react';
import TagType from './TagType';

const Products = ({ products }) => {
    const data = use(products);

    return (
        <div className='grid grid-cols-3 gap-7.5'>
            {data.map((product, index) =>
                <div key={index} className='border-2 border-[#F2F2F2] p-6 rounded-2xl text-left space-y-4 relative'>
                    <div className='absolute top-5 right-5'>
                        <TagType product={product}></TagType>
                    </div>
                    <div className='w-15 h-15 border-2 border-[#F2F2F2] rounded-full flex justify-center items-center'>
                        <img className='w-8 h-8' src={product.icon} alt="" />
                    </div>

                    <h2 className='font-bold text-2xl'>{product.name}</h2>
                    <p className='text-[#627382]'>{product.description}</p>
                    <p className='font-bold text-2xl'>${product.price}<span className='text-[16px] text-[#627382]'>/{product.period}</span> </p>
                    <ul className='space-y-1'>
                        {product.features.map((feature, index) => <li key={index} className='flex gap-3'><Check className="text-green-500"></Check><p>{feature}</p></li>)}
                    </ul>
                    <button className='btn btn-ghost w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 px-5 text-white font-bold'>Buy Now</button>
                </div>
            )}
        </div>
    );
};

export default Products;