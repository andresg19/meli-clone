import { useState } from "react";

const Nav = () => {



    return ( 
      <nav class="bg-[#fff159] shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between lg:grid">
					<div class="flex space-x-7 items-center">
						<div>
							<a href="#" class="flex items-center py-4 ">
								<img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" alt="Logo" className="w-[100%]" />
							</a>
						</div>
            <div className='flex w-[100%] h-5 bg-white items-center rounded-sm shadow-[#1919196b] shadow-sm lg:w-[50%] lg:h-7'>
                <input type="text" disabled='true' className='w-[100%] outline-none' />
                <p className='font-extralight text-[#1919193e]'>|</p>
                <img src="./lupa.png" alt="" className='w-[15px] h-[15px] bg-white mx-auto hover:cursor-pointer' />
            </div>
            <div className='hidden lg:flex w-[32%]'>
             <img src="./suscrip.webp" alt="img not found"/>
             </div>
					</div>
						<div class="hidden md:flex items-center  text-[12px]   justify-between w-[100%]">
            <div className="flex w-[15%] text-[12px] font-light">
            <img src="./location.png" alt="" className='w-5 h-5'/>
              <h1>Enviar a Córdoba 5000</h1>
            </div>
            <select className='bg-[#fff159] outline-none text-[10px] hover:cursor-pointer' disabled>
              <option selected disabled>Categorías</option>
            </select>
            <p className='hover:cursor-pointer'>Ofertas</p>
            <p className='hover:cursor-pointer'>Historial</p>
            <p className='hover:cursor-pointer'>Supermercado</p>
            <p className='hover:cursor-pointer'>Moda</p>
            <p className='hover:cursor-pointer'>Vender</p>
            <p className='hover:cursor-pointer'>Ayuda</p>
            <div className='flex items- mt-2  w-[35%]'>
             <div className='flex'>
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
				
					<div class="md:hidden flex items-center ml-2">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>

					</div>
          <img src="./cart.png" alt="" className='md:hidden w-[8%] h-7 mt-3 hover:cursor-pointer' />
				</div>
            <div className="flex md:hidden text-[12px] font-light">
            <img src="./location.png" alt="" className='w-5 h-5'/>
              <h1>Enviar a Córdoba 5000</h1>
            </div>
			</div>
	
		</nav>
    

        // <nav className='grid bg-[#fff159] h-[18vh] border-b border-[#19191923]'>
        //     <div className='mt-2'>
        //     <div className='flex w-[80%] justify-between mx-auto'>
        //         <div className='w-[14%]'>
        //         <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" alt="img not found"/> 
        //         </div>
        //     <div className='flex w-[40%] bg-white items-center rounded-sm shadow-[#1919196b] shadow-sm'>
        //         <input type="text" disabled='true' className='w-[90%] outline-none' />
        //         <p className='font-extralight text-[#1919193e]'>|</p>
        //         <img src="./lupa.png" alt="" className='w-[15px] h-[15px] bg-white mx-auto hover:cursor-pointer' />
        //     </div>
        //     <div className='w-[32%]'>
        //     <img src="./suscrip.webp" alt="img not found"/>
        //     </div>
        //     </div>
        //     </div>
        //     <div className='flex items-center w-[80%] mx-auto justify-between mt-2'>
        //         <div className='flex w-[15%]'>
        //             <img src="./location.png" alt="" className='w-5 h-5'/>
        //             <div className='grid hover:cursor-pointer'>
        //             <p className='text-[10px]'>Enviar a</p>
        //             <h3 className='text-[12px]'>Córdoba 2650</h3>
        //             </div> 
        //         </div>
        //         <div className='flex  w-[40%] items-center'>
        //             <div>
        //         <select className='bg-[#fff159] outline-none text-[10px] hover:cursor-pointer mt-2.5' disabled>
        //         <option selected disabled>Categorías</option>
        //         </select>
        //             </div>
        //         <div className='flex justify-between text-[10px] mt-2 w-[100%]'>
        //         <p className='hover:cursor-pointer'>Ofertas</p>
        //         <p className='hover:cursor-pointer'>Historial</p>
        //         <p className='hover:cursor-pointer'>Supermercado</p>
        //         <p className='hover:cursor-pointer'>Moda</p>
        //         <p className='hover:cursor-pointer'>Vender</p>
        //         <p className='hover:cursor-pointer'>Ayuda</p>
        //         </div>
        //         </div>
        //         <div className='flex items- mt-2  w-[35%]'>
        //             <div className='flex text-[10px]'>
        //                 <img src="./user.png" alt="" className='w-[20%] h-[4vh]'/>
        //             <select className='bg-[#fff159] outline-none hover:cursor-pointer' disabled>
        //         <option selected disabled>Usuario ...</option>
        //         </select>
        //             </div>
        //             <div className='flex text-[10px] items-center justify-evenly w-[100%]'>
        //             <p className='hover:cursor-pointer'>Mis compras</p>
        //             <select className='bg-[#fff159] outline-none hover:cursor-pointer' disabled>
        //         <option selected disabled>Favoritos</option>
        //         </select>
        //         <img src="./notif.png" alt="" className='w-[7%] hover:cursor-pointer'/>
        //         <img src="./cart.png" alt="" className='w-[8%] hover:cursor-pointer' />
        //             </div>
        //         </div>
        //     </div>
        //     </nav>
     );
}
 
export default Nav;