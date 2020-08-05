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
  const [isDisabledQuestion, setIsDisabledQuestion] = useState<boolean>(false);
  /** Id для сравнения ответов с вопросом*/
  const [idResponce, setIdResponce] = useState<number>(0);
  /** Изначальный id для передачи данных */
  const [initialId, setInitialId] = useState<number>(0);

  useEffect(() => {
    let idx: number = [1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)];
    if (data) {
      setDataQuestion(data[initialId][idx]);
    }
  }, [initialId]);

  useEffect(() => {
    if (dataQuestion?.id === idResponce) {
      setIsDisabledQuestion(true);
    }
  }, [dataQuestion, idResponce]);

  const handleClickListItem = (e) => {
    const value = e.target.innerHTML;
    const itemIndex = data[initialId].filter((i) => i.name === value);
    setIdResponce(itemIndex[0]?.id);
  };

  const handleNextLvl = () => {
    if (initialId < 6) {
      setInitialId(initialId + 1);
    }
    setIsDisabledQuestion(false);
    setIdResponce(0);
  };

  return (
    <div className="App">
      <Header />
      <Menu category={category} />
      <QuestionBlock dataQuestion={dataQuestion} isDisabled={isDisabledQuestion} />
      <div className="content mb2 d-flex">
        <div className="content_item1 col-md-6">
          <ListItem data={data[initialId]} handleClickListItem={handleClickListItem} />
        </div>
        <div className="content_item2 col-md-6">
          {idResponce === 0 ? (
            <div>Прослушайте песню и выберите правильный вариант ответа</div>
          ) : (
            <InformationBlock dataQuestion={data[initialId][idResponce - 1]} />
          )}
        </div>
      </div>
      <div className="button-next">
        <button disabled={!isDisabledQuestion} onClick={handleNextLvl}>
          Следующий уровень
        </button>
      </div>
    </div>
  );
};
