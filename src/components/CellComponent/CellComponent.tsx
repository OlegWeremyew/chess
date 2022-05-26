import React from 'react';
import '../../App/App.css';

import { Cell } from '../../models/Cell';
import { ReturnComponentType } from '../../types/ReturnComponentType';

interface CellProps {
  cell: Cell;
  selected: boolean;
  clickOnCell: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({
  cell,
  selected,
  clickOnCell,
}): ReturnComponentType => {
  const style = ['cell', cell.color, selected ? 'selected' : ''].join(' ');

  return (
    <div
      className={style}
      onClick={() => clickOnCell(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
    </div>
  );
};

export default CellComponent;
