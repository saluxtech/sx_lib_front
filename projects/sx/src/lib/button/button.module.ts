import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LoaderModule } from "../loader/loader.module";
import { IconSvgModule } from "../icon-svg/icon-svg.module";

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    IconSvgModule
  ],
  exports: [
    ButtonComponent
  ]
})

export class ButtonModule { }
