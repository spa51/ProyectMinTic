import React from 'react';
import CarouselPage from '../components/CarouselPage';
import Footer from '../components/Footer';
import '../styles/home.css'

const Home = () => {
    return (
        <div className="container_home">
            <h1 >Cientos de productos con <span style={{color:'green'}}><strong>envio gratis</strong></span></h1>
            <CarouselPage/>
            <Footer/>
        </div>

    );
};

export default Home;