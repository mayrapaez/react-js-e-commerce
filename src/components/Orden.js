import React, {useState, useEffect} from 'react'
import {getFirestore} from '../firebase'
import { NavLink } from 'react-router-dom'

const Orden = (orden) => {
    console.log(orden)
    const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    useEffect(()=>{
        const baseDeDatos = getFirestore()
        const orders = baseDeDatos.collection("orden")
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    },[ordenId, orden])

    
    return (
        <div className="orden">{ordenId ?
            <>
                <p>Orden de compra número: {ordenId}</p>                    
                <p>Gracias por su compra!</p>
                <button><NavLink to="/">Ir a la tienda</NavLink></button>
            </>
            :
            <><p>Generando su orden</p></>
        }</div>
    )
}

export default Orden
