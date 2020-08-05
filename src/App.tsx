import React from 'react';
import './App.css';
import './bootstrap.min.css';
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
      <div className="content">
        <ListItem />
        <InformationBlock />
      </div>
      <div className="button-next">
        <button>Следующий уровень</button>
      </div>
    </div>
  );
};
