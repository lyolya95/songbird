import React from 'react';
import logo from '../../image/logo.jpg';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <span>Счёт игры: </span>
    </div>
  );
};
