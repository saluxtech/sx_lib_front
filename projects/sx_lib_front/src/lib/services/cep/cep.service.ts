import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICep } from '../../models/cep/cep.interface';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private http = inject(HttpClient);

  getCep(cep: string): Observable<ICep> {
    return this.http.get<ICep>(`https://viacep.com.br/ws/${cep}/json`);
  }
}