import React from 'react';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';

const Home = () => {
  return ( 
    <div className='Home'>
      <Header />
      <ProductList />
    </div>
   );
}
 
export default Home;