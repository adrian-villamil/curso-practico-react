import React from "react";
import '@styles/OrderDetailItem.scss';

const OrderDetailItem = () => {
  return (
    <div className="order-detail-item">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default OrderDetailItem;