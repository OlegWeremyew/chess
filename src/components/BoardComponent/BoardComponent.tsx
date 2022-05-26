import React, { useEffect, useState } from 'react';

import '../../App/App.css';

import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import { Nullable } from '../../types/Nullable';
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

  const [selectedCell, setSelectedCell] = useState<Nullable<Cell>>(null);

  const updateBoard = (): void => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const clickOnCell = (cell: Cell): void => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell);
    }
  };

  const hightLightCellsHandler = (): void => {
    board.hightLightCells(selectedCell);
    updateBoard();
  };

  useEffect(() => {
    hightLightCellsHandler();
  }, [selectedCell]);

  return (
    <div className="board">
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
      <button type="button" onClick={x}>
        s
      </button>
    </div>
  );
};
