import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    
    const onAdd = (quantity) => {
        console.log(quantity)
    }

    return (
        <>

            <div className="card mb-3" style={{ maxWidth: '1000px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} alt={item.title} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">Precio: ${item.price}</p>
                            <p className="card-text">Stock: {item.stock}</p>
                        </div>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
