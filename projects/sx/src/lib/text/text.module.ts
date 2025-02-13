import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    TextComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    TextComponent
  ]
})
export class TextModule { }
