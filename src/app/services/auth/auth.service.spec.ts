import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameComponent } from '../../modules/game/game.component';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'game', component: GameComponent },
        ]),
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud init user and navigate to game', () => {
    const userName = 'testUser';
    const routerSpy = jest.spyOn(service['router'], 'navigate');
    service.initUser(userName);
    expect(service.isAuthenticated()).toBeTruthy();
    expect(routerSpy).toHaveBeenCalledWith(['/game']);
  });

  it('shoud create new user and save it to storage', () => {
    const userName = 'testUser';
    const storageSpy = jest.spyOn(service['storage'], 'setNewUser');
    service['createNewUser'](userName);
    expect(storageSpy).toHaveBeenCalledWith({
      name: userName,
      gameStats: { win: 0, lose: 0, draw: 0 },
    });
  });

  it('return true if user is authenticated', () => {
    const userName = 'testUser';
    service.initUser(userName);
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
