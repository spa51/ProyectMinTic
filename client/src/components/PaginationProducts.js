import React, { useContext,  useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { GlobalContext } from './ProductsProvider';

const PaginationProducts = ({productSize}) => {
    const [itemSelected, setItemSelected]=useState(1);
    const [state,updateContext]=useContext(GlobalContext);
    
    const items=[];
    const numberPages=Math.floor(productSize/8)<=0?1:Math.floor(productSize/8);
    const handleColorPagonation=(e)=>{
        setItemSelected(parseInt(e.target.text));
        updateContext(prevstate=>({
            ...prevstate,
            paginationTechnology:e.target.text,
        }));
        window.scrollTo(0, 0)
    }
    for (let number = 1; number <= numberPages; number++) {
        items.push(
            <Pagination.Item onClick={handleColorPagonation} key={number} active={number===itemSelected}>
                {number}
            </Pagination.Item>,
        )
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <Pagination>{items}</Pagination>

      </div>
    );
};

export default PaginationProducts;