import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()
    const [load, setLoad] = useState(true);


    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
            setItem(result)
            setLoad()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id]);

    return (
        <>
            {load ? <Spinner/> : <ItemDetail item={item}/>
}
        </>
    );
}

export default ItemDetailContainer;
