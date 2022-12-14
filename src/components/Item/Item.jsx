import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({title,price,img,id}) => {

    return (
        <div className='col-md-4 d-flex justify-content-center'>
            <div className="card mb-3 mt-3" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Precio: ${price}</p>
                    <Link to={"/item/" + id} className='nav-link'><button className="btn btn-primary">Ver Productos</button></Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Item;
