import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from 'sx';
import { MatTooltipModule } from '@angular/material/tooltip';


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
