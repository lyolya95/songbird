import React from 'react';
import './Menu.css';
import { MenuProps } from './Menu.model';

export const Menu = ({ category }: MenuProps) => {
  return (
    <div>
      <ul>
        {category.map((i: string, idx: number) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
};
