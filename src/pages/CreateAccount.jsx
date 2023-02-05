import React from "react";
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className="create-account-form-container">
        <h1 className="title">My account</h1>
        <form action="" className="create-account-form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" name="name" id="name" placeholder="Adrian Villamil" className="input input-name" />
            <label htmlFor="email" className="label">Email address</label>
            <input type="email" name="email" id="email" placeholder="platzi@example.com" className="input input-email" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" id="password" placeholder="*********" className="input input-password" />
          </div>
          <input type="submit" value="Create" className="primary-button create-account-button" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;