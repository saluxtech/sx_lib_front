import { Component, EventEmitter, Output } from '@angular/core';
import { OptionModel } from '../../models/select.model';
import { ButtonComponent } from "../button/button.component";
import { VariaveisEnum } from '../../enums/variaveis.enum';

@Component({
  selector: 'sx-variables',
  imports: [ButtonComponent],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.scss'
})
export class VariablesComponent {
  @Output() selectedVariable: EventEmitter<string> = new EventEmitter<string>();

  variaveis: OptionModel[] = Object.values(VariaveisEnum).map(value => ({
    label: value,
    value: value,
  }));
}
