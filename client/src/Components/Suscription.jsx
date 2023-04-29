import React from 'react';

const Suscription = () => {
    return ( 
        <div className="grid w-[90%] bg-white mx-auto rounded-md mt-10 lg:w-[80%]">
        <div className="flex h-[12vh] text-white bg-gradient-to-r from-[#a90f90] via-[#77137c] to-[#0e1a52] rounded-t-md items-center justify-between">
          <h1 className="ml-5">Suscribite al nivel 6</h1>
          <div className="flex mr-5">
            <p className="text-[25px] font-extralight">|</p>
            <div>
              <p className="text-[10px] font-semibold">$1.499</p>
              <p className="text-[14px] font-semibold">$699 /mes</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[14px] ml-[5%] mt-5 font-semibold">
            Conseguí los mejores beneficios en Mercado Libre
          </p>
        </div>
        <div className="grid mt-5 text-[12px] w-[90%] mx-auto lg:flex">
          <div className="flex items-center w-[90%]">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
              alt=""
              width={50}
            />
            <p>Disney+ sin cargo</p>
          </div>
          <div className="flex items-center w-[90%]">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg"
              alt=""
              width={50}
            />
            <p>Star+ sin cargo</p>
          </div>
          <div className="flex items-center w-[90%]">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"
              alt=""
              width={50}
            />
            <p>
              Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de
              menos de $ 8.000
            </p>
          </div>
        </div>
        <hr className="h-px my-5 bg-gray-100 border-0" />
        <button className="ml-auto mr-10 mb-5 bg-[#3483fa] hover:bg-[#345cfa] text-[12px] font-semibold text-white px-4 py-2 rounded-md">
          Suscribite
        </button>
      </div>
     );
}
 
export default Suscription;