import React, {useContext, useState} from 'react';
import './styles.css';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import { contexto } from '../CartContext';

const ItemDetail = ({item})=> {
    const [stock,setStock] = useState(10)
    const [initial,setInitial] = useState(1)
    const [cantItem, setCantItem] = useState()

    const {addItem} = useContext(contexto)

    const onAdd = ()=>{
        //Efectuar cambios en el stock
        handleStock()
        //Mandar la info del item y su cant al contexto
        addItem(item, initial)        
    }
    const handleStock = ()=> {
        if(stock>0) {
            setStock(stock-initial)
            setCantItem(initial)         
        }
    }    

    const onSumar = () => {
        if (initial<stock) {
            setInitial(initial+1)
        }                
    }
    const onRestar = () => {
        if (initial>0) {
            setInitial(initial-1)
        }      
    }

    return (
        <div id="itemDetail">
            <h4>{item.name}</h4>
            <img src={item.pictureURL} alt="Imagen de producto" height="270px" width="270px"></img>
            <p>Descripción: {item.detail}</p>
            <p>Precio: ${item.price}</p>            
            {cantItem ? 
                <>
                    <button className="detalle"><NavLink to="/cart">Terminar mi compra</NavLink></button>
                    <button className="detalle"><NavLink to="/">Seguir comprando</NavLink></button>
                </>
                : <ItemCount onAdd={onAdd} onSumar={onSumar} onRestar={onRestar} initial={initial}/>
            }
        </div>
    )
}

export default ItemDetail;