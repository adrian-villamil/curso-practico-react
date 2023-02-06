import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import NewPassword from '../pages/NewPassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-orders' element={<Orders />} />
          <Route path='/order' element={<OrderDetail />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;