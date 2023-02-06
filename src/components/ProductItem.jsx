import React, { useState } from "react";
import '@styles/ProductItem.scss';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-item-info">
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={bt_add_to_cart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;