import "./ItemCount.css";
import {useState} from 'react';

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

    function reset() {
        setCount(1)
    }

    return (
        <>
            <div className="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">Counter</div>
                <div className="card-body">
                    <div>
                        <p>Stock: {stock}</p>
                        <p>Cantidad: {count}</p>

                        <div>
                            <button className='btn btn-danger' onClick={subStract}>-</button>
                            <button className='btn btn-light' onClick={reset}>Reset</button>
                            <button className='btn btn-success' onClick={add}>+</button>
                        </div>
                        <div>
                            <button className='btn btn-success' onClick={() => onAdd(count) }>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
