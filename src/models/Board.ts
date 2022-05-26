import { NUMBER_ONE, NUMBER_TWO, ROW_LENGTH, ZERO_VALUE } from '../constants';

import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './Figures/Bishop';
import { King } from './Figures/King';
import { Knight } from './Figures/Knight';
import { Pawn } from './Figures/Pawn';
import { Queen } from './Figures/Queen';
import { Rook } from './Figures/Rook';

export class Board {
  cells: Cell[][] = [];

  public initCells(): void {
    for (let i = ZERO_VALUE; i < ROW_LENGTH; i += NUMBER_ONE) {
      const row: Cell[] = [];
      for (let j = ZERO_VALUE; j < ROW_LENGTH; j += NUMBER_ONE) {
        if ((i + j) % NUMBER_TWO !== ZERO_VALUE) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // black cells
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // white cells
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  private addPawns(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    for (let i = 0; i < 8; i += 1) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new King(Colors.BLACK, this.getCell(3, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addQuuens(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Queen(Colors.BLACK, this.getCell(4, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addBishops(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private addKnights(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Knight(Colors.BLACK, this.getCell(1, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Knight(Colors.BLACK, this.getCell(6, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Knight(Colors.WHITE, this.getCell(1, 7));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  private addRooks(): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Rook(Colors.BLACK, this.getCell(0, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Rook(Colors.BLACK, this.getCell(7, 0));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Rook(Colors.WHITE, this.getCell(0, 7));
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,no-new
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  public addFigures(): void {
    this.addPawns();
    this.addKings();
    this.addQuuens();
    this.addKnights();
    this.addBishops();
    this.addRooks();
  }
}
