import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './InformationBlock.css';
import { InformationBlockProps } from './informationBlock.model';

export const InformationBlock = ({ dataComponent }: InformationBlockProps) => {
  return (
    <div className="information-block">
      <div className="block1 d-flex">
        <img src={dataComponent?.image} alt="Изображение исполнителя" className="image" />
        <div className="block1-play">
          <h3>{dataComponent?.name}</h3>
          <AudioPlayer src={dataComponent?.audio} autoPlayAfterSrcChange={false} />
        </div>
      </div>
      <div className="block2">{dataComponent?.description}</div>
    </div>
  );
};
