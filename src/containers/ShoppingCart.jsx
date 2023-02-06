import React from "react";
import '@styles/ShoppingCart.scss';
import flechita from '@icons/flechita.svg';
import ShoppingCartItem from "../components/ShoppingCartItem";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-title">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="shopping-cart-content">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <div className="shopping-cart-info">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;