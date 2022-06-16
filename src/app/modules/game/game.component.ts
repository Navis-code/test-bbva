import { Component, OnInit } from '@angular/core';
import { GameConfigI, GameI } from '../../models/Game';
import { UserI } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';
import { GAMES, ROCK_PAPER_SCISSOR } from './config/game.config';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game: GameConfigI[];
  gamesAvailable!: GameI[];
  constructor(public authService: AuthService) {
    this.game = ROCK_PAPER_SCISSOR;
  }

  ngOnInit(): void {
    this.gamesAvailable = GAMES;
  }

  userSelect(selection: GameConfigI) {
    //TODO Refactor to service
    console.log('userSelect', selection);
    const machineSelection = this.machineSelect();
    console.log(this.whoWins(selection, machineSelection));
  }

  whoWins(selection1: GameConfigI, selection2: GameConfigI): string {
    if (selection1.name === selection2.name) {
      return 'Draw';
    }
    if (selection1.beats.find((item) => item === selection2.name)) {
      return 'You win';
    }
    return 'You lose';
  }
  machineSelect() {
    const machineSelectionIndex = Math.floor(Math.random() * this.game.length);
    const machineSelection = this.game[machineSelectionIndex];
    console.log(machineSelection);
    return machineSelection;
  }

  saveUser = (user: UserI): void => {
    //TODO: connect with game
    user.gameStats.win++;
    this.authService.saveCurrentUser(user);
  };

  loadGame(game: GameConfigI[]) {
    this.game = game;
  }
}
