import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderButtons } from '../../enums/header-buttons.enum';

@Injectable({
  providedIn: 'root'
})
export class HeaderButtonsService {
  private subject = new Subject<HeaderButtons | null>();
  public headerButtons$ = this.subject.asObservable();

  constructor() { }

  emit(button: HeaderButtons) {
    this.subject.next(button);
  }

  clear() {
    this.subject.next(null);
  }
}
