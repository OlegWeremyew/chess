import { NUMBER_ONE, NUMBER_TWO, ROW_LENGTH, ZERO_VALUE } from '../constants';
import { Nullable } from '../types/Nullable';

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

  public hightLightCells(selectedCell: Nullable<Cell>): void {
    for (let i = 0; i < this.cells.length; i += 1) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j += 1) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  private addPawns(): void {
    for (let i = 0; i < 8; i += 1) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings(): void {
    new King(Colors.BLACK, this.getCell(3, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addQueens(): void {
    new Queen(Colors.BLACK, this.getCell(4, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addBishops(): void {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private addKnights(): void {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  private addRooks(): void {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  public addFigures(): void {
    this.addPawns();
    this.addKings();
    this.addQueens();
    this.addKnights();
    this.addBishops();
    this.addRooks();
  }
}
