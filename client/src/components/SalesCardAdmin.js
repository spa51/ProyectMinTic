import React  from 'react';
import { Card } from 'react-bootstrap';

const SalesCardAdmin= (props) => {
    return (
        <div key = {props.item.idVenta}>
           <Card 
            style={{ margin:'10px' }}
           >
                <Card.Img  variant="top" src={props.item.url} />
                <Card.Body>
                    <Card.Title >{props.item.name}</Card.Title>
                    <Card.Text >
                    ID: {props.item.idVenta}
                    </Card.Text>
                    <Card.Text>
                    C.c: {props.item.cc}
                    </Card.Text>
                    <Card.Text >
                    {props.item.description}
                    </Card.Text>
                   
                    
                </Card.Body>
            </Card> 
        </div>
    );
};



export default SalesCardAdmin;