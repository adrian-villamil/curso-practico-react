import React from "react";
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="my-account-form-container">
        <h1 className="title">My account</h1>
        <form action="" className="my-account-form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Adrian Villamil</p>
            <label htmlFor="email" className="label">Email address</label>
            <p className="value">adrianvillamil@example.com</p>
            <label htmlFor="password" className="label">Password</label>
            <p className="value">*********</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button edit-button" />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;