import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardModule } from '../basic-card/basic-card.module';
import { BadgesModule } from "../badges/badges.module";
import { CardTableComponent } from './card-table.component';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';
import { PipeDisplayModule } from '../pipe-display/pipe-display.module';

@NgModule({
  declarations: [
    CardTableComponent
  ],
  imports: [
    CommonModule,
    BasicCardModule,
    BadgesModule,
    LabelModule,
    ButtonModule,
    PipeDisplayModule,
  ],
  exports: [ CardTableComponent ]
})
export class CardTableModule { }
