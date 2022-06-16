import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '../../models/User';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: UserI;
  constructor(private storage: StorageService, private router: Router) {}

  initUser(userName: string): void {
    const user = this.getUserFromStorage(userName);
    this.currentUser = user ?? this.createNewUser(userName);
    this.router.navigate(['/game']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  private createNewUser(userName: string): UserI {
    const newUser = { name: userName, gameStats: { win: 0, lose: 0 } };
    this.storage.setNewUser(newUser);
    return newUser;
  }

  private getUserFromStorage(userName: string): UserI | undefined | null {
    return this.storage.getUser(userName);
  }
}
