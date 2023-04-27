import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearState } from '../../Redux/Actions'
import Nav from '../Nav'


const ProductDetail = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.detail)
    console.log(product)
    const { id } = useParams()
    
    return ( 
        <div>
            <Nav />
            <div className='grid grid-cols-3 gap-4 w-[85%] bg-white mx-auto mt-20'>
                <div className='flex col-span-2'>
                    <div className='w-[300px]'>
                    <img src={product.thumbnail} alt="" className='w-[100%]' />
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                    </div>
                </div>
                <div>
                    <h1>llega tal dia</h1>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetail;