import { Component, OnInit } from '@angular/core';
import { GameConfigI } from '../../models/Game';
import { UserI } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public gameService: GameService
  ) {}

  ngOnInit(): void {}

  playerSelection(selection: GameConfigI, user: UserI): void {
    const { result, updatedUser, player1Selection, player2Selection } =
      this.gameService.play(selection, user);
    this.authService.saveCurrentUser(updatedUser);
    console.log({ result, updatedUser, player1Selection, player2Selection });
  }

  changeToOtherGame(game: GameConfigI[]): void {
    this.gameService.changeGame(game);
  }
}
