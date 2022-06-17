import { TestBed } from '@angular/core/testing';
import { ResultsEnum } from '../../../models/Game';
import { UserI } from '../../../models/User';
import { GAMES } from '../config/game.config';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  Object.defineProperty(window, 'navigator', {
    value: jest.fn().mockImplementation((query) => ({
      vibrate: jest.fn(),
    })),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return different number than machinepreviousselection', () => {
    const gameIndex0 = { beats: ['Scissors'], name: 'Rock', visual: '✊' };
    service.machinePreviousSelection = 0;
    expect(service['machineSelection']().name).not.toBe(gameIndex0.name);
  });

  it('should change game', () => {
    const game = GAMES[1];
    service.changeGame(game);
    expect(service.game).toBe(game);
  });

  it('should return WIN when ✊ vs ✌', () => {
    const selection1 = { beats: ['Scissors'], name: 'Rock', visual: '✊' };
    const selection2 = { beats: ['Paper'], name: 'Scissors', visual: '✌' };

    expect(service['result'](selection1, selection2)).toBe(ResultsEnum.WIN);
  });
  it('should return LOSE when ✌ vs ✊', () => {
    const selection1 = { beats: ['Paper'], name: 'Scissors', visual: '✌' };
    const selection2 = { beats: ['Scissors'], name: 'Rock', visual: '✊' };

    expect(service['result'](selection1, selection2)).toBe(ResultsEnum.LOSE);
  });
  it('should return DRAW when ✌ vs ✌', () => {
    const selection1 = { beats: ['Paper'], name: 'Scissors', visual: '✌' };
    const selection2 = { beats: ['Paper'], name: 'Scissors', visual: '✌' };

    expect(service['result'](selection1, selection2)).toBe(ResultsEnum.DRAW);
  });

  it('should update user stats', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    const result = ResultsEnum.WIN;
    const updatedUser = service['updateGameStats'](user, result);
    expect(updatedUser.gameStats.win).toBe(1);
  });

  it('should return gameMatch as promise when play', () => {
    const selection = { beats: ['Scissors'], name: 'Rock', visual: '✊' };
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    const gameMatch = service['play'](selection, user);
    expect(gameMatch).toBeTruthy();
  });

  it('should update gamestats from user', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    const result = ResultsEnum.WIN;
    const updatedUser = service['updateGameStats'](user, result);
    expect(updatedUser.gameStats.win).toBe(1);
  });
});
