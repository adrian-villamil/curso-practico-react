import React from "react";
import '@styles/NewPassword.scss';
import logo_yard_sale from '@logos/logo_yard_sale.svg';

const Login = () => {
  return (
    <div className="new-password-container">
      <div className="new-password-form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="new-password-form">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">Password</label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Confirm" className="primary-button confirm-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;