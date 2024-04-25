import React from 'react';
import ProductDetail from './ProductDetail';
import './ProductList.css';
import Product1 from './images/iPhone13.jpg';
import Product2 from './images/SamsungGalaxyS22.jpg';
import Product3 from './images/SonyPlaystation5.jpg';
import Product4 from './images/CanonEosR6.png';
import Product5 from './images/MacBookPro.png';
import Product6 from './images/NintendoSwitch.jpg';
import Product7 from './images/DJIMavicAir2S.jpg';
import Product8 from './images/BoseQuietComfort45.jpg';
import Product9 from './images/Samsung65.jpg';
import Product10 from './images/AppleWatchSeries7.jpg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'iPhone 13', description: 'Apple iPhone 13 - 128GB', price: 799, image: Product1, },
    { id: 2, name: 'Samsung Galaxy S22', description: 'Samsung Galaxy S22 - 256GB', price: 899, image: Product2, },
    { id: 3, name: 'Sony PlayStation 5', description: 'Sony PlayStation 5 - 1TB SSD', price: 499, image: Product3, },
    { id: 4, name: 'Canon EOS R6', description: 'Canon EOS R6 Mirrorless Camera', price: 2499, image: Product4, },
    { id: 5, name: 'MacBook Pro', description: 'Apple MacBook Pro - 16-inch, M1 Max', price: 2399, image: Product5, },
    { id: 6, name: 'Nintendo Switch', description: 'Nintendo Switch Console - Neon Red/Neon Blue', price: 299, image: Product6, },
    { id: 7, name: 'DJI Mavic Air 2', description: 'DJI Mavic Air 2 Drone with 4K Camera', price: 799, image: Product7, },
    { id: 8, name: 'Bose QuietComfort 45', description: 'Bose QuietComfort 45 Wireless Noise Cancelling Headphones', price: 329, image: Product8, },
    { id: 9, name: 'Samsung 65" QLED TV', description: 'Samsung 65" QLED 4K UHD Smart TV', price: 1499, image: Product9, },
    { id: 10, name: 'Apple Watch Series 7', description: 'Apple Watch Series 7 - GPS + Cellular, 45mm', price: 499, image: Product10, } 
  ];

  return (
    <div className='productList-body'>
      <div className="product-list-container">
        {products.map((product) => (
          <ProductDetail key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
