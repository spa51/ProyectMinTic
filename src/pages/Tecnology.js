import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';


const products=[{
    id:1,
    name:"Televisor Samsung",
    url:"https://falabella.scene7.com/is/image/FalabellaCO/19339388_1?wid=800&hei=800&qlt=70",
    description:"Televisor Samsung 58 Pulgadas Crystal UHD 4K Ultra HD Smart TV",
    price:"$ 2.299.900 (Precio final)",

},
{
    id:2,
    name:"Nintendo Switch",
    url:"https://falabella.scene7.com/is/image/FalabellaCO/4193205?wid=240&hei=240&qlt=70",
    description:"Consola Nintendo Switch 1.1",
    price:"$ 1.699.900 (Precio final)",

},{
    id:3,
    name:"Televisor Samsung",
    url:"https://falabella.scene7.com/is/image/FalabellaCO/19339388_1?wid=800&hei=800&qlt=70",
    description:"Televisor Samsung 58 Pulgadas Crystal UHD 4K Ultra HD Smart TV",
    price:"$ 2.299.900 (Precio final)",

},
{
    id:4,
    name:"Nintendo Switch",
    url:"https://falabella.scene7.com/is/image/FalabellaCO/4193205?wid=240&hei=240&qlt=70",
    description:"Consola Nintendo Switch 1.1",
    price:"$ 1.699.900 (Precio final)",

}]

const Tecnology = () => {
    return (
        <div className="">

            <Row xs={1} md={4} className="g-4">
            {products.map(item => (
                <Col>
                    <ProductCard key={item.id} item={item}/>
                </Col>
            ))}
            </Row>
           
        </div>
    );
};

export default Tecnology;