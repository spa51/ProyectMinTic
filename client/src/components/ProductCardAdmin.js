import React  from 'react';
import { Card } from 'react-bootstrap';

const ProductCardAdmin= (props) => {
    return (
        <div key = {props.item.id}>
           <Card 
            style={{ width: '14rem',height:'500px', margin:'10px' }}
           >
                <Card.Img  variant="top" src={props.item.url} />
                <Card.Body>
                    <Card.Title >{props.item.name}</Card.Title>
                    <Card.Text >
                    ID: {props.item.id}
                    </Card.Text>
                    <Card.Text>
                    {props.item.price}
                    </Card.Text>
                    <Card.Text >
                    {props.item.description}
                    </Card.Text>
                   
                    
                </Card.Body>
            </Card> 
        </div>
    );
};



export default ProductCardAdmin;