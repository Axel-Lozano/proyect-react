import React,{useEffect, useState } from 'react';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => {

    
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
            <ItemList productList={productList}/>
        </>
    );
}

export default ItemListContainer;
