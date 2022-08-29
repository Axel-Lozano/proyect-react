import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    function onAdd(count) {
        console.log(`se han seleccionado ${count} productos`)
    }

    return (
        <div>
            <h1>{props.saludo}</h1>
            <ItemCount stock={5} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer;
