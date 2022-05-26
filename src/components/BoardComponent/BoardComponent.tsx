import React from 'react';

import '../../App/App.css';

import { Board } from '../../models/Board';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import CellComponent from '../CellComponent/CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: React.FC<BoardProps> = ({
  board,
  setBoard,
}): ReturnComponentType => {
  const x = (): void => {
    setBoard(new Board());
  };

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {row.map(cell => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </React.Fragment>
      ))}
      <button type="button" onClick={x}>
        s
      </button>
    </div>
  );
};
