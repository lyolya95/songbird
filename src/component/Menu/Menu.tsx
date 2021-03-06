import React from 'react';
import './Menu.css';
import { MenuProps } from './Menu.model';

export const Menu = ({ category }: MenuProps) => {
  return (
    <div className="menu">
      <ul>
        {category.map((i, idx: number) => (
          <li key={idx} className={i.activeClass}>
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
