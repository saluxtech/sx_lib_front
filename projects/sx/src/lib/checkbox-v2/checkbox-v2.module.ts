import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelModule } from "../label/label.module";
import { CheckboxV2Component } from './checkbox-v2.component';

@NgModule({
  declarations: [
    CheckboxV2Component
  ],
  exports: [
    CheckboxV2Component
  ],
  imports: [
    CommonModule,
    LabelModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxV2Component),
      multi: true
    }
  ]
})
export class SxCheckboxV2Module { }
