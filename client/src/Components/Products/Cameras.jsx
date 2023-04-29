import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions";
import Products from "./Products";

const Cameras = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cameras);
 

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="grid mt-10">
      <div className="flex items-center mx-auto">
      <h1 className="text-[#1919199c]">Podría interesarte</h1>
      <p className='text-[12px] ml-2 mt-1 text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver historial</p>
      </div>
      <br />
      <Products products={products} />
    </div>
  );
};

export default Cameras;
