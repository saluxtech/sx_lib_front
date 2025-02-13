import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTableAccordionComponent } from './card-table-accordion.component';
import { BasicCardModule } from '../basic-card/basic-card.module';
import { LabelModule } from '../label/label.module';
import { PipeDisplayModule } from '../pipe-display/pipe-display.module';

@NgModule({
  declarations: [CardTableAccordionComponent],
  imports: [
    CommonModule,
    BasicCardModule,
    LabelModule,
    PipeDisplayModule,
],
  exports: [CardTableAccordionComponent],
})
export class CardTableAccordionModule {}
