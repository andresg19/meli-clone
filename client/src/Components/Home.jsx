import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Payments from "./Payments";
import Phones from "./Products/Phones";
import Computing from "./Products/Computing";
import Cameras from "./Products/Cameras";

const Home = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <article>
          <Carousel />
        </article>
        <section>
          <Payments />
        </section>
        <section>
          <Phones />
          <Computing />
        </section>
        <section>
          <div className="grid w-[80%] bg-white mx-auto rounded-md">
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
              <p className="text-[14px] ml-[5%]">
                Conseguí los mejores beneficios en Mercado Libre
              </p>
            </div>
            <div className="flex justify-between mt-5 text-[12px] w-[90%] mx-auto">
              <div className="flex items-center">
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
                  alt=""
                  width={50}
                />
                <p>Disney+ sin cargo</p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg"
                  alt=""
                  width={50}
                />
                <p>Star+ sin cargo</p>
              </div>
              <div className="flex items-center w-[30%]">
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
        </section>
        <section className="mt-10">
          <div className="w-[80%] mx-auto">
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
        </section>
        <Cameras />
      </main>
    </div>
  );
};

export default Home;
