import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
            setItem(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id]);

    return (
        <>
            <ItemDetail item={item}/>
        </>
    );
}

export default ItemDetailContainer;
