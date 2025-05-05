import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionModel } from '../../models/select.model';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'sx-variables-button-list',
  imports: [ButtonComponent],
  templateUrl: './variables-button-list.component.html',
  styleUrl: './variables-button-list.component.scss'
})
export class VariablesButtonListComponent {
  @Input() buttonList: OptionModel[] = [];
  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();
}
