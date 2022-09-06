import React,{useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => {

    function onAdd(count) {
        console.log(`se han seleccionado ${count} productos`)
    }
    
    const [productList, setProductList] = useState([]);

    const getProducts = () => new Promise((resolve,reject) => {
        setTimeout(() => resolve(products), 2000)
    })

    useEffect(() => {
        getProducts()
        .then(products => setProductList(products))
        .catch(error => console.error(error))

    }, []);

    console.log(productList)


    return (
        <>
            <h1>{props.saludo}</h1>
            <ItemCount stock={5} onAdd={onAdd}/>
            <ItemList productList={productList}/>
        </>
    );
}

export default ItemListContainer;
