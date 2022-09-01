import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productList}) => {

    return (
        <>
            {
                productList.map(item => <Item key={item.id} img={item.img} title={item.title} price={item.price}/>)
            }
        </>
    );
}

export default ItemList;
