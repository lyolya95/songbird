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
    if (data) {
      setDataQuestion(data[0][0]);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu category={category} />
      <QuestionBlock dataQuestion={dataQuestion} />
      <div className="row mb2">
        <div className="col-md-6">
          <ListItem />
        </div>
        <div className="col-md-6">
          <InformationBlock />
        </div>
      </div>
      <div className="button-next">
        <button>Следующий уровень</button>
      </div>
    </div>
  );
};
