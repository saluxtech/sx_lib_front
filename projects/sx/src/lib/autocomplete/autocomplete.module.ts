import { forwardRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteComponent, DisplayValueModule, IconSvgModule, LoaderModule, TextModule } from 'sx';

@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    IconSvgModule,
    TextModule,
    LoaderModule,
    DisplayValueModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [ AutocompleteComponent ],
})
export class AutoCompleteModule { }
