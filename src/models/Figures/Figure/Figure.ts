import logo from '../../../assets/black-king.png';
import { Nullable } from '../../../types';
import { Cell } from '../../Cell';
import { Colors } from '../../enum';

import { FigureNames } from './enum';

export class Figure {
  color: Colors;

  logo: Nullable<typeof logo>;

  cell: Cell;

  name: FigureNames;

  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color || target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }

  moveFigure(target: Cell): void {}
}
