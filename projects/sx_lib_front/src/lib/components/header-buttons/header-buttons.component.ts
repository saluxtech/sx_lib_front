import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderButtons } from '../../enums/header-buttons.enum';
import { ButtonList } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'sx-header-buttons',
  imports: [ButtonComponent],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.scss'
})
export class HeaderButtonsComponent {
  @Input() buttons: ButtonList[] = [];
  @Output() emitButton = new EventEmitter<HeaderButtons>();

  protected handleClick(button: HeaderButtons) {
    this.emitButton.emit(button);
  }
}
