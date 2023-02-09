import React from 'react';
import '@styles/ProductList.scss';
import ProductItem from "../components/ProductItem";
import useGetProducts from '../hooks/useGetProducts';
import { v4 as uuidv4 } from 'uuid';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={uuidv4()} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;