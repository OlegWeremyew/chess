import { Nullable } from '../types/Nullable';

import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './Figures/Figure';

export class Cell {
  readonly x: number;

  readonly y: number;

  readonly color: Colors;

  figure: Nullable<Figure>;

  board: Board;

  available: boolean; // can you do the move or not?

  id: number; // for react keys

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Nullable<Figure>,
  ) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    return this.figure === null;
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.min(this.y, target.y);

    for (let y = min + 1; y < max; y += 1) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.min(this.x, target.x);

    for (let x = min + 1; x < max; x += 1) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX) return false;
    const diagonalY = this.y < target.y ? 1 : -1;
    const diagonalX = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i += 1) {
      if (!this.board.getCell(this.x + diagonalX * i, this.y + diagonalY * i).isEmpty())
        return false;
    }
    return true;
  }

  setFigure(figure: Figure): void {
    this.figure = figure;
    this.figure.cell = this;
  }

  moveFigure(target: Cell): void {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}
