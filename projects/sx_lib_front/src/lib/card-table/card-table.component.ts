import { Component, Input } from '@angular/core';
import { CardTableModel } from './card-table.model';

@Component({
  selector: 'sx-card-table',
  templateUrl: './sx-card-table.component.html',
  styleUrls: ['./sx-card-table.component.scss'],
})
export class CardTableComponent {

  @Input() arrayHeader: CardTableModel[] = [];
  @Input() arrayData: any;

  getType(value) {
    const badgeType: {[key: string]: string} = {
      'Criação': 'sucess',
      'Alteração': 'alert',
      'Inativação': 'default',
      'Exclusão': 'error'
    };
    return badgeType[value] ? badgeType[value] : 'default';
  }
 }
