import { Component } from '@angular/core';
import { CardActionAbstract } from './card-action.abstract';
import { BasicCardComponent } from 'sx_lib_front';
import { NgClass, NgIf } from '@angular/common';

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
