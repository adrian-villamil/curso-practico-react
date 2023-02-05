import React from "react";
import '@styles/ProductList.scss';
import ProductItem from "../components/ProductItem";

const ProductList = () => {
  return (
    <section className="main-container">
      <div className="product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;