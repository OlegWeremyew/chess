import React, { FC, useEffect, useState } from 'react';

import { Cell } from '../../models';
import { Nullable, ReturnComponentType } from '../../types';

import { CellComponent } from './CellComponent';
import { BoardBlock } from './components';
import { BoardProps } from './types';

export const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}): ReturnComponentType => {
  const [selectedCell, setSelectedCell] = useState<Nullable<Cell>>(null);

  const updateBoard = (): void => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const highlightCells = (): void => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const clickOnCell = (cell: Cell): void => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>Current player: {currentPlayer?.color}</h3>
      <BoardBlock>
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map(cell => (
              <CellComponent
                clickOnCell={clickOnCell}
                key={cell.id}
                cell={cell}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
            ))}
          </React.Fragment>
        ))}
      </BoardBlock>
    </div>
  );
};
