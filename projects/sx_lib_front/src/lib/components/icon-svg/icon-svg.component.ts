import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sx-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
  imports: [NgStyle]
})
export class IconSvgComponent implements OnInit {
  @Input() iconeSize = '';
  @Input() path_d = '';
  @Input() path_fill = '';
  @Input() viewBox = '0 0 24 24';

  constructor() {}

  ngOnInit(): void {}
}
