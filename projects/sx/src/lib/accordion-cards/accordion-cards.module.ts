import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionCardsComponent,
  BasicCardModule,
  CardActionModule,
  LabelModule,
  TextModule
} from 'sx';

@NgModule({
  declarations: [
    AccordionCardsComponent,
  ],
  imports: [
    CommonModule,
    CardActionModule,
    LabelModule,
    BasicCardModule,
    TextModule
  ],
  exports: [
    AccordionCardsComponent
  ]
})
export class SxAccordionCardsModule { }
