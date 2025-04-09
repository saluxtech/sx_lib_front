import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderButton } from '../../models/header-button.model';
import { HeaderButtonEvent } from 'sx_lib_front';

@Injectable({
  providedIn: 'root'
})
export class HeaderButtonsService {
  private subject = new Subject<HeaderButtonEvent | null>();
  public headerButtons$ = this.subject.asObservable();

  constructor() { }

  emit(button: HeaderButtonEvent) {
    this.subject.next(button);
  }

  clear() {
    this.subject.next(null);
  }
}
