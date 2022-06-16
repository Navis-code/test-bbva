import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  saveUser(user: UserI): void {
    //TOOD: connect with game
    user.gameStats.win++;
    this.authService.saveCurrentUser(user);
  }
}
