import headerLogo from '../images/logo__mesto.svg';
import React from 'react';
export default function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип Место"/>
    </header>
  )
}