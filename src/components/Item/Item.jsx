import React from 'react';
import './Item.css';

const Item = ({title,price,img}) => {


    return (
        <>
            <div className="col card mb-3" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">precio: {price}</p>
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </>
    );
}

export default Item;
