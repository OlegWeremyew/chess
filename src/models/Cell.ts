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
}
