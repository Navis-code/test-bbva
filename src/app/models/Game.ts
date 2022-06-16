export interface GameStatsI {
  win: number;
  lose: number;
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
