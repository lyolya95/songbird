import React from 'react';
import logo from '../../image/logo.jpg';
import './Header.css';

interface HeaderProps {
  count: number;
}

export const Header = (props: HeaderProps) => {
  const { count } = props;

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <span>Счёт игры: {count}</span>
    </div>
  );
};
