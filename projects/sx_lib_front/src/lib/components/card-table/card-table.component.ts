import { Component, Input } from '@angular/core';
import { CardTableModel } from './card-table.model';
import { NgFor, NgIf } from '@angular/common';
import { BadgesComponent, badgesType, LabelComponent, PipeDisplayComponent } from 'sx_lib_front';

@Component({
  selector: 'sx-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
  imports: [NgFor, LabelComponent, BadgesComponent, NgIf, PipeDisplayComponent]
})
export class CardTableComponent {

  @Input() arrayHeader: CardTableModel[] = [];
  @Input() arrayData: any;

  getType(value: any) {
    const badgeType: {[key: string]: string} = {
      'Criação': 'sucess',
      'Alteração': 'alert',
      'Inativação': 'default',
      'Exclusão': 'error'
    };
    return badgeType[value] ? badgeType[value] as badgesType : 'default' as badgesType;
  }
 }
