import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './styles.css';
import ItemList from './ItemList';
import {getFirestore} from '../firebase'

const ItemListContainer = ({greeting}) => {
    const [items,setItems] = useState([]);
    const {category} = useParams();

    useEffect(()=>{
        setItems([])
        const baseDeDatos = getFirestore()
        const itemsCollection = baseDeDatos.collection("productos")

        if(category){
            const query = baseDeDatos.collection("productos").where("category","==",category)
            query.get()
            .then((resultado)=>{                
                resultado.docs.forEach((doc)=>{
                    const item = {  category: doc.category,
                                    ...doc.data()    }
                    setItems(items => [...items, item])                    
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }else {
            const query = itemsCollection.get()
            query
            .then((resultado)=>{
                resultado.docs.forEach((doc)=>{
                    const item = {  category: doc.category,
                                    ...doc.data()    }
                    setItems(items => [...items, item])
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }, [category])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </>
    )
} 

export default ItemListContainer;