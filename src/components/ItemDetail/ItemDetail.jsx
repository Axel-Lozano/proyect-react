import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    
    const onAdd = (quantity) => {
        console.log(quantity)
    }

    return (
        <>
            <article>
                <h1>{item.title}</h1>
                <div className="card-detail">
                    <div className="card-detail-left">
                        <img src={item.img} alt={item.title} className="img"/>
                    </div>
                    <div className="card-detail-right">
                        <p>{item.description}</p>
                        <p className='price'>${item.price}</p>
                        <p>Stock: {item.stock}</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ItemDetail;
