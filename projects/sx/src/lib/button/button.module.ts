import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LoaderComponent } from '../loader/loader.component';
import { IconSvgModule } from '../icon-svg/icon-svg.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LoaderComponent,
    IconSvgModule
  ],
  exports: [
    ButtonComponent
  ]
})

export class ButtonModule { }
