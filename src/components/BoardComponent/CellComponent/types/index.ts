import { Cell } from '../../../../models';

export interface CellProps {
  cell: Cell;
  selected: boolean;
  clickOnCell: (cell: Cell) => void;
}
