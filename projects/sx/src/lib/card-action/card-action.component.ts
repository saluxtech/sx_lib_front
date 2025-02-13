import { Component } from '@angular/core';
import { CardActionAbstract } from './card-action.abstract';

@Component({
  selector: 'sx-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
  standalone: false
})
export class CardActionComponent extends CardActionAbstract {

  constructor(

  ) {
    super();
  }

}
