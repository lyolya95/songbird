import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import './InformationBlock.css';
import { InformationBlockProps } from './informationBlock.model';

export const InformationBlock = (props: InformationBlockProps) => {
  const { dataQuestion } = props;

  let playlist = [{ src: `${dataQuestion?.audio}` }];

  return (
    <div className="information-block">
      <div className="block1 d-flex">
        <img src={dataQuestion?.image} alt="Изображение исполнителя" />
        <div>
          <h3>{dataQuestion?.name}</h3>
          <AudioPlayer audioFiles={playlist} iconSize="1rem" />
        </div>
      </div>
      <div className="block2">{dataQuestion?.description}</div>
    </div>
  );
};
