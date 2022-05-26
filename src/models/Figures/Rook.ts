// @ts-ignore
import blackLogo from '../../assets/black-rook.png';
// @ts-ignore
import whiteLogo from '../../assets/white-rook.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

import { Figure, FigureName } from './Figure';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}