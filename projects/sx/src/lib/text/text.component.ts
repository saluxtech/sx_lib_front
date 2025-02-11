import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sx-text',
  standalone: false,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements AfterViewInit {
  @Input() color:
    | 'title-comum'
    | 'title-card'
    | 'support-400'
    | 'feedback-error-200'
    | 'white'
    | 'primary-300' = 'title-comum';
  @Input() variation:
    | 'body1'
    | 'body1-bold'
    | 'body2'
    | 'body2-bold'
    | 'body2-bold-pdf'
    | 'caption'
    | 'h3-title'
    | 'h4-title'
    | 'label-input'
    | 'body1-bold1'
    | 'body3'
    | 'body4'
    | 'caption-bold' = 'body1'

    @Input() limitWidth: boolean = false;

    @Input() whithTooltip: boolean = false;

  tooltipContent: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
      this.tooltipContent = this.el.nativeElement.innerText.trim();
  }
}
