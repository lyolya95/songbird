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
  /** Данные для рандомного вопроса */
  const [dataQuestion, setDataQuestion] = useState<DataQuestionState | null>(null);

  /** Отображение кнопки для перехода на след уровень
   *  Отображение блока с вопросом при правильном ответе
   */
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  /** Id для сравнения ответов с вопросом*/
  const [idxFromQuestion, setIdxFromQuestion] = useState<number>(0);

  useEffect(() => {
    let idx: number = [1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)];
    if (data) {
      setDataQuestion(data[0][idx]);
    }
  }, []);

  useEffect(() => {
    if (dataQuestion?.id === idxFromQuestion) {
      setIsDisabled(true);
    }
  }, [dataQuestion, idxFromQuestion]);

  const handleClickListItem = (e) => {
    const value = e.target.innerHTML;
    const itemIndex = data[0].filter((i) => i.name === value);
    setIdxFromQuestion(itemIndex[0].id);
  };

  return (
    <div className="App">
      <Header />
      <Menu category={category} />
      <QuestionBlock dataQuestion={dataQuestion} isDisabled={isDisabled} />
      <div className="content mb2 d-flex">
        <div className="content_item1 col-md-6">
          <ListItem data={data[0]} handleClickListItem={handleClickListItem} />
        </div>
        <div className="content_item2 col-md-6">
          <InformationBlock />
        </div>
      </div>
      <div className="button-next">
        <button disabled={!isDisabled}>Следующий уровень</button>
      </div>
    </div>
  );
};
