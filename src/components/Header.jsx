import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import DesktopMenu from '@components/DesktopMenu';
import ShoppingCart from '../containers/ShoppingCart';
import AppContext from '../context/AppContext';

const Header = () => {
  const [toggleDestopMenu, setToggleDesktopMenu] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleDestopMenu = () => {
    setToggleDesktopMenu(!toggleDestopMenu);
  };

  const handleToggleShoppingCart = () => {
    setToggleShoppingCart(!toggleShoppingCart);
  };

  return (
    <nav>
      <img src={icon_menu} alt="menu" className="header-menu-icon" />
      <div className="navbar-left">
        <img src={logo_yard_sale} alt="logo" className="header-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleDestopMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleShoppingCart}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleDestopMenu && <DesktopMenu />}
      {toggleShoppingCart && <ShoppingCart />}
    </nav>
  );
}

export default Header;