import React,{useEffect, useState} from 'react';
import { products } from '../../mock/products';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()
    console.log(id)
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id == id)),2000)
    })

    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    },[])

    return (
        <>
            <ItemDetail item={item}/>
        </>
    );
}

export default ItemDetailContainer;
