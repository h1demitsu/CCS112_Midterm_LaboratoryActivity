import React from 'react';

const ProductDetail = ({ product, addToCart }) => {
  const { id, name, description, price, image} = product;

  return (
    <div className="product-card">
      <div className="product-details">
        <img src={image}/>
        <p className="product-name">{name}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">₱{price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
