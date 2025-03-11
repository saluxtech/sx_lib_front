import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { LabelComponent } from '../label/label.component';
import { labelType } from '../label/label.type';

@Component({
  selector: 'sx-pipe-display',
  templateUrl: './pipe-display.component.html',
  styleUrls: ['./pipe-display.component.scss'],
  imports: [LabelComponent, CurrencyPipe, DatePipe]
})
export class PipeDisplayComponent { 

  @Input() value: any;
  @Input() type: labelType = 'content';
  @Input() pipe!: 'currency' | 'date';
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
