import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from 'sx';

@NgModule({
  declarations: [
    LabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ LabelComponent ]
})
export class LabelModule { }
