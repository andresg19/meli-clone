import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'




const Products = ({products}) => {
  const [isHide, setIsHide] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(0);
  let renderProducts = products.slice(visibleProducts, visibleProducts + 5);
 console.log(products)

 useEffect(() => {
  setTimeout(() => setIsHide(false), 6000);
 },[]);
 
  const clickRight = () => {
    visibleProducts === 10 ? null : setVisibleProducts(visibleProducts + 5);
  }
  const clickLeft = () => {
    visibleProducts === 0 ? null : setVisibleProducts(visibleProducts - 5);
  }

 
  
  

  return (
    <div className='flex w-[80%] gap-x-4 h-[250px] group relative mx-auto'>
    {
      products
      ? renderProducts.map((p) => (
        <div className="grid   w-full h-[40vh] group bg-white shadow-sm rounded-sm duration-500 ease-in-out group/item hover:cursor-pointer hover:shadow-md hover:h-auto hover:shadow-[#19191952]" key={p.id}>
              <div className="mt-2">
                <img src={p.thumbnail} alt="" width={100} className="mx-auto" />
              </div>
              

              <div className="grid">
                <h1 className="ml-2">${p.price}</h1>
                <h3 className="text-[#00a650] text-[10px] font-semibold ml-2">
                  Envío gratis
                </h3>
                <p className="text-[10px] ml-2 opacity-0 w-[90%] text-[#1919199c] group-hover/item:opacity-100 ">{p.title}</p>
              </div>
            </div>
          ))
        : null}

   
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
       {visibleProducts === 0 ? null : <BsChevronCompactLeft onClick={clickLeft} size={30}/>} 
    </div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
       {visibleProducts === 10 ? null : <BsChevronCompactRight onClick={clickRight} size={30}/>} 
    </div>
</div>
    // <div className="grid grid-cols-5 gap-8 w-[80%] mx-auto mt-5">
    //   {products
    //     ? products.map((p) => (
    //         <div className="grid w-[110%] min-h-[40vh] bg-white shadow-sm rounded-sm relative group hover:shadow-md hover:shadow-[#19191939]" key={p.id}>
    //           <div className="mt-2">
    //             <img src={p.thumbnail} alt="" width={100} className="mx-auto" />
    //           </div>

    //           <div>
    //             <h1 className="ml-2">${p.price}</h1>
    //             <h3 className="text-[#00a650] text-[10px] font-semibold ml-2">
    //               Envío gratis
    //             </h3>
    //           </div>
    //             <p className="text-[10px] w-[80%] flex opacity-0 ml-2 text-[#1919199c] group-hover:opacity-100">{p.title}</p>
    //         </div>
    //       ))
    //     : null}
    // </div>
  );
};

export default Products;
