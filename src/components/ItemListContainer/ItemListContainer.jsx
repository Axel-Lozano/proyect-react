import React,{useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import db from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner';


const ItemListContainer = () => {

    
    const [productList, setProductList] = useState([]);
    const [load, setLoad] = useState(true);

    const getData = async () => {
        try {
            const  document = collection(db,"Items")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setProductList(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            {load ? <Spinner/> : <ItemList productList={productList}/> }
        </>
    );
}

export default ItemListContainer;
