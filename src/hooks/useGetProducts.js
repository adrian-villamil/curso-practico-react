import axios from "axios";
import { useEffect, useState } from "react";


const useGetProducts = (API) => {
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

  return products;
};

export default useGetProducts;