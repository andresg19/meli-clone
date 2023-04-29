import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'




const Products = ({products}) => {
  
 

  return (

    <div className="grid grid-cols-2 gap-3 w-[100%] justify-between mx-auto mt-5">
      {products
        ? products.map((p) => (
            <div className="grid w-[100%] h-auto bg-white shadow-sm rounded-sm relative group hover:shadow-md hover:shadow-[#19191939]" key={p.id}>
              <div className="mt-2">
                <img src={p.thumbnail} alt="" width={100} className="mx-auto" />
              </div>

              <div>
                <h1 className="ml-2">${p.price}</h1>
                <h3 className="text-[#00a650] text-[10px] font-semibold ml-2">
                  Envío gratis
                </h3>
              </div>
                <p className="text-[10px] w-[80%] flex opacity-0 ml-2 text-[#1919199c] group-hover:opacity-100">{p.title}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Products;
