import React, { useState, useContext } from 'react';
import { contexto } from '../../context/CartContext';
import {addDoc, collection} from 'firebase/firestore';
import db from "../../services/firebase";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {carrito, totalPrice, clear} = useContext(contexto)
    const [orderId, setOrderId] = useState();

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col,data)
            setOrderId(order.id)
            clear()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer, 
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = carrito.map(e => {return { id: e.id, title: e.title, price: e.price, cantidad: e.quantity}})
        const dia = new Date()
        const total = totalPrice()
        const data = {buyer, items, dia, total}
        console.log("data", data)
        generateOrder(data)
    }

    return (
        <div>
        {!orderId ? 
            (<form  className="container form" onSubmit={handleSubmit}>
                <div className="row">
                    <h2>Finializando compra</h2>
                    <div className="col" >
                        <div className="m-4">
                            <label  className="form-label">Nombre:</label>
                            <input  className="form-control" name="Nombre" type="text" placeholder="Escribe tu nombre" value={Nombre} onChange={handleInputChange} required/>
                        </div>

                        <div className="m-4">
                            <label className="form-label">Email:</label>
                            <input className="form-control" name="Email" type="email" placeholder="Escribe tu email" value={Email} onChange={handleInputChange} required/>
                        </div>

                        <div className="m-4">
                            <label className="form-label">Numero de Telefono:</label>
                            <input className="form-control" name="Telefono" type="text" placeholder="Escribe tu numero" value={Telefono} onChange={handleInputChange} required/>
                        </div>

                        <div className="m-4">
                            <input className="btn btn-primary" type="submit" Value="Finalizar Compra" />
                        </div>
                    </div>
                </div>
            </form>)
            :
            (<h2>Su orden de compra es: {orderId}</h2>)
        }

        </div>
    );
}

export default Checkout;
