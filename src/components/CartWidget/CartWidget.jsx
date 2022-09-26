import './CartWidget.css';
import React,{useContext} from 'react';
import {contexto} from '../../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidget = () => {

    const {carrito,cartCounter} = useContext(contexto);


    return carrito.length > 0 ? (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-secondary"><img className='icon' src="../img/iconCart.png"/><span>{cartCounter()}</span></button>
        </Link>
        
    )
    :
    (
    <></>
    );
        
    
}


export default CartWidget;
