import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderComponent } from '../loader';
import { sxButtonColorType, sxButtonSizeType, sxButtonTypeType as sxButtonVariationType } from "./button.types";

@Component({
  selector: 'sx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [NgStyle, LoaderComponent]
})
export class ButtonComponent implements OnInit {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variation: sxButtonVariationType = 'raised';
  @Input() color: sxButtonColorType = 'primary';
  @Input() size: sxButtonSizeType = 'md';
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isWithIcon: boolean = false;
  @Input() hasWidth: string = 'auto';
  @Input() hasPorcentageWidth: string = 'auto';
  @Input() iconLoaderSize: number = 20;
  @Output() handleClick = new EventEmitter<any>();
  loaderColor: "primary" | "secondary" = 'primary';

  constructor() { }

  ngOnInit(): void {
    this.setLoaderColor();
  }

  private setLoaderColor() {
    if (this.color === 'primary') {
      this.loaderColor = 'secondary';
    } else {
      this.loaderColor = 'primary';
    }
  }

}
