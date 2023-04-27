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
          <Cameras />
        </section>
      </main>
    </div>
  );
};

export default Home;
