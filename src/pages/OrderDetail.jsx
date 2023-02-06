import React from "react";
import '@styles/OrderDetail.scss';
import ShoppingCartItem from "../components/ShoppingCartItem";

const OrderDetail = () => {
  return (
    <div className="my-order-detail">
      <div className="my-order-detail-container">
        <h1 className="title">My order</h1>
        <div className="my-order-detail-content">
          <div className="order-info">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;