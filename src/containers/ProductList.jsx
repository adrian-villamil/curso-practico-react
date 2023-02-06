import React, { useEffect, useState } from "react";
import '@styles/ProductList.scss';
import ProductItem from "../components/ProductItem";
import axios from "axios";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(API);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <section className="main-container">
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;