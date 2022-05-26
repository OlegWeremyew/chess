// @ts-ignore
import logo from '../../assets/black-bishop.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureName {
  FIGURE = '',
  KING = 'KING',
  KNIGHT = 'KNIGHT',
  PAWN = 'PAWN',
  QUEEN = 'QUEEN',
  BISHOP = 'BISHOP',
  ROOK = 'ROOK',
}

export class Figure {
  color: Colors;

  logo: typeof logo | null;

  cell: Cell;

  name: FigureName;

  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    return target.figure?.name !== FigureName.KING;
  }

  // eslint-disable-next-line class-methods-use-this
  moveFigure(target: Cell): void {
    console.log(target);
  }
}
