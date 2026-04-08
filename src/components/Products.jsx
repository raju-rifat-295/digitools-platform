import React, { use} from 'react';
import Product from '../Product';

const Products = ({ products,cartArrHandle }) => {
    const data = use(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
            {data.map((product, index) =>
                <Product cartArrHandle={cartArrHandle} product={product} key={index}></Product>
            )}
        </div>
    );
};

export default Products;