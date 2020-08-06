import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import './InformationBlock.css';
import { InformationBlockProps } from './informationBlock.model';

export const InformationBlock = (props: InformationBlockProps) => {
  const { dataComponent } = props;
  const playlist = [{ src: `${dataComponent?.audio}` }];

  return (
    <div className="information-block">
      <div className="block1 d-flex">
        <img src={dataComponent?.image} alt="Изображение исполнителя" />
        <div>
          <h3>{dataComponent?.name}</h3>
          <AudioPlayer audioFiles={playlist} iconSize="1rem" />
        </div>
      </div>
      <div className="block2">{dataComponent?.description}</div>
    </div>
  );
};
