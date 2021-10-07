import React from 'react';
import CarouselPage from '../components/CarouselPage';
import '../styles/home.css'
const Home = () => {
    return (
        <div className="container_home">
            <h1 >Cientos de productos con <span style={{color:'green'}}><strong>envio gratis</strong></span></h1>
            <CarouselPage/>
        </div>

    );
};

export default Home;