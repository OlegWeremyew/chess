// @ts-ignore
import blackLogo from '../../assets/black-queen.png';
// @ts-ignore
import whiteLogo from '../../assets/white-queen.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

import { Figure, FigureName } from './Figure';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}