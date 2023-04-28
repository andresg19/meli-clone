import React, { useState } from 'react';

const Nav = () => {


    return ( 
        <nav className='grid bg-[#fff159] h-[18vh] border-b border-[#19191923]'>
            <div className='mt-2'>
            <div className='flex w-[80%] justify-between mx-auto'>
                <div className='w-[14%]'>
                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" alt="img not found"/> 
                </div>
            <div className='flex w-[40%] bg-white items-center rounded-sm shadow-[#1919196b] shadow-sm'>
                <input type="text" disabled='true' className='w-[90%] outline-none' />
                <p className='font-extralight text-[#1919193e]'>|</p>
                <img src="./lupa.png" alt="" className='w-[15px] h-[15px] bg-white mx-auto hover:cursor-pointer' />
            </div>
            <div className='w-[32%]'>
            <img src="./suscrip.webp" alt="img not found"/>
            </div>
            </div>
            </div>
            <div className='flex items-center w-[80%] mx-auto justify-between mt-2'>
                <div className='flex w-[15%]'>
                    <img src="./location.png" alt="" className='w-5 h-5'/>
                    <div className='grid hover:cursor-pointer'>
                    <p className='text-[10px]'>Enviar a</p>
                    <h3 className='text-[12px]'>Córdoba 2650</h3>
                    </div> 
                </div>
                <div className='flex  w-[40%] items-center'>
                    <div>
                <select className='bg-[#fff159] outline-none text-[10px] hover:cursor-pointer mt-2.5' disabled>
                <option selected disabled>Categorías</option>
                </select>
                    </div>
                <div className='flex justify-between text-[10px] mt-2 w-[100%]'>
                <p className='hover:cursor-pointer'>Ofertas</p>
                <p className='hover:cursor-pointer'>Historial</p>
                <p className='hover:cursor-pointer'>Supermercado</p>
                <p className='hover:cursor-pointer'>Moda</p>
                <p className='hover:cursor-pointer'>Vender</p>
                <p className='hover:cursor-pointer'>Ayuda</p>
                </div>
                </div>
                <div className='flex items- mt-2  w-[35%]'>
                    <div className='flex text-[10px]'>
                        <img src="./user.png" alt="" className='w-[20%] h-[4vh]'/>
                    <select className='bg-[#fff159] outline-none hover:cursor-pointer' disabled>
                <option selected disabled>Usuario ...</option>
                </select>
                    </div>
                    <div className='flex text-[10px] items-center justify-evenly w-[100%]'>
                    <p className='hover:cursor-pointer'>Mis compras</p>
                    <select className='bg-[#fff159] outline-none hover:cursor-pointer' disabled>
                <option selected disabled>Favoritos</option>
                </select>
                <img src="./notif.png" alt="" className='w-[7%] hover:cursor-pointer'/>
                <img src="./cart.png" alt="" className='w-[8%] hover:cursor-pointer' />
                    </div>
                </div>
            </div>
            </nav>
     );
}
 
export default Nav;