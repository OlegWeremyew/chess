import React, { FC } from 'react';

import { Cell } from '../../models';
import { ReturnComponentType } from '../../types';

interface CellProps {
  cell: Cell;
  selected: boolean;
  clickOnCell: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({
  cell,
  selected,
  clickOnCell,
}): ReturnComponentType => (
  <div
    className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
    onClick={() => clickOnCell(cell)}
    style={{ background: cell.available && cell.figure ? 'green' : '' }}
  >
    {cell.available && !cell.figure && <div className="available" />}
    {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
  </div>
);
