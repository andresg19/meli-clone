import React from 'react';

const Payments = () => {
    return ( 
        <div className='flex w-[80%] mx-auto justify-between bg-white mt-5 h-[15vh] shadow-sm rounded-sm'>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="" />
            <div>
            <h1 className='text-xs'>Tarjeta de crédito</h1>
            <p className='text-[10px] text-[#61a0fb]'>Ver promociones bancarias</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="" />
            <div>
            <h1 className='text-xs'>Tarjeta de débito</h1>
            <p className='text-[10px] text-[#61a0fb]'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="" />
            <div>
            <h1 className='text-xs'>Cuotas sin tarjeta</h1>
            <p className='text-[10px] text-[#61a0fb]'>Conocé Mercado Crédito</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="" />
            <div>
            <h1 className='text-xs'>Efectivo</h1>
            <p className='text-[10px] text-[#61a0fb]'>Ver más</p>
            </div>
        </div>
        <div className='flex items-center'>
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="" />
        </div>
        </div>
     );
}
 
export default Payments;