import React, { useEffect, useState } from 'react';
import './App.css';

import { BoardComponent } from '../components/BoardComponent/BoardComponent';
import { Board } from '../models/Board';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';
import { Nullable } from '../types/Nullable';
import { ReturnComponentType } from '../types/ReturnComponentType';

const App = (): ReturnComponentType => {
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer] = useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer] = useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Nullable<Player>>(null);

  const restart = (): void => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  const swapPlayer = (): void => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
};

export default App;
