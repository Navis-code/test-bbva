import { TestBed } from '@angular/core/testing';
import { UserI } from '../../models/User';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get null if not users users', () => {
    const users = service.getAllUsers();
    expect(users).toBeNull();
  });

  it('should return users if exist on localstorage', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    const usersExpected: UserI[] = [user];
    service.setNewUser(user);
    const usersFromStorage = service.getAllUsers();
    expect(usersFromStorage).toEqual(usersExpected);
  });

  it('should return user if exist on localstorage', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    const userExpected: UserI = user;
    service.setNewUser(user);
    const userFromStorage = service.getUser(user.name);
    expect(userFromStorage).toEqual(userExpected);
  });

  it('should return undefined if user not exist on localstorage', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    service.setNewUser(user);
    const userFromStorage = service.getUser('Jane');
    expect(userFromStorage).toBeUndefined();
  });

  it('should update user if exist on localstorage', () => {
    const user: UserI = {
      name: 'John',
      gameStats: {
        win: 0,
        draw: 0,
        lose: 0,
      },
    };
    service.setNewUser(user);
    user.gameStats.win = 20;
    service.updateUser(user);
    const userFromStorage = service.getUser(user.name);
    expect(userFromStorage?.gameStats.win).toEqual(20);
  });
});
