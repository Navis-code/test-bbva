import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameComponent } from '../modules/game/game.component';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'game', component: GameComponent },
        ]),
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to game if is authenticated', () => {
    const routerSpy = jest.spyOn(guard['router'], 'navigate');
    const authSpy = jest.spyOn(guard['authService'], 'isAuthenticated');
    const authUser = guard['authService'].initUser('testUser');
    guard.canActivate();
    expect(routerSpy).toHaveBeenCalledWith(['/game']);
  });
  it('should navigate to home if is not authenticated', () => {
    const routerSpy = jest.spyOn(guard['router'], 'navigate');
    const authSpy = jest.spyOn(guard['authService'], 'isAuthenticated');
    authSpy.mockReturnValue(false);
    guard.canActivate();
    expect(routerSpy).toHaveBeenCalledWith(['']);
  });
});
