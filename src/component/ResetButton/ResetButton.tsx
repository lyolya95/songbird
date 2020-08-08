import React, { FC } from 'react';
import './ResetButton.css';

interface ResetButtonProps {
  handleResetApp: () => void;
}

export const ResetButton: FC<ResetButtonProps> = ({ handleResetApp }) => {
  return (
    <div className="reset-button">
      <div className="reset-title">Не расстраивайтесь, вы можете попробовать пройти игру снова</div>
      <button onClick={handleResetApp}>Начать игру</button>
    </div>
  );
};
