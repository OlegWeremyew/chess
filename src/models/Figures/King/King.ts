import blackLogo from '../../../assets/black-king.png';
import whiteLogo from '../../../assets/white-king.png';
import { Cell } from '../../Cell';
import { Colors } from '../../enum';
import { Figure } from '../Figure';
import { FigureNames } from '../Figure/enum';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    const direction: number = 1;
    if (!super.canMove(target)) return false;

    return (
      (target.y === this.cell.y + direction ||
        target.y === this.cell.y ||
        target.y === this.cell.y - direction) &&
      (target.x === this.cell.x + direction ||
        target.x === this.cell.x ||
        target.x === this.cell.x - direction)
    );
  }
}
