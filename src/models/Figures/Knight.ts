// @ts-ignore
import blackLogo from '../../assets/black-knight.png';
// @ts-ignore
import whiteLogo from '../../assets/white-knight.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

import { Figure, FigureName } from './Figure';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const diagonalX: number = Math.abs(this.cell.x - target.x);
    const diagonalY: number = Math.abs(this.cell.y - target.y);
    return (diagonalX === 1 && diagonalY === 2) || (diagonalX === 2 && diagonalY === 1);
  }
}
