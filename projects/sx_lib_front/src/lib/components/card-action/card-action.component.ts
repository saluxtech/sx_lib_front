import { Component } from '@angular/core';
import { CardActionAbstract } from './card-action.abstract';
import { NgClass, NgIf } from '@angular/common';
import { BasicCardComponent } from '../basic-card/basic-card.component';

@Component({
  selector: 'sx-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
  imports: [BasicCardComponent, NgClass, NgIf]
})
export class CardActionComponent extends CardActionAbstract {

  constructor(

  ) {
    super();
  }

}
