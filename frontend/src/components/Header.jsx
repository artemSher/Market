import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Marketplace</Link>
      </div>
      <nav className="header__nav">
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/login">Войти</Link>
      </nav>
    </header>
  );
}

export default Header;
