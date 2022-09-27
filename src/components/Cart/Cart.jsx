import React, { useContext } from 'react';
import { contexto } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {

    const { carrito, removeItem, totalPrice} = useContext(contexto);

    return carrito.length > 0 ?
        (

            <div className='container items bg-light'>
                {
                    carrito.map(item => (

                        <div className='item'>
                            <div className="card mb-3" style={{ maxWidth: '700px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.img} alt={item.title} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">Precio: ${item.price}</p>
                                            <p className="card-text">Cantidad: {item.quantity}</p>
                                            <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        /*
                        <div className='col-md-4 mt-4 d-flex justify-content-center'>
                            <div className="card mb-3" style={{ width: '18rem' }}>
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Precio: ${item.price}</p>
                                    <p className="card-text">Cantidad: {item.quantity}</p>
                                    <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                        */
                    ))
                }
                <div>
                    <h4>Precio Total: {totalPrice()}</h4>
                    <Link to='/checkout'>
                        <button className='btn btn-secondary'>Finalizar compra</button>
                    </Link>
                </div>
            </div>
        ) : (

            <div className='container bg-light element'>
                    <div className='text'> 
                        <h2>No hay elementos en el carrtio</h2>
                    </div>
                    <div className='boton'>
                            <Link to={"/"}><button className="btn btn-secondary">Seguir comprando</button></Link>
                    </div>
            </div>

        )
}

export default Cart;
