import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActionComponent } from './card-action.component';
import { BasicCardModule } from "../basic-card/basic-card.module";
import { BadgesModule } from "../badges/badges.module";

@NgModule({
  declarations: [
    CardActionComponent
  ],
  imports: [
    CommonModule,
    BasicCardModule,
    BadgesModule,
  ],
  exports: [ CardActionComponent ]
})
export class CardActionModule { }
