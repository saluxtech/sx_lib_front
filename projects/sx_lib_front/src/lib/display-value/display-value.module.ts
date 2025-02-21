import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from "@angular/material/tooltip";
import { DisplayValueComponent } from './display-value.component';
import { BadgesModule } from "../badges/badges.module";
import { LabelModule } from "../label/label.module";

@NgModule({
  declarations: [DisplayValueComponent],
  imports: [CommonModule, MatTooltipModule, BadgesModule, LabelModule],
  exports: [DisplayValueComponent],
})
export class DisplayValueModule { }
