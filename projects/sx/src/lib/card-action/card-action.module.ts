import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesModule, BasicCardModule, CardActionComponent } from 'sx';

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
