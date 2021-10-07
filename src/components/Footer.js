import React, { PropTypes } from 'react';
import Github from '../Icons/Github';
import ChartMap from './ChartMap';
import '../styles/footer.css'
const Footer = props => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Servicios</h3>
                            <ul>
                                <li><a href="#">Ventas</a></li>
                                <li><a href="#">Compras</a></li>
                                <li><a href="#">Devoluciones</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Sobre Nosotros</h3>
                            <ul>
                                <li><a href="#">Quienes Somos</a></li>
                                <li><a href="#">Ubicaciones</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>MisionTic-CP3</h3>
                            <p>CP3 Es la plataforma de ventas más grande de Colombia, con presencia a través de grandes tiendas, tanto físicas como online, donde comercializa productos de diferentes categorias y con marcas diversificadas.</p>
                        </div>
                       <div class="col-xs-1" align="center"><a href="https://github.com/spa51/ProyectMinTic"><Github className="icon ion-social-facebook"/></a></div>
                    </div>
                    <p className="copyright">MISIONTIC-CP3 © 2021</p>
                </div>
            </footer>
            <div>
                <ChartMap/>
            </div>
        </div>  
    );
};

export default Footer;