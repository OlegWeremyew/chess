import React, { useEffect, useState } from 'react';

import './App.css';
import { BoardComponent, LostFigures, Timer } from '../components';
import { Board, Player } from '../models';
import { Colors } from '../models/enum';
import { Nullable, ReturnComponentType } from '../types';

import { AppContainer } from './components';

export const App = (): ReturnComponentType => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
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
    <AppContainer>
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="black figures" figures={board.lostBlackFigures} />
        <LostFigures title="white figures" figures={board.lostWhiteFigures} />
      </div>
    </AppContainer>
  );
};
