import React, { useCallback, useEffect, useState } from 'react';
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
  const [dataComponent, setDataComponent] = useState<DataQuestionState | null>(null);
  /** Отображение кнопки для перехода на след уровень
   *  Отображение блока с вопросом при правильном ответе
   */
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  /** Id для сравнения ответов с вопросом*/
  const [idItem, setIdItem] = useState<number>(0);
  /** Изначальный id для передачи данных */
  const [idDataComponent, setIdDataComponent] = useState<number>(0);
  /** Очки */
  const [count, setCount] = useState<number>(0);
  const [maxCountComponent, setMaxCountComponent] = useState<number>(5);

  useEffect(() => {
    if (data && idDataComponent < 6) {
      const idxRandom = [1, 2, 3, 4, 5][Math.floor(Math.random() * [1, 2, 3, 4, 5].length)];
      setDataComponent(data[idDataComponent][idxRandom]);
    }
  }, [idDataComponent]);

  useEffect(() => {
    if (dataComponent?.id === idItem) {
      setIsDisabled(true);
    }
  }, [dataComponent, idItem]);

  /** Нажатие по вариантам ответов */
  const handleClickListItem = useCallback(
    (e) => {
      const value = e.target.innerHTML;
      /** Получим индекс нажатого элемента */
      const itemIndex = data[idDataComponent].filter((i) => i.name === value)[0]?.id;
      /** условие правильного неправильного ответа, для счетчика */
      if (!isDisabled) {
        itemIndex === dataComponent?.id ? setCount(maxCountComponent) : setMaxCountComponent(maxCountComponent - 1);
      }

      /** обновим индекс  */
      setIdItem(itemIndex);
    },
    [dataComponent, idDataComponent, maxCountComponent, isDisabled]
  );

  const handleNextLvl = useCallback(() => {
    if (idDataComponent < 6) {
      setIdDataComponent(idDataComponent + 1);
    }
    setIsDisabled(false);
    setIdItem(0);
    setMaxCountComponent(count + 5);
    selectMenu(idDataComponent);
  }, [count, idDataComponent]);

  const selectMenu = (index) => {
    let idx = index;
    category.filter((item, i) => i === idx).forEach((i) => (i.activeClass = ''));
    category.filter((item, i) => i === idx + 1).forEach((i) => (i.activeClass = 'active-menu'));
    return category;
  };

  return (
    <div className="App">
      {idDataComponent === 6 ? (
        count === 30 ? (
          <div>Вы набрали максимальное количество</div>
        ) : (
          <div>Мое почтение</div>
        )
      ) : (
        <>
          <Header count={count} />
          <Menu category={category} />
          <QuestionBlock dataComponent={dataComponent} isDisabled={isDisabled} />
          <div className="content mb2 d-flex">
            <div className="content_item1 col-md-5">
              <ListItem
                data={data[idDataComponent]}
                handleClickListItem={handleClickListItem}
                isDisabled={isDisabled}
              />
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
