import React from 'react';

const Payments = () => {
    return ( 
        <div className='flex w-[95%] mx-auto bg-white mt-5 h-auto shadow-sm rounded-sm lg:w-[80%]'>
        <div className='grid grid-cols-2 w-[100%] mx-auto lg:flex lg:justify-between'>
        <div className='flex items-center lg:ml-5'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="" className='w-[25%] lg:w-[35%] ' />
            <div>
            <h1 className='text-[12px]'>Tarjeta de crédito</h1>
            <p className='text-[10px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver promociones bancarias</p>
            </div>
        </div>
        <div className='flex items-center '>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="" className='w-[25%] lg:w-[35%] ' />
            <div>
            <h1 className='text-[12px]'>Tarjeta de débito</h1>
            <p className='text-[10px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="" className='w-[25%] lg:w-[35%] ' />
            <div>
            <h1 className='text-[12px]'>Cuotas sin tarjeta</h1>
            <p className='text-[10px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Conocé Mercado Crédito</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="" className='w-[25%] lg:w-[35%] ' />
            <div>
            <h1 className='text-[12px]'>Efectivo</h1>
            <p className='text-[10px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="" className='w-[25%] lg:w-[35%] ' />
        </div>
        </div>
        </div>
     );
}
 
export default Payments;