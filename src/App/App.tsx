import React, { useEffect, useState } from 'react';
import './App.css';

import { BoardComponent } from '../components/BoardComponent/BoardComponent';
import { Board } from '../models/Board';
import { ReturnComponentType } from '../types/ReturnComponentType';

const App = (): ReturnComponentType => {
  const [board, setBoard] = useState<Board>(new Board());

  const restart = (): void => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  useEffect(() => restart(), []);

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
