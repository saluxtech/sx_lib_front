import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, IconSvgModule, LoaderModule } from 'sx';

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
