import React from 'react';
import imgInformation from '../../image/logo.jpg';
import './InformationBlock.css';

export const InformationBlock = () => {
  return (
    <div className="information-block">
      <div className="block1 d-flex">
        <img src={imgInformation} alt="Изображение исполнителя" />
        <div>
          <h2>1</h2>
          <h3>2</h3>
          {/* <CardMedia image="#" /> */}
        </div>
      </div>
      <div className="block2">Opisanie</div>
    </div>
  );
};
