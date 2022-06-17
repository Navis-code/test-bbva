import { TestBed } from '@angular/core/testing';
import { ResultsEnum } from '../../../models/Game';
import { GAMES } from '../config/game.config';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

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
});
