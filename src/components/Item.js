import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Item = ({item})=> {
    
    return (
        <div className="item">
            <img src={item.pictureURL} alt={item.name} height="370px" width="370px"></img>
            <p className="itemP">{item.name} </p>
            <p className="itemP">${item.price}</p>
            <div className="itemPa">
                <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
            </div>
        </div>
    )
}

export default Item;