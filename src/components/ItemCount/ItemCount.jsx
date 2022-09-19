import "./ItemCount.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1); 

    function add() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function subStract() {
        if (count > 1 ) {
            setCount(count - 1)
        }
    }


    return (
        <>
            <div className="">
                <div>
                    <div>
                        <p>Cantidad: {count} <br />
                        (Cantidad disponible: {stock})</p>
                        <button className='btn btn-danger' onClick={subStract}>-</button> 
                        <button className='btn btn-success' onClick={add}>+</button>
                    </div>
                    <div>
                        <button className='btn btn-success' onClick={() => onAdd(count) }><Link to={"/cart"} className='nav-link'>Confirmar</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
