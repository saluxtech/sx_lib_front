import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from "@angular/material/tooltip";
import { BadgesModule, DisplayValueComponent, LabelModule } from 'sx';



@NgModule({
  declarations: [DisplayValueComponent],
  imports: [CommonModule, MatTooltipModule, BadgesModule, LabelModule],
  exports: [DisplayValueComponent],
})
export class DisplayValueModule { }
