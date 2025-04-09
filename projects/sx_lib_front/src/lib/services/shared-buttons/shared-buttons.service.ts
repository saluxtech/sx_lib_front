import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderButton } from '../../models/header-button.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderButtonsService {
  private subject = new Subject<HeaderButton | null>();
  public headerButtons$ = this.subject.asObservable();

  constructor() { }

  emit(button: HeaderButton) {
    this.subject.next(button);
  }

  clear() {
    this.subject.next(null);
  }
}
