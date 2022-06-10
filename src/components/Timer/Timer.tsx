import React, { FC, useEffect, useRef, useState } from 'react';

import { Colors } from '../../models/enum';
import { Nullable, ReturnComponentType } from '../../types';

import { TimerProps } from './types';

export const Timer: FC<TimerProps> = ({
  currentPlayer,
  restart,
}): ReturnComponentType => {
  const [blackTime, setBlackTime] = useState<number>(300);
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const timer = useRef<Nullable<ReturnType<typeof setInterval>>>(null);

  const decrementBlackTimer = (): void => {
    setBlackTime(prev => prev - 1);
  };

  const decrementWhiteTimer = (): void => {
    setWhiteTime(prev => prev - 1);
  };

  const startTimer = (): void => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  };

  const handleRestart = (): void => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  return (
    <div>
      <div>
        <button type="button" onClick={handleRestart}>
          Restart game
        </button>
      </div>
      <h2>Black - {blackTime}</h2>
      <h2>White - {whiteTime}</h2>
    </div>
  );
};
