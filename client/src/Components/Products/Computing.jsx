import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions";
import Products from "./Products";

const Computing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.computing);
 

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="grid mt-5">
      <div className="flex items-center">
      <h1 className="ml-[10%]  text-[#1919199c]">Relacionado con tus visitas en Computación</h1>
      <p className='text-[12px] ml-2 mt-1 text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver historial</p>
      </div>
      <br />
      <Products products={products} />
    </div>
  );
};

export default Computing;
