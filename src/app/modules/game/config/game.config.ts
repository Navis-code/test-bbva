import { GameConfigI, GameI } from '../../../models/Game';

export const ROCK_PAPER_SCISSOR: GameConfigI[] = [
  {
    name: 'Rock',
    beats: ['Scissors'],
    visual: '✊',
  },
  {
    name: 'Paper',
    beats: ['Rock'],
    visual: '✋',
  },
  {
    name: 'Scissors',
    beats: ['Paper'],
    visual: '✌',
  },
];
export const ROCK_PAPER_SCISSOR_LAZOR_SPOCK: GameConfigI[] = [
  {
    name: 'Rock',
    beats: ['Scissors', 'Lazor'],
    visual: '✊',
  },
  {
    name: 'Paper',
    beats: ['Rock', 'Spock'],
    visual: '✋',
  },
  {
    name: 'Scissors',
    beats: ['Paper', 'Lazor'],
    visual: '✌',
  },
  {
    name: 'Lazor',
    beats: ['Spock', 'Paper'],
    visual: '🤏',
  },
  {
    name: 'Spock',
    beats: ['Rock', 'Scissors'],
    visual: '🖖',
  },
];

export const GAMES: GameI[] = [
  {
    name: 'Rock Paper Scissor',
    gameConfig: ROCK_PAPER_SCISSOR,
  },
  {
    name: 'Rock Paper Scissor Lazor Spock',
    gameConfig: ROCK_PAPER_SCISSOR_LAZOR_SPOCK,
  },
];
