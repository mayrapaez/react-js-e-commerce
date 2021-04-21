import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './CartContext';
import Checkout from './components/Checkout';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer greeting="Bienvenidos a la tienda"/>
            </Route>
            <Route path="/category/:category">
              <ItemListContainer greeting="Bienvenidos a la tienda"/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
