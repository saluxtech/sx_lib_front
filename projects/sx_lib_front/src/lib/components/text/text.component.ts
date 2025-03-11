import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { SxTextColor, SxTextVariation } from 'sx_lib_front';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';

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

  tooltipContent: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.tooltipContent = this.el.nativeElement.innerText.trim();
  }
}
