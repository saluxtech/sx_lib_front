import { Component, Input } from '@angular/core';
import { labelType } from '../label/models/label.type';

@Component({
  selector: 'sx-pipe-display',
  templateUrl: './pipe-display.component.html',
  styleUrls: ['./pipe-display.component.scss'],
})
export class PipeDisplayComponent { 

  @Input() value: any;
  @Input() type: labelType = 'content';
  @Input() pipe: 'currency' | 'date';
  @Input() color:
  | "default"
  | "primary"
  | "error"
  | "green"
  | "yellow"
  | "red"
  | "black"
  | "gray"
  | "white" = "default";

}
