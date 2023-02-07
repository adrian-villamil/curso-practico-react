import React, { useRef } from "react";
import '@styles/Login.scss';
import logo_yard_sale from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <form action="" className="login-form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" id="email" placeholder="platzi@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Log in" className="primary-button login-button" onClick={handleSubmit} />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;