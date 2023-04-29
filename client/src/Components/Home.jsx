import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Payments from "./Payments";
import Phones from "./Products/Phones";
import Computing from "./Products/Computing";
import Cameras from "./Products/Cameras";
import Suscription from "./Suscription";
import Benefits from "./Benefits";



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
      {/* </main> */}
        <section>
          <Payments />
        </section>
        <section>
          <Phones />
          <Computing />
        </section>
         <section>
          <Suscription />
        </section>
        <section>
          <Benefits />
        </section>
        <Cameras /> 
      </main>
      <footer>
        <div className="flex">
        <a href="https://www.linkedin.com/in/andres-germain-dev/" className="mt-10 underline mx-auto text-[#19191978]">Andrés Germain dev</a>
        </div> 
       </footer>
    </div>
  );
};

export default Home;
