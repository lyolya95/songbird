import React from 'react';
import imageSing from '../../image/logo.jpg';
import './QuestionBlock.css';

export const QuestionBlock = () => {
  return (
    <div className="question-block">
      <img src={imageSing} alt="Изображение исполнителя" />
      <div className="question-block__body">
        <span>*****</span>
        <div className="body__line"></div>
        <div></div>
      </div>
    </div>
  );
};
