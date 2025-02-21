import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionCardsComponent } from './accordion-cards.component';
import { CardActionModule } from '../card-action/card-action.module';
import { LabelModule } from '../label/label.module';
import { BasicCardModule } from "../basic-card/basic-card.module";
import { TextModule } from "../text/text.module";

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
