import React from 'react';
import Nav from './Nav';
import Products from './Products';

const Home = () => {

    return ( 
        <div>
            <header>
            <Nav />
            </header>
            <main>
                <Products />
            </main>
        </div>
     );
}
 
export default Home;