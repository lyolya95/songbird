import React from 'react';
import './App.css';
import { Header } from './component/Header/Header';
import { Menu } from './component/Menu/Menu';
import { category } from './store/menu';

export const App = (props: any) => {
  return (
    <div className="App">
      <Header />
      <Menu category={category} />
    </div>
  );
};
