import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesModule } from '../badges/badges.module';
import { LabelComponent } from '../label/label.component';
import { BasicCardModule } from '../basic-card/basic-card.module';
import { TextComponent } from '../text/text.component';
import { BadgeCardActionComponent } from './badge-card-action.component';

@NgModule({
  declarations: [
    BadgeCardActionComponent,
  ],
  imports: [
    CommonModule,
    BadgesModule,
    LabelComponent,
    TextComponent,
    BasicCardModule,
  ],
  exports: [
    BadgeCardActionComponent,
  ]
})
export class BadgeCardActionModule { }
