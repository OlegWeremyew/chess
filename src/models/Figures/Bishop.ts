// @ts-ignore
import blackLogo from '../../assets/black-bishop.png';
// @ts-ignore
import whiteLogo from '../../assets/white-bishop.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

import { Figure, FigureName } from './Figure';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.BISHOP;
  }
}
