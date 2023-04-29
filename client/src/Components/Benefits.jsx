import React from 'react';

const Benefits = () => {
    return ( 
        <div className="w-[90%] mx-auto mt-10">
            <div className="flex items-center">
              <h1 className="text-[#1919199c]">Beneficios de Mercado Puntos</h1>
              <p className="text-[12px] ml-2 mt-1 text-[#61a0fb] hover:text-[#6175fb] hover:cursor-pointer">
                Ver todos los beneficios
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg"
                  alt=""
                  className="rounded-md w-[95%]"
                />
              </div>
              <div>
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@2x.jpg"
                  alt=""
                  className="rounded-md w-[95%]"
                />
              </div>
              <div>
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@2x.jpg"
                  alt=""
                  className="rounded-md w-[95%]"
                />
              </div>
            </div>
          </div>
     );
}
 
export default Benefits;