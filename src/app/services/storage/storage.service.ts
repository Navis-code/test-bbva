import { Injectable } from '@angular/core';
import { UserI } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly usersItem = 'users';
  constructor() {}

  getAllUsers(): UserI[] | null {
    const users = localStorage.getItem(this.usersItem);
    if (users) {
      return JSON.parse(users);
    }
    return null;
  }

  getUser(userName: string): UserI | undefined | null {
    const users = this.getAllUsers();
    if (users) {
      const user = users.find(
        (user: UserI) => user.name.toLowerCase() === userName.toLowerCase()
      );
      return user;
    }
    return null;
  }

  setNewUser(user: UserI): void {
    const users = this.getAllUsers();
    if (users) {
      users.push(user);
      localStorage.setItem(this.usersItem, JSON.stringify(users));
    }
  }
}
