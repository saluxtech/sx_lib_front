import {Component, Input, OnInit} from '@angular/core';
import { badgesType } from './bagdges.type';
import { NgIf, NgStyle } from '@angular/common';
import { IconSvgComponent } from 'sx_lib_front';

@Component({
  selector: 'sx-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  imports: [NgStyle, NgIf, IconSvgComponent]
})
export class BadgesComponent implements OnInit{
  @Input() type: badgesType = 'default';
  @Input() size: 'large' | 'small' = 'large';
  @Input() withIcone: boolean = false;
  @Input() width: '100' | '50' | '' = '';
  @Input() isPDF: boolean = false;

  @Input() paddingTop: number | undefined;
  @Input() paddingBottom: number | undefined;
  @Input()
  paddingRight!: number;
  @Input()
  paddingLeft!: number;
  @Input()
  dinamicWidth!: number;

  styles: { [key: string]: string } = {};

  icon = {
    path_fill: '',
    iconeSize: '',
    path_d: ''
  }

  ngOnInit(): void {
    this.getStyles()
    this.getIcon()
  }

  getIcon(){
    if(this.size === 'large'){
      this.icon.iconeSize = '24'
    }
    else{
      this.icon.iconeSize = '16'
    }   
    
    if(this.type === 'sucess'){
      this.icon.path_fill = '#2C9F00'
      this.icon.path_d = 'M10 0.5C15.5078 0.5 20 4.99219 20 10.5C20 16.0469 15.5078 20.5 10 20.5C4.45312 20.5 0 16.0469 0 10.5C0 4.99219 4.45312 0.5 10 0.5ZM14.4922 8.78125C14.9219 8.35156 14.9219 7.6875 14.4922 7.25781C14.0625 6.82812 13.3984 6.82812 12.9688 7.25781L8.75 11.4766L6.99219 9.75781C6.5625 9.32812 5.89844 9.32812 5.46875 9.75781C5.03906 10.1875 5.03906 10.8516 5.46875 11.2812L7.96875 13.7812C8.16406 14.0156 8.4375 14.0938 8.75 14.0938C9.02344 14.0938 9.29688 14.0156 9.49219 13.7812L14.4922 8.78125Z'
    }
    if(this.type === 'alert'){
      this.icon.path_fill = '#323232'
      this.icon.path_d = 'M20.7656 16.7891C21.3906 17.8828 20.6094 19.25 19.3203 19.25H2.64062C1.35156 19.25 0.570312 17.8828 1.19531 16.7891L9.55469 2.57031C10.1797 1.47656 11.7812 1.47656 12.4453 2.57031L20.7656 16.7891ZM10.0625 7.0625V12.0625C10.0625 12.6094 10.5312 13 11 13C11.5078 13 11.9375 12.6094 11.9375 12.0625V7.0625C11.9375 6.55469 11.5078 6.125 11 6.125C10.4531 6.125 10.0625 6.55469 10.0625 7.0625ZM11 16.75C11.6641 16.75 12.2109 16.2031 12.2109 15.5391C12.2109 14.875 11.6641 14.3281 11 14.3281C10.2969 14.3281 9.75 14.875 9.75 15.5391C9.75 16.2031 10.2969 16.75 11 16.75Z'
    }
    if(this.type === 'error'){
      this.icon.path_fill = '#DC001E'
      this.icon.path_d = 'M10 0.5C15.5078 0.5 20 4.99219 20 10.5C20 16.0469 15.5078 20.5 10 20.5C4.45312 20.5 0 16.0469 0 10.5C0 4.99219 4.45312 0.5 10 0.5ZM13.125 12.3359L11.2891 10.5391L13.125 8.70312C13.5156 8.3125 13.5156 7.72656 13.125 7.375C12.7734 6.98438 12.1875 6.98438 11.8359 7.375L10 9.21094L8.125 7.33594C7.77344 6.94531 7.1875 6.94531 6.83594 7.33594C6.44531 7.6875 6.44531 8.27344 6.83594 8.66406L8.67188 10.5L6.83594 12.3359C6.44531 12.7266 6.44531 13.3125 6.83594 13.6641C7.1875 14.0547 7.77344 14.0547 8.125 13.6641L10 11.8281L11.7969 13.6641C12.1484 14.0547 12.7344 14.0547 13.125 13.6641C13.4766 13.3125 13.4766 12.7266 13.125 12.3359Z'
    }
    if(this.type === 'default'){
      this.icon.path_fill = '#323232'
      this.icon.path_d = 'M10 0.5C15.5078 0.5 20 4.99219 20 10.5C20 16.0469 15.5078 20.5 10 20.5C4.45312 20.5 0 16.0469 0 10.5C0 4.99219 4.45312 0.5 10 0.5ZM10 5.5C9.29688 5.5 8.75 6.08594 8.75 6.75C8.75 7.45312 9.29688 8 10 8C10.6641 8 11.25 7.45312 11.25 6.75C11.25 6.08594 10.6641 5.5 10 5.5ZM11.5625 15.5C12.0703 15.5 12.5 15.1094 12.5 14.5625C12.5 14.0547 12.0703 13.625 11.5625 13.625H10.9375V10.1875C10.9375 9.67969 10.5078 9.25 10 9.25H8.75C8.20312 9.25 7.8125 9.67969 7.8125 10.1875C7.8125 10.7344 8.20312 11.125 8.75 11.125H9.0625V13.625H8.4375C7.89062 13.625 7.5 14.0547 7.5 14.5625C7.5 15.1094 7.89062 15.5 8.4375 15.5H11.5625Z'
    }
  }

  getStyles(): void {
    if (this.paddingTop) {
      this.styles['padding-top'] = this.paddingTop + 'px';
    }
  
    if (this.paddingRight) {
      this.styles['padding-right'] = this.paddingRight + 'px';
    }
  
    if (this.paddingBottom) {
      this.styles['padding-bottom'] = this.paddingBottom + 'px';
    }
  
    if (this.paddingLeft) {
      this.styles['padding-left'] = this.paddingLeft + 'px';
    }
    
    if(this.dinamicWidth){
      this.styles['width'] = this.dinamicWidth + 'px';
    }
  }  
}
