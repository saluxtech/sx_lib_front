import { Component, Input } from '@angular/core';
import { LabelComponent, labelType } from 'sx_lib_front';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'sx-pipe-display',
  templateUrl: './pipe-display.component.html',
  styleUrls: ['./pipe-display.component.scss'],
  standalone: true,
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
