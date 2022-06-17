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

export enum ResultsEnum {
  DRAW = 'draw',
  WIN = 'win',
  LOSE = 'lose',
}
