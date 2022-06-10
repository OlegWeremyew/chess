import { Board, Player } from '../../../models';
import { Nullable } from '../../../types';

export interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Nullable<Player>;
  swapPlayer: () => void;
}
