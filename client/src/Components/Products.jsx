import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/Actions';

const Products = () => {
    const dispatch =useDispatch();
    const products = useSelector((state) => state.products);
    const renderProducts = products.slice(30, 45);
    console.log(renderProducts);
    console.log(products);
    
        useEffect(() => {
            dispatch(getProducts());
        },[]);


    return ( 
        <div>
            {
                products ? renderProducts.map((p) => (
                    <div key={p.id}>
                        <img src={p.thumbnail} alt="" />
                        <h1>{p.price}</h1>
                        <p>{p.title}</p>
                    </div>
                )) : null
            }
        </div>
     );
}
 
export default Products;