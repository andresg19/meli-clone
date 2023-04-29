import React from 'react';

const Payments = () => {
    return ( 
        <div className='flex w-[95%] mx-auto bg-white mt-5 h-auto shadow-sm rounded-sm'>
        <div className='grid w-[95%] mx-auto justify-center'>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="" className='w-[30%]' />
            <div>
            <h1 className='text-[10px]'>Tarjeta de crédito</h1>
            <p className='text-[8px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver promociones bancarias</p>
            </div>
        </div>
        <div className='flex items-center '>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="" className='w-[30%]' />
            <div>
            <h1 className='text-[10px]'>Tarjeta de débito</h1>
            <p className='text-[8px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="" className='w-[30%]' />
            <div>
            <h1 className='text-[10px]'>Cuotas sin tarjeta</h1>
            <p className='text-[8px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Conocé Mercado Crédito</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="" className='w-[30%]' />
            <div>
            <h1 className='text-[10px]'>Efectivo</h1>
            <p className='text-[8px] text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="" className='w-[30%]' />
        </div>
        </div>
        </div>
     );
}
 
export default Payments;