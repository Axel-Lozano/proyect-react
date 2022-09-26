import React,{useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import db from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore'


const ItemListContainer = () => {

    
    const [productList, setProductList] = useState([]);

    const getData = async () => {
        try {
            const  document = collection(db,"Items")
            const col = await getDocs(document)
            console.log("col.docs", col.docs)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setProductList(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            <ItemList productList={productList}/>
        </>
    );
}

export default ItemListContainer;
