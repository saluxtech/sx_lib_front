import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { SxTextVariation, SxTextColor } from '../models';

@Component({
  selector: 'sx-text',
  standalone: false,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements AfterViewInit {
  @Input() color: SxTextColor = 'title-comum';
  
  @Input() variation: SxTextVariation = 'body1';

  @Input() limitWidth: boolean = false;

  @Input() whithTooltip: boolean = false;

  tooltipContent: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.tooltipContent = this.el.nativeElement.innerText.trim();
  }
}
