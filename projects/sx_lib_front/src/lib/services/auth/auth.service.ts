import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtSubject = new BehaviorSubject<string | null>(this.loadToken());

  constructor() {}

  private loadToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  setToken(token: string | null): void {
    if (token) {
      sessionStorage.setItem('jwtToken', token);
      this.jwtSubject.next(token);
    } else {
      sessionStorage.removeItem('jwtToken');
      this.jwtSubject.next(null);
    }
  }

  getToken(): string | null {
    return this.jwtSubject.value || this.loadToken();
  }
}