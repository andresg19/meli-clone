import React from "react";
import Nav from "./Nav";
import Products from "./Products";
import Carousel from "./Carousel";
import Payments from "./Payments";

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
          <Products />
        </section>
      </main>
    </div>
  );
};

export default Home;
