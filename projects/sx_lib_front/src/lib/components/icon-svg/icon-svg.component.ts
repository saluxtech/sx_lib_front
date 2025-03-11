import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sx-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
  standalone: true,
  imports: [NgStyle]
})
export class IconSvgComponent implements OnInit {
  @Input() iconeSize: string = '';
  @Input() path_d: string = '';
  @Input() path_fill: string = '';
  @Input() viewBox: string = '0 0 24 24';

  constructor() {}

  ngOnInit(): void {}
}
