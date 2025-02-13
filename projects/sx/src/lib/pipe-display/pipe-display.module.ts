import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '../label/label.module';
import { BasicCardModule } from '../basic-card/basic-card.module';
import { TextModule } from '../text/text.module';
import { PipeDisplayComponent } from './pipe-display.component';



@NgModule({
  declarations: [
    PipeDisplayComponent,
  ],
  imports: [
    CommonModule,
    LabelModule,
    TextModule,
    BasicCardModule,
  ],
  exports: [
    PipeDisplayComponent
  ]
})
export class PipeDisplayModule { }
