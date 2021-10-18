import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PaginationProducts from '../components/PaginationProducts';
import ProductCard from '../components/ProductCard';
import {  GlobalContext } from '../components/ProductsProvider';
import { products } from '../helpers/HomeProducts';

export default function House() {
    const [state,updateContext]=useContext(GlobalContext);
    const [portionProducts,setPortionProducts]=useState(products.slice(0,8));
    useEffect(()=>{
        setPortionProducts(products.slice(state.paginationTechnology*8-8,state.paginationTechnology*8))
    },[state.paginationTechnology])
    console.log(state.paginationTechnology*8-8,state.paginationTechnology*8)
    return (
        <div className="">

            <Row xs={1} md={4} className="g-4">
            {portionProducts.map(item => (
                <Col>
                    <ProductCard key={item.id} item={item}/>
                </Col>
            ))}
            </Row>
           <PaginationProducts productSize={products.length}/>
        </div>
    );
}
