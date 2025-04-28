import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { SxTextColor, SxTextVariation } from '../../models/text.model';

@Component({
  selector: 'sx-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  imports: [MatTooltipModule, NgClass]
})
export class TextComponent implements AfterViewInit {
  @Input() color: SxTextColor = 'title-comum';
  
  @Input() variation: SxTextVariation = 'body1';

  @Input() limitWidth: boolean = false;

  @Input() whithTooltip: boolean = false;

  @Input() customClass: string = '';

  tooltipContent: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.tooltipContent = this.el.nativeElement.innerText.trim();
  }
}
