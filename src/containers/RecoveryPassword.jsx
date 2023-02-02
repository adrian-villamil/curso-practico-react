import React from "react";
import '@styles/RecoveryPassword.scss';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_email from '@icons/email.svg';

const RecoveryPassword = () => {
  return (
    <div className="recovery-password-container">
      <div className="recovery-password-form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <img src={icon_email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default RecoveryPassword;