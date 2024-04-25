import React from 'react';
import CartItem from './CartItem';
import './CartItem.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='cart-body'>
      <h1>Cart Summary</h1>
      <div className='carted-product-list-container'>
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} removeFromCart={() => removeFromCart(index)} />
        ))}
      </div>
      <h2><b>Total Price: ₱{totalPrice}</b></h2>
    </div>
  );
};

export default Cart;