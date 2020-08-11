import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import imgInformation from '../../image/logo.png';
import { QuestionBlockProps } from './question.model';
import './QuestionBlock.css';

export const QuestionBlock = (props: QuestionBlockProps) => {
  const { dataComponent, isDisabled } = props;
  const playlist = [{ src: `${dataComponent?.audio}` }];

  dataComponent?.name && !isDisabled && console.log('Правильный ответ:  ' + dataComponent.name);

  return (
    <div className="question-block">
      <img
        src={isDisabled ? `${dataComponent?.image}` : `${imgInformation}`}
        alt="Изображение исполнителя"
        className="block-image"
      />
      <div className="question-block__body">
        <span>{isDisabled ? dataComponent?.name : '* * * * *'}</span>
        <div className="body__line"></div>
        <AudioPlayer
          audioFiles={!isDisabled ? playlist : [{ src: `` }]}
          playerWidth="80%"
          fontSize="1.5rem"
          iconSize="2.5rem"
          color="white"
          play={false}
        />
      </div>
    </div>
  );
};
