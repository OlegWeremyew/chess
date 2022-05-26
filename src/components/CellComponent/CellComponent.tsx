import React from 'react';
import '../../App/App.css';

import { Cell } from '../../models/Cell';
import { ReturnComponentType } from '../../types/ReturnComponentType';

interface CellProps {
  cell: Cell;
}

const CellComponent: React.FC<CellProps> = ({ cell }): ReturnComponentType => (
  <div className={['cell', cell.color].join(' ')}>
    {cell.figure?.logo && <img src={cell.figure.logo} alt="figure" />}
  </div>
);

export default CellComponent;
