import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageEnum } from '../../enums/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtSubject = new BehaviorSubject<string | null>(this.loadToken());
  public jwt$ = this.jwtSubject.asObservable();

  constructor() {}

  setToken(token: string | null): void {
    if (token) {
      sessionStorage.setItem(StorageEnum.JWT_TOKEN, token);
      this.jwtSubject.next(token);
    } else {
      sessionStorage.removeItem(StorageEnum.JWT_TOKEN);
      this.jwtSubject.next(null);
    }
  }

  getToken(): string | null {
    return this.jwtSubject.value || this.loadToken();
  }

  getUserRoles(): string[] {
    const token = this.getToken();
    if (!token) {
      return [];
    }

    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const parsedPayload = JSON.parse(decodedPayload);
    return parsedPayload.roles;
  }

  private loadToken(): string | null {
    return sessionStorage.getItem(StorageEnum.JWT_TOKEN);
  }
}