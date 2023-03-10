import React, { useContext } from "react";
import '@styles/ProductItem.scss';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-item-info">
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={bt_add_to_cart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;