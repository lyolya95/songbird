import { Button } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { InformationBlock } from './component/InformationBlock';
import { ListItem } from './component/ListItem';
import { Menu } from './component/Menu';
import { QuestionBlock } from './component/QuestionBlock';
import { category } from './store/menu';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu category={category} />
      <QuestionBlock />
      <ListItem />
      <InformationBlock />
      <Button color="primary" />
    </div>
  );
};
