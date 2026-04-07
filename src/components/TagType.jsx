import React from 'react';

const TagType = ({product}) => {
    return (
        <div className={
            `px-3 py-1.5 border rounded-full font-bold
            ${(
                ()=>{
                if(product.tagType === 'best seller'){
                    return'bg-[#FEF3C6] text-[#BB4D00]'
                }
                else if(product.tagType === 'popular'){
                    return 'bg-[#E1E7FF] text-violet-700'
                }
                else{
                    return 'bg-[#DBFCE7] text-[#0A883E]'
                }
            }
            )()}
            `
        }>
            {product.tagType}
        </div>
    );
};

export default TagType;