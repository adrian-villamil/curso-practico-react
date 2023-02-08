import React, { useContext } from "react";
import '@styles/ShoppingCart.scss';
import flechita from '@icons/flechita.svg';
import ShoppingCartItem from "../components/ShoppingCartItem";
import AppContext from "../context/AppContext";

const ShoppingCart = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-title">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="shopping-cart-content">
        {state.cart.map(product => (
          <ShoppingCartItem key={`shoppingCartItem-${product.id}`} product={product} />
        ))}
        <div className="shopping-cart-info">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()},00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;