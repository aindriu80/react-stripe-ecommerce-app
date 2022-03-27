import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon';

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>NOMAD</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>SHOP</Link>
        </li>
      </ul>
      <ul>
        <CartIcon />
      </ul>
    </nav>
  );
};
export default Header
