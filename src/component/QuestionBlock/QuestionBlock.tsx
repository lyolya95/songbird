import React, { createRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import imgInformation from '../../image/logo.png';
import { QuestionBlockProps } from './question.model';
import './QuestionBlock.css';

export const QuestionBlock = ({ dataComponent, isDisabled }: QuestionBlockProps) => {
  const player = createRef<any>();
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
          autoPlay={false}
          ref={player}
          src={!isDisabled ? `${dataComponent?.audio}` : ``}
          onListen={() => {
            isDisabled && player?.current?.audio && player.current.audio.current.pause();
          }}
          autoPlayAfterSrcChange={false}
        />
      </div>
    </div>
  );
};
