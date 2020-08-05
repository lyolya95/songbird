import React, { useEffect, useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Header } from './component/Header';
import { InformationBlock } from './component/InformationBlock';
import { ListItem } from './component/ListItem';
import { Menu } from './component/Menu';
import { QuestionBlock } from './component/QuestionBlock';
import { DataQuestionState } from './model/app.model';
import { data } from './store/data';
import { category } from './store/menu';

export const App = () => {
  const [dataQuestion, setDataQuestion] = useState<DataQuestionState | null>(null);

  useEffect(() => {
    let idx = [1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)];
    if (data) {
      setDataQuestion(data[0][idx]);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu category={category} />
      <QuestionBlock dataQuestion={dataQuestion} />
      <div className="content mb2 d-flex">
        <div className="content_item1 col-md-6">
          <ListItem />
        </div>
        <div className="content_item2 col-md-6">
          <InformationBlock />
        </div>
      </div>
      <div className="button-next">
        <button>Следующий уровень</button>
      </div>
    </div>
  );
};
