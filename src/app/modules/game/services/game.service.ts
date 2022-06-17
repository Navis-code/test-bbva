import { Injectable } from '@angular/core';
import {
  GameConfigI,
  GameI,
  GameMatchI,
  ResultsEnum,
} from '../../../models/Game';
import { UserI } from '../../../models/User';
import { wait } from '../../../utils/wait';
import { GAMES, ROCK_PAPER_SCISSOR } from '../config/game.config';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game: GameConfigI[];
  gamesAvailable: GameI[];
  machinePreviousSelection!: number;

  constructor() {
    this.game = ROCK_PAPER_SCISSOR;
    this.gamesAvailable = GAMES;
  }

  async play(selection: GameConfigI, user: UserI): Promise<GameMatchI> {
    const machineSelection = this.machineSelection();
    const result = this.result(selection, machineSelection);

    await wait(1000);

    const updatedUser = this.updateGameStats(user, result);
    if (result === ResultsEnum.LOSE) {
      window.navigator.vibrate(500);
    }
    return {
      result,
      updatedUser,
      player1Selection: selection,
      player2Selection: machineSelection,
    };
  }

  changeGame(game: GameConfigI[]): void {
    this.game = game;
  }

  private machineSelection(): GameConfigI {
    const machineSelectionIndex = Math.floor(Math.random() * this.game.length);
    if (this.machinePreviousSelection === machineSelectionIndex) {
      return this.machineSelection();
    }
    this.machinePreviousSelection = machineSelectionIndex;
    const machineSelection = this.game[machineSelectionIndex];
    return machineSelection;
  }

  private result(
    selection1: GameConfigI,
    selection2: GameConfigI
  ): ResultsEnum {
    if (selection1.name === selection2.name) {
      return ResultsEnum.DRAW;
    }
    if (selection1.beats.find((item) => item === selection2.name)) {
      return ResultsEnum.WIN;
    }
    return ResultsEnum.LOSE;
  }

  private updateGameStats(user: UserI, result: ResultsEnum): UserI {
    user.gameStats[result]++;
    return user;
  }
}
