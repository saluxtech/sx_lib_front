import { Component, EventEmitter, Output } from '@angular/core';
import { VariaveisEnum } from '../../enums/variaveis.enum';
import { OptionModel } from '../../models/select.model';
import { VariablesButtonListComponent } from '../variables-button-list/variables-button-list.component';

@Component({
  selector: 'sx-variables',
  imports: [VariablesButtonListComponent],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.scss',
})
export class VariablesComponent {
  @Output() selectedVariable: EventEmitter<string> = new EventEmitter<string>();

  variaveis: OptionModel[] = Object.values(VariaveisEnum).map((value) => ({
    label: value,
    value: value,
  }));

  onSelectedVariable(event: string){
    this.selectedVariable.emit(event)
  }
}
