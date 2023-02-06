import React from "react";
import '@styles/ProductDetail.scss';
import icon_close from '@icons/icon_close.png';
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={icon_close} alt="close" />
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;