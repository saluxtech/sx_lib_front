import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderButtonEvent } from '../../enums/header-buttons.enum';
import { ButtonComponent } from '../button/button.component';
import { HeaderButton } from '../../models/header-button.model';

@Component({
  selector: 'sx-header-buttons',
  imports: [ButtonComponent],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.scss'
})
export class HeaderButtonsComponent {
  @Input() buttons: HeaderButton[] = [];
  @Input() backButton: HeaderButton | null = null;
  @Output() emitButton = new EventEmitter<HeaderButtonEvent>();

  protected handleClick(button: HeaderButtonEvent) {
    this.emitButton.emit(button);
  }
}
