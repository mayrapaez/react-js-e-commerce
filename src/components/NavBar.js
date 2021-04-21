import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import CartWidget from './CartWidget';
import { contexto } from '../CartContext';

const NavBar = () => {
    const {cart} = useContext(contexto)

    return (
        <nav>
            <NavLink to="/" exact id="brand">Coder Tienda</NavLink>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><NavLink to="/category/4CmZhL0Mk7Cq2RpoIFBj">Alacena</NavLink></li>
                    <li className="categorias"><NavLink to="/category/hzCAF0ClPPKqZNqw3qqH">Productos a Granel</NavLink></li>
                    <li className="categorias"><NavLink to="/category/jCwywDqKRtYORLIuFRSr">Frescos y Congelados</NavLink></li>
                    <li className="categorias"><NavLink to="/category/z3gj0ryaRhRffsr1QQAI">Bebidas e Infusiones</NavLink></li>
                </ul>
                {cart.length > 0 ? <CartWidget/> : null}
            </div>
        </nav>
    )
}

export default NavBar;