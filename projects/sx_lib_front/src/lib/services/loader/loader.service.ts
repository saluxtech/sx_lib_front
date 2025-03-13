import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loaderState$ = this.loaderSubject.asObservable();

  
  constructor() {
    console.log('LoaderService instance created');
  }

  showLoader() {
    this.loaderSubject.next(true);
    console.log('showLoader');
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }
}