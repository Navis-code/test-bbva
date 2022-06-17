import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameConfigI, GameI } from '../../models/Game';
import { UserI } from '../../models/User';
import { AuthService } from '../../services/auth/auth.service';
import { GAMES } from '../game/config/game.config';
import { ModalGameSelectionComponent } from './components/modal-game-selection/modal-game-selection.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    Object.defineProperty(window.navigator, 'vibrate', {});
    await TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [RouterTestingModule],
      declarations: [
        GameComponent,
        UserProfileComponent,
        ModalGameSelectionComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should play and save currentUser', async () => {
    const selection: GameConfigI = {
      name: 'Rock',
      beats: ['Scissors'],
      visual: '✊',
    };
    const user: UserI = {
      name: 'testUser',
      gameStats: {
        draw: 0,
        lose: 0,
        win: 0,
      },
    };
    const gameServiceSpy = jest.spyOn(component.gameService, 'play');
    const storageSpy = jest.spyOn(component.authService, 'saveCurrentUser');
    await component.playerSelection(selection, user);

    expect(gameServiceSpy).toHaveBeenCalled();
    expect(storageSpy).toHaveBeenCalled();
  });

  it('should change game', () => {
    const game: GameI = GAMES[1];
    component.changeToOtherGame(game);
    expect(component.gameService.game).toEqual(game);
  });
});
