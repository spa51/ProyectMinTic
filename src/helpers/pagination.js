import { Pagination } from "react-bootstrap";

export const getPagination=(updateActiveItem,itemSelected)=>{
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item onClick={updateActiveItem} key={number} active={number===itemSelected}>
                {number}
            </Pagination.Item>,
        )
    }
    return items;
}
