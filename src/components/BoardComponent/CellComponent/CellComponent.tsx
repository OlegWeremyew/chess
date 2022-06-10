import React, { FC } from 'react';

import { ReturnComponentType } from '../../../types';

import { CellProps } from './types';

export const CellComponent: FC<CellProps> = ({
  cell,
  selected,
  clickOnCell,
}): ReturnComponentType => {
  const styleDiv = ['cell', cell.color, selected ? 'selected' : ''].join(' ');
  const additionalStyle = { background: cell.available && cell.figure ? 'green' : '' };

  return (
    <div className={styleDiv} onClick={() => clickOnCell(cell)} style={additionalStyle}>
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};
