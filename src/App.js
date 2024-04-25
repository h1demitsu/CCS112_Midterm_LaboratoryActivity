import React, { useState } from 'react';
import ProductList from './ProductList';
import Header from './Header';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const toggleCartSummary = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header showCartSummary={toggleCartSummary} />
      <ProductList addToCart={addToCart} />
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
    </div>
  );
};

export default App;
