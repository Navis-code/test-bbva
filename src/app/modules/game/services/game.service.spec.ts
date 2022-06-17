import { TestBed } from '@angular/core/testing';

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
});
