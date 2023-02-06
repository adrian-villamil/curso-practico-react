import React from "react";
import '@styles/ShoppingCartItem.scss';
import icon_close from '@icons/icon_close.png';

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart-item">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src={icon_close} alt="close" />
    </div>
  );
};

export default ShoppingCartItem;