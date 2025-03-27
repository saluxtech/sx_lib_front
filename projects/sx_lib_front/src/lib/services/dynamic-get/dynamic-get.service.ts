import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpResponseApi } from '../../models/http-request.model';
import { Utils } from '../../utils';
import { Environment } from '../enviroment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicGetService {
  private readonly currentIndex = 0;

  constructor(private http: HttpClient) {}

  dynamicGet<T>(resourceType: string, pageSize: number): Observable<T[]> {
    const endpoint = `${Environment.apiUrl}/${Environment.version}/${resourceType}/${this.currentIndex}/${pageSize}`;

    return this.http.get<HttpResponseApi<T[]>>(endpoint).pipe(
      map((data) => data.data[0]),
      catchError(Utils.handleErrorMessage)
    );
  }
}
