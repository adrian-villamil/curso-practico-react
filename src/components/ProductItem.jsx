import React from "react";
import '@styles/ProductItem.scss';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div className="product-item">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product-item" />
      <div className="product-item-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={bt_add_to_cart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;