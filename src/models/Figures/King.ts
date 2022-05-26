// @ts-ignore
import blackLogo from '../../assets/black-king.png';
// @ts-ignore
import whiteLogo from '../../assets/white-king.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

import { Figure, FigureName } from './Figure';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.KING;
  }
}
