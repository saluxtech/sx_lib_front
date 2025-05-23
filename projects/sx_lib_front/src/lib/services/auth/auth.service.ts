import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { StorageEnum } from '../../enums/storage.enum';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../../utils';
import { Environment } from '../enviroment/environment.service';
import { Usuario } from '../../models/usuario/usuario.interface';
import { Login } from '../../models/login/login.interface';
import { UsuarioResponse } from 'sx_lib_front';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtSubject = new BehaviorSubject<string | null>(this.loadToken());
  public jwt$ = this.jwtSubject.asObservable();
  private userSubject = new BehaviorSubject<Usuario>(this.loadUser());
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<UsuarioResponse> {
    return this.http
      .post<UsuarioResponse>(
        `${Environment.apiUrl}/${Environment.version}/auth/login`,
        login
      )
      .pipe(catchError(Utils.handleErrorMessage));
  }

  logout(): void {
    this.setToken(null);
    sessionStorage.removeItem(StorageEnum.USUARIO);
  }

  setUser(user: Usuario): void {
    sessionStorage.setItem(StorageEnum.USUARIO, JSON.stringify(user));
    this.userSubject.next(user);
  }

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

  getUser(): Usuario {
    return this.userSubject.value;
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

  getCodHostipal(): number {
    return this.userSubject.value?.cd_hospital || 0;
  }

  isAuthenticaded(): boolean {
    return !!this.getToken();
  }

  private loadToken(): string | null {
    return sessionStorage.getItem(StorageEnum.JWT_TOKEN);
  }

  private loadUser(): Usuario {
    try {
      const user = sessionStorage.getItem(StorageEnum.USUARIO);
      return user ? JSON.parse(user) : ({} as Usuario);
    } catch (error) {
      console.error('Erro ao carregar o usuário do sessionStorage:', error);
      return {} as Usuario;
    }
  }
}
