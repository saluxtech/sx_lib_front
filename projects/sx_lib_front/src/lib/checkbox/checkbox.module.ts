import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '../label/label.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, LabelModule],
  exports: [CheckboxComponent],
})
export class CheckboxModule { }
