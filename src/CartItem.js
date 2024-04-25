import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
  const { name, price, image } = item;

  return (
      <div className='carted-product-card'>
        <div className='carted-product-details'>
          <img className='carted-product-image' src={image}/>
          <p className='carted-product-name'>{name}</p>
          <p className='carted-product-price'>₱{price}</p>
          <button onClick={removeFromCart}>Remove</button>
        </div>
      </div>
  );
};

export default CartItem;