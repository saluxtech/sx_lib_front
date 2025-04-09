import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loaderState$ = this.loaderSubject.asObservable();

  private loaderButtonSubject = new BehaviorSubject<boolean>(false);
  loaderButtonState$ = this.loaderButtonSubject.asObservable();

  constructor() {
  }

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  showLoaderButton(){
    this.loaderButtonSubject.next(true);
  }

  hideLoaderButton(){
    this.loaderButtonSubject.next(false);
  }
}