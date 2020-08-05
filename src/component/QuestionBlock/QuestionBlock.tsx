import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import imgInformation from '../../image/logo.jpg';
import { QuestionBlockProps } from './question.model';
import './QuestionBlock.css';

export const QuestionBlock = (props: QuestionBlockProps) => {
  const { dataQuestion, isDisabled } = props;

  let playlist = [{ src: `${dataQuestion?.audio}` }];

  return (
    <div className="question-block">
      {true && (
        <img
          src={isDisabled ? `${dataQuestion?.image}` : `${imgInformation}`}
          alt="Изображение исполнителя"
          className="block-image"
        />
      )}
      <div className="question-block__body">
        <span>{isDisabled ? dataQuestion?.name : '* * * * *'}</span>
        <div className="body__line"></div>
        <AudioPlayer audioFiles={playlist} playerWidth="80%" fontSize="1.5rem" iconSize="2.5rem" />
      </div>
    </div>
  );
};
