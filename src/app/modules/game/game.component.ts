import { Component, OnInit } from '@angular/core';
import { GameConfigI, GameMatchI } from '../../models/Game';
import { UserI } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  showGames = false;
  matchResult: GameMatchI | null = null;
  loading = false;
  constructor(
    public authService: AuthService,
    public gameService: GameService
  ) {}

  ngOnInit(): void {}

  async playerSelection(selection: GameConfigI, user: UserI): Promise<void> {
    this.loading = true;
    this.matchResult = await this.gameService.play(selection, user);
    this.loading = false;
    this.authService.saveCurrentUser(this.matchResult.updatedUser);
  }

  changeToOtherGame(game: GameConfigI[]): void {
    this.gameService.changeGame(game);
    this.showGames = !this.showGames;
  }
}
