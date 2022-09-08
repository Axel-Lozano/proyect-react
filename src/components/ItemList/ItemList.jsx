import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productList}) => {

    return (
        <div className='row container-fluid'>
            {
                productList.map(item => <Item key={item.id} img={item.img} title={item.title} price={item.price} id={item.id}/>)
            }
        </div>
    );
}

export default ItemList;
