import React, { FC } from 'react';
import './ResetButton.css';

interface ResetButtonProps {
  handleResetApp: () => void;
  count: number;
}

export const ResetButton: FC<ResetButtonProps> = ({ handleResetApp, count }) => {
  return (
    <div className="reset-button">
      <div className="reset-title1">Поздравляем!</div>
      <div className="reset-title">
        Вы набрали {count} из 30 возможных баллов! Вы можете попробовать пройти игру снова
      </div>
      <button onClick={handleResetApp}>Начать игру</button>
    </div>
  );
};
