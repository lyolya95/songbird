import React, { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import './App.css';
import './bootstrap.min.css';
import { Header } from './component/Header';
import { InformationBlock } from './component/InformationBlock';
import { ListItem } from './component/ListItem';
import { MaxCount } from './component/MaxCount';
import { Menu } from './component/Menu';
import { QuestionBlock } from './component/QuestionBlock';
import { ResetButton } from './component/ResetButton';
import congratulationsMedia from './media/congratulations.wav';
import correctMedia from './media/correct.wav';
import wrongMedia from './media/wrong.wav';
import { DataQuestionState } from './model/app.model';
import { data } from './store/data';
import { category } from './store/menu';

export const App = () => {
  /** Данные для рандомного вопроса */
  const [dataComponent, setDataComponent] = useState<DataQuestionState | null>(null);
  /** Отображение блока с вопросом при правильном ответе */
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  /** Id для сравнения ответов с вопросом*/
  const [idItem, setIdItem] = useState<number>(0);
  /** Изначальный id для передачи данных */
  const [idDataComponent, setIdDataComponent] = useState<number>(0);
  /** Очки */
  const [count, setCount] = useState<number>(0);
  const [maxCountComponent, setMaxCountComponent] = useState<number>(5);
  const [wrong] = useSound(wrongMedia);
  const [correct] = useSound(correctMedia);
  const [congratulations] = useSound(congratulationsMedia);

  useEffect(() => {
    if (data && idDataComponent < 6) {
      const idxRandom = [1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)];
      setDataComponent(data[idDataComponent][idxRandom]);
    }
  }, [idDataComponent]);

  useEffect(() => {
    dataComponent?.id === idItem && setIsDisabled(true);
  }, [dataComponent, idItem]);

  /** Нажатие по вариантам ответов */
  const handleClickListItem = useCallback(
    (e) => {
      const value = e.target.innerHTML;
      /** Получим индекс нажатого элемента */
      const itemIndex = data[idDataComponent].filter((i) => i.name === value)[0]?.id;
      /** условие правильного неправильного ответа, для счетчика */
      if (!isDisabled) {
        itemIndex !== dataComponent?.id ? wrong() : correct();
        itemIndex === dataComponent?.id ? setCount(maxCountComponent) : setMaxCountComponent(maxCountComponent - 1);
      }
      setIdItem(itemIndex);
      /** индикация правильного ответа */
      if (!isDisabled) {
        data[idDataComponent]
          ?.filter((item, i) => i === itemIndex - 1)
          .map((i) => (i.activeClass = i.id === dataComponent?.id ? 'green' : 'red'));
      }
    },
    [dataComponent, idDataComponent, maxCountComponent, isDisabled, correct, wrong]
  );

  const handleNextLvl = useCallback(() => {
    data[idDataComponent].map((i) => (i.activeClass = ''));
    if (idDataComponent < 6) {
      setIdDataComponent(idDataComponent + 1);
    }
    count === 30 && congratulations();
    setIsDisabled(false);
    setIdItem(0);
    setMaxCountComponent(count + 5);
    /** индикация меню с категориями */
    category.filter((item, i) => i === idDataComponent).forEach((i) => (i.activeClass = ''));
    category.filter((item, i) => i === idDataComponent + 1).forEach((i) => (i.activeClass = 'active-menu'));
  }, [count, idDataComponent, congratulations]);

  const handleResetApp = () => {
    category.filter((i, id) => id === 0).map((i) => (i.activeClass = 'active-menu'));
    setIdDataComponent(0);
    setCount(0);
    setMaxCountComponent(5);
  };

  return (
    <div className="App">
      {idDataComponent === 6 ? (
        count === 30 ? (
          <MaxCount />
        ) : (
          <ResetButton handleResetApp={handleResetApp} count={count} />
        )
      ) : (
        <>
          <Header count={count} />
          <Menu category={category} />
          <QuestionBlock dataComponent={dataComponent} isDisabled={isDisabled} />
          <div className="content mb2 d-flex">
            <div className="content_item1 col-md-5">
              <ListItem data={data[idDataComponent]} handleClickListItem={handleClickListItem} />
            </div>
            <div className="content_item2 col-md-7">
              {idItem === 0 ? (
                <div className="information-block">Послушайте песню и выберите правильный вариант ответа</div>
              ) : (
                <InformationBlock dataComponent={data[idDataComponent][idItem - 1]} />
              )}
            </div>
          </div>
          <div className="button-next">
            <button disabled={!isDisabled} onClick={handleNextLvl} className={!isDisabled ? 'button' : ''}>
              Следующий уровень
            </button>
          </div>
        </>
      )}
    </div>
  );
};
