import { UserI } from './User';

export interface GameStatsI {
  win: number;
  lose: number;
  draw: number;
}
export interface GameI {
  name: string;
  gameConfig: GameConfigI[];
}
export interface GameConfigI {
  name: string;
  beats: string[];
  visual: string;
}

export interface GameMatchI {
  result: ResultsEnum;
  updatedUser: UserI;
  player1Selection: GameConfigI;
  player2Selection: GameConfigI;
}

export enum ResultsEnum {
  DRAW = 'draw',
  WIN = 'win',
  LOSE = 'lose',
}
