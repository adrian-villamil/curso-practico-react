import React from "react";
import '@styles/ShoppingCartItem.scss';
import icon_close from '@icons/icon_close.png';

const ShoppingCartItem = ({ product }) => {
  return (
    <div className="shopping-cart-item">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price},00</p>
      <img src={icon_close} alt="close" />
    </div>
  );
};

export default ShoppingCartItem;