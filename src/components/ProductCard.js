import React  from 'react';
import { Card,Button } from 'react-bootstrap';

const ProductCard= (props) => {

    console.log('las propiedades',props);
    return (
        <div>
           <Card 
            style={{ width: '18rem',height:'500px', margin:'10px' }}
           >
                <Card.Img  variant="top" src={props.item.url} />
                <Card.Body>
                    <Card.Title >{props.item.name}</Card.Title>
                    <Card.Text >
                    {props.item.description}
                    </Card.Text>
                    <Card.Text>
                    {props.item.price}
                    </Card.Text>
                    <Button className="position-absolute bottom-0 start-10 mb-2" variant="primary">Agregar</Button>
                </Card.Body>
            </Card> 
        </div>
    );
};



export default ProductCard;