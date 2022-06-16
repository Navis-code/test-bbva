import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // TODO: implement with storage
  isAuthenticated(): boolean {
    return false;
  }
}
