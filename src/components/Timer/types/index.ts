import { Player } from '../../../models';
import { Nullable } from '../../../types';

export interface TimerProps {
  currentPlayer: Nullable<Player>;
  restart: () => void;
}
