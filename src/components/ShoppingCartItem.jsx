import React, { useContext } from "react";
import '@styles/ShoppingCartItem.scss';
import icon_close from '@icons/icon_close.png';
import AppContext from "../context/AppContext";

const ShoppingCartItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="shopping-cart-item">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price},00</p>
      <img src={icon_close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default ShoppingCartItem;